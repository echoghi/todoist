import React from 'react';
import { ProjectColor, ProjectColors, ColorOption } from './styles';

const ColorPicker = ({ onChange }) => {
    const colors = [
        {
            name: 'Berry Red',
            code: '#B8255f',
        },
        {
            name: 'Red',
            code: '#DB4035',
        },
        {
            name: 'Orange',
            code: '#FF9933',
        },
        {
            name: 'Yellow',
            code: '#FAD000',
        },
        {
            name: 'Olive Green',
            code: '#afb83b',
        },
        {
            name: 'Grey',
            code: '#b8b8b8',
        },
    ];
    return (
        <ProjectColors defaultValue="Grey" onChange={onChange}>
            {colors.map((color) => {
                return (
                    <ColorOption value={color.name} key={color.name}>
                        <ProjectColor color={color.code} />
                        {color.name}
                    </ColorOption>
                );
            })}
        </ProjectColors>
    );
};

export default ColorPicker;
