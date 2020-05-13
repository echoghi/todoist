import React from 'react';
import { Container, Input, Handle, Label } from './styles';

const Switch = ({
    id,
    checked = false,
    dataTestId = 'switch',
    name = 'switch',
    label = 'Add a label',
    ...props
}) => {
    return (
        <Label>
            <Container data-testid={dataTestId} {...props} checked={checked}>
                <Input type="checkbox" name={name} />
                <Handle checked={checked} />
            </Container>
            {label}
        </Label>
    );
};

export default Switch;
