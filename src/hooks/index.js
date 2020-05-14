import { useState, useEffect } from 'react';
import moment from 'moment';
import Firebase from '../firebase';
import { collatedTasksExist } from '../helpers';

export const useTasks = (selectedProject) => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = Firebase.firestore.collection('tasks').where('userId', '==', '33');

        if (selectedProject && !collatedTasksExist(selectedProject)) {
            unsubscribe = unsubscribe.where('projectId', '==', selectedProject);
        } else if (selectedProject === 'TODAY') {
            unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYY'));
        } else if (selectedProject === 'INBOX' || selectedProject === 0) {
            unsubscribe = unsubscribe.where('date', '==', '');
        }

        unsubscribe = unsubscribe.onSnapshot((snapshot) => {
            const newTasks = snapshot.docs.map((task) => ({
                id: task.id,
                ...task.data(),
            }));

            setTasks(
                selectedProject === 'NEXT_7'
                    ? newTasks.filter(
                          (task) =>
                              moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                              task.archived !== true
                      )
                    : newTasks.filter((task) => task.archived !== true)
            );

            setArchivedTasks(newTasks.filter((task) => task.archived !== false));
        });

        // unsubscribe =
        //     selectedProject && !collatedTasksExist(selectedProject)
        //         ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        //         : selectedProject === 'TODAY'
        //         ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYY')))
        //         : selectedProject === 'INBOX' || selectedProject === 0
        //         ? (unsubscribe = unsubscribe.where('date', '==', ''))
        //         : unsubscribe;

        return () => unsubscribe();
    }, [selectedProject]);

    return { tasks, archivedTasks };
};

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        Firebase.firestore
            .collection('projects')
            .where('userId', '==', '33')
            .orderBy('projectId')
            .get()
            .then((snapshot) => {
                const allProjects = snapshot.docs.map((project) => ({
                    ...project.data(),
                    docId: project.id,
                }));

                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    setProjects(allProjects);
                }
            });
    }, [projects]);

    return { projects, setProjects };
};

export function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}

export function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    return [storedValue, setValue];
}
