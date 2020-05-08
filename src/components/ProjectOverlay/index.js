import React from 'react';
import { useProjectsValue } from '../../context';
import { ProjectList, Container, ListItem, Color } from './styles';

const ProjectOverlay = ({ setProject, showProjectOverlay, setShowProjectOverlay }) => {
    const { projects } = useProjectsValue();

    return (
        projects &&
        showProjectOverlay && (
            <Container>
                <ProjectList>
                    {projects.map((project) => (
                        <ListItem
                            key={project.projectId}
                            data-testid="project-overlay-action"
                            onClick={() => {
                                setProject(project.projectId);
                                setShowProjectOverlay(false);
                            }}
                        >
                            <Color color={project.color} />
                            {project.name}
                        </ListItem>
                    ))}
                </ProjectList>
            </Container>
        )
    );
};

export default ProjectOverlay;
