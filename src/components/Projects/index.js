import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import Firebase from '../../firebase';
import { CancelButton, AddButton, ModalActions } from '../../styles';
import { useSelectedProjectValue, useProjectsValue } from '../../context';
import { ProjectAction, SidebarDot, ProjectName, ProjectDelete, ModalContent } from './styles';

const Project = ({ project }) => {
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

    return (
        <>
            <SidebarDot color={project.color} />
            <ProjectName>{project.name}</ProjectName>
            <ProjectDelete id="delete" data-testid="delete-project" onClick={toggleConfirm}>
                <FaTrashAlt />
            </ProjectDelete>

            <Dialog isOpen={showConfirm} onDismiss={closeDialog}>
                <ModalContent>
                    <p>Are you sure you want to delete this project?</p>
                </ModalContent>
                <ModalActions>
                    <CancelButton type="button" onClick={closeDialog}>
                        Cancel
                    </CancelButton>
                    <AddButton type="button" onClick={() => deleteProject(project.docId)}>
                        Delete
                    </AddButton>
                </ModalActions>
            </Dialog>
        </>
    );
};

const Projects = ({ activeValue = null }) => {
    const [active, setActive] = useState(activeValue);

    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects &&
        projects.map((project) => (
            <ProjectAction
                active={active === project.projectId}
                key={project.projectId}
                data-doc-id={project.docId}
                data-testid="project-action"
                onClick={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}
            >
                <Project project={project} />
            </ProjectAction>
        ))
    );
};

export default Projects;
