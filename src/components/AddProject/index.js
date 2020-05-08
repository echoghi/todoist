import React, { useState } from 'react';
import { useProjectsValue } from '../../context';
import Firebase from '../../firebase';
import { generatePushId, colorFactory } from '../../helpers';
import {
    AddButton,
    Input,
    AddIcon,
    Container,
    ActionContainer,
    ModalHeader,
    Label,
    ModalActions,
    CancelButton,
} from './styles';
import { FaPlus } from 'react-icons/fa';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

const AddProject = ({ shouldShow = false }) => {
    const [show, setShow] = useState(shouldShow);
    const [projectName, setProjectName] = useState('');

    const projectId = generatePushId();

    const { setProjects } = useProjectsValue();

    const addProject = () =>
        projectName &&
        Firebase.firestore
            .collection('projects')
            .add({
                projectId,
                name: projectName,
                userId: '33',
                color: colorFactory(),
            })
            .then(() => {
                setProjects([]);
                setProjectName('');
                setShow(false);
            });

    return (
        <Container data-testid="add-project">
            <ActionContainer onClick={() => setShow(!show)}>
                <AddIcon data-testid="add-project-plus">
                    <FaPlus />
                </AddIcon>
                <span data-testid="add-project-action">Add Project</span>
            </ActionContainer>

            <Dialog isOpen={show} onDismiss={() => setShow(false)}>
                <ModalHeader>
                    <h1>Add project</h1>
                </ModalHeader>

                <Label>
                    Project Name
                    <Input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        data-testid="project-name"
                    />
                </Label>

                <ModalActions>
                    <CancelButton onClick={() => setShow(false)} data-testid="hide-project-overlay">
                        Cancel
                    </CancelButton>
                    <AddButton
                        type="button"
                        onClick={addProject}
                        data-testid="add-project-submit"
                        disabled={!projectName}
                    >
                        Add Project
                    </AddButton>
                </ModalActions>
            </Dialog>
        </Container>
    );
};

export default AddProject;
