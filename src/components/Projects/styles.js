import styled from 'styled-components';

export const ProjectAction = styled.li`
    position: relative;
    cursor: pointer;
    height: 35px;
    display: flex;
    align-items: center;

    &:hover span:nth-child(3) {
        opacity: 0.6;
    }

    &:hover {
        background: ${(props) => (props.darkMode ? '#363636' : 'inherit')};
    }
`;

export const SidebarDot = styled.span`
    margin: 0 1rem;

    &:before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: ${(props) => props.color};
        border-radius: 50%;
    }
`;

export const ProjectName = styled.span``;

export const ProjectDelete = styled.span`
    position: absolute;
    right: 5px;
    color: #999;
    margin: 0 0.75rem;
    opacity: 0;
    transition: opacity 0.15s ease-in;

    &:hover {
        opacity: 1 !important;
    }
`;

export const DeleteModal = styled.div``;

export const ModalContent = styled.div`
    padding: 1rem;
`;
