import React, { useState } from 'react';
import { useProjectsValue } from '../../context';
import Firebase from '../../firebase';
import { generatePushId } from '../../helpers';
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
import '@reach/listbox/styles.css';
import '@reach/dialog/styles.css';
import ColorPicker from './ColorPicker';

const AddProject = ({ shouldShow = false }) => {
    const [show, setShow] = useState(shouldShow);
    const [projectName, setProjectName] = useState('');
    const [projectColor, setProjectColor] = useState('Grey');
    const projectId = generatePushId();

    const { setProjects } = useProjectsValue();

    const addProject = () =>
        projectName &&
        projectColor &&
        Firebase.firestore
            .collection('projects')
            .add({
                projectId,
                name: projectName,
                userId: '33',
                color: projectColor,
            })
            .then(() => {
                setProjects([]);
                setProjectName('');
                setShow(false);
            });

    const handleProjectName = (e) => setProjectName(e.target.value);
    const closeDialog = () => setShow(false);
    const toggleAddProject = () => setShow(!show);

    return (
        <Container data-testid="add-project">
            <ActionContainer onClick={toggleAddProject}>
                <AddIcon data-testid="add-project-plus">
                    <FaPlus />
                </AddIcon>
                <span data-testid="add-project-action">Add Project</span>
            </ActionContainer>

            <Dialog isOpen={show} onDismiss={closeDialog}>
                <ModalHeader>
                    <h1>Add project</h1>
                </ModalHeader>

                <Label>
                    Project name
                    <Input
                        type="text"
                        value={projectName}
                        onChange={handleProjectName}
                        data-testid="project-name"
                    />
                </Label>

                <Label>
                    Project color
                    <ColorPicker onChange={setProjectColor} />
                </Label>

                <ModalActions>
                    <CancelButton onClick={closeDialog} data-testid="hide-project-overlay">
                        Cancel
                    </CancelButton>
                    <AddButton
                        type="button"
                        onClick={addProject}
                        data-testid="add-project-submit"
                        disabled={!projectName || !projectColor}
                    >
                        Add
                    </AddButton>
                </ModalActions>
            </Dialog>
        </Container>
    );
};

export default AddProject;
