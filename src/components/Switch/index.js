import React from 'react';
import { Container, Input, Handle, Label } from './styles';
import { useDarkMode } from '../../context';

const Switch = ({
    id,
    checked = false,
    dataTestId = 'switch',
    name = 'switch',
    label = 'Add a label',
    ...props
}) => {
    const { darkMode } = useDarkMode();
    return (
        <Label>
            <Container data-testid={dataTestId} {...props} checked={checked} darkMode={darkMode}>
                <Input type="checkbox" name={name} />
                <Handle checked={checked} />
            </Container>
            {label}
        </Label>
    );
};

export default Switch;
