import React from 'react';
import { ProjectColor, ItemColor, ProjectColors, ColorOption, Checkmark } from './styles';
import { projectColors } from '../../constants';

const ColorPicker = ({ onChange, value }) => {
    return (
        <>
            <ProjectColor color={value} />

            <ProjectColors onChange={onChange} defaultValue="#b8b8b8">
                {projectColors.map((color) => {
                    return (
                        <ColorOption value={color.code} key={color.name}>
                            <ItemColor color={color.code} />
                            {color.name}
                            <Checkmark active={color.code === value ? 'true' : null} />
                        </ColorOption>
                    );
                })}
            </ProjectColors>
        </>
    );
};

export default ColorPicker;
