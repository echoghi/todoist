import React, { useState } from 'react';
import { useProjectsValue, useDarkMode } from '../../context';
import Firebase from '../../firebase';
import { generatePushId } from '../../helpers';
import { AddButton, AddIcon, Container, ActionContainer } from './styles';
import { FaPlus } from 'react-icons/fa';
import { Dialog } from '@reach/dialog';
import '@reach/listbox/styles.css';
import '@reach/dialog/styles.css';
import ColorPicker from './ColorPicker';
import Switch from '../Switch';
import { ModalActions, ModalHeader, Input, Label, CancelButton } from '../../styles';

const AddProject = ({ shouldShow = false }) => {
    const { darkMode } = useDarkMode();
    const [show, setShow] = useState(shouldShow);
    const [isFavorite, setFavorite] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projectColor, setProjectColor] = useState('#b8b8b8');
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
                favorite: isFavorite,
            })
            .then(() => {
                setProjects([]);
                setProjectName('');
                setProjectColor('#b8b8b8');
                setShow(false);
            });

    const handleProjectName = (e) => setProjectName(e.target.value);
    const closeDialog = () => {
        setProjects([]);
        setProjectName('');
        setProjectColor('#b8b8b8');
        setFavorite(false);
        setShow(false);
    };
    const toggleAddProject = () => setShow(!show);

    return (
        <Container data-testid="add-project">
            <ActionContainer onClick={toggleAddProject}>
                <AddIcon data-testid="add-project-plus">
                    <FaPlus />
                </AddIcon>
                <span data-testid="add-project-action">Add Project</span>
            </ActionContainer>

            <Dialog isOpen={show} onDismiss={closeDialog} aria-label="Form to add a project">
                <ModalHeader darkMode={darkMode}>
                    <h1>Add project</h1>
                </ModalHeader>

                <Label>
                    Project name
                    <Input
                        type="text"
                        value={projectName}
                        onChange={handleProjectName}
                        data-testid="project-name"
                        darkMode={darkMode}
                    />
                </Label>

                <Label>
                    Project color
                    <ColorPicker onChange={setProjectColor} value={projectColor} />
                </Label>

                <Switch
                    name="is-favorite"
                    dataTestId="project-favorite"
                    label="Add to favorites"
                    checked={isFavorite}
                    onClick={() => setFavorite(!isFavorite)}
                />

                <ModalActions darkMode={darkMode}>
                    <CancelButton
                        onClick={closeDialog}
                        data-testid="hide-project-overlay"
                        darkMode={darkMode}
                    >
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
