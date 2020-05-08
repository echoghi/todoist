import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import Firebase from '../../firebase';
import { colorFactory } from '../../helpers';
import { CancelButton, AddButton, ModalActions } from '../../styles';
import { useSelectedProjectValue, useProjectsValue } from '../../context';
import { ProjectAction, SidebarDot, ProjectName, ProjectDelete, ModalContent } from './styles';

const Project = ({ project }) => {
    const color = colorFactory();
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

    return (
        <>
            <SidebarDot color={project.color || color} />
            <ProjectName>{project.name}</ProjectName>
            <ProjectDelete
                id="delete"
                data-testid="delete-project"
                onClick={() => setShowConfirm(!showConfirm)}
            >
                <FaTrashAlt />
            </ProjectDelete>

            <Dialog isOpen={showConfirm} onDismiss={() => setShowConfirm(false)}>
                <ModalContent>
                    <p>Are you sure you want to delete this project?</p>
                </ModalContent>
                <ModalActions>
                    <CancelButton type="button" onClick={() => setShowConfirm(false)}>
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
