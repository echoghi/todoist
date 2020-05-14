import React from 'react';
import { useProjectsValue, useDarkMode } from '../../context';
import { ProjectList, Container, Color } from './styles';
import { ListItem } from '../../styles';

const ProjectOverlay = React.forwardRef(
    ({ setProject, showProjectOverlay, setShowProjectOverlay }, ref) => {
        const { darkMode } = useDarkMode();
        const { projects } = useProjectsValue();

        return (
            projects &&
            showProjectOverlay && (
                <Container darkMode={darkMode} ref={ref}>
                    <ProjectList darkMode={darkMode}>
                        {projects.map((project) => (
                            <ListItem
                                key={project.projectId}
                                data-testid="project-overlay-action"
                                darkMode={darkMode}
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
    }
);

export default ProjectOverlay;
