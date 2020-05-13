import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import Firebase from '../../firebase';
import { CancelButton, AddButton, ModalActions } from '../../styles';
import { useSelectedProjectValue, useProjectsValue, useDarkMode } from '../../context';
import { ProjectAction, SidebarDot, ProjectName, ProjectDelete, ModalContent } from './styles';

export const Project = ({ project }) => {
    const { darkMode } = useDarkMode();
    const [showConfirm, setShowConfirm] = useState(false);
    const { projects, setProjects } = useProjectsValue();
    const { setSelectedProject } = useSelectedProjectValue();
    const deleteProject = (docId) => {
        Firebase.firestore
            .collection('projects')
            .doc(docId)
            .delete()
            .then(() => {
                setProjects([...projects]);
                setSelectedProject('INBOX');
            });
    };
    const closeDialog = () => setShowConfirm(false);
    const toggleConfirm = () => setShowConfirm(!showConfirm);
    const labelId = `label__${project.name}--${project.color}`;

    return (
        <>
            <SidebarDot color={project.color} />
            <ProjectName>{project.name}</ProjectName>
            <ProjectDelete id="delete" data-testid="delete-project" onClick={toggleConfirm}>
                <FaTrashAlt />
            </ProjectDelete>

            <Dialog
                isOpen={showConfirm}
                onDismiss={closeDialog}
                aria-label="Confirmation about deleting this project"
            >
                <ModalContent aria-labelledby={labelId}>
                    <p id={labelId}>Are you sure you want to delete this project?</p>
                </ModalContent>
                <ModalActions darkMode={darkMode}>
                    <CancelButton type="button" onClick={closeDialog} darkMode={darkMode}>
                        Cancel
                    </CancelButton>
                    <AddButton
                        type="button"
                        onClick={() => deleteProject(project.docId)}
                        darkMode={darkMode}
                    >
                        Delete
                    </AddButton>
                </ModalActions>
            </Dialog>
        </>
    );
};

const Projects = ({ activeValue = null, favorites = false }) => {
    const [active, setActive] = useState(activeValue);
    const { darkMode } = useDarkMode();
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const projectsToShow = favorites ? projects.filter((project) => project.favorite) : projects;

    return (
        projectsToShow &&
        projectsToShow.map((project) => (
            <ProjectAction
                darkMode={darkMode}
                active={active === project.projectId}
                key={project.projectId}
                data-doc-id={project.docId}
                data-testid="project-action"
                onClick={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                    document.title = `${project.name}: Todoist`;
                }}
            >
                <Project project={project} />
            </ProjectAction>
        ))
    );
};

export default Projects;
