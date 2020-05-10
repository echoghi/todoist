import React from 'react';
import { ProjectColor, ItemColor, ProjectColors, ColorOption, Checkmark } from './styles';
import { projectColors } from '../../constants';
import { useDarkMode } from '../../context';

const ColorPicker = ({ onChange, value }) => {
    const { darkMode } = useDarkMode();

    return (
        <>
            <ProjectColor color={value} />

            <ProjectColors onChange={onChange} defaultValue="#b8b8b8" darkMode={darkMode}>
                {projectColors.map((color) => {
                    return (
                        <ColorOption value={color.code} key={color.name} darkMode={darkMode}>
                            <ItemColor color={color.code} />
                            {color.name}
                            <Checkmark
                                active={color.code === value ? 'true' : null}
                                darkMode={darkMode}
                            />
                        </ColorOption>
                    );
                })}
            </ProjectColors>
        </>
    );
};

export default ColorPicker;
