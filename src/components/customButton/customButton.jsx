import styled from 'styled-components';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons/icons';

function CustomButton(props) {
    const { icon, onClick, children } = props;
    return (
        <MetaButton onClick={onClick}>
            {icon === 'left' && <ArrowLeftIcon />}
            <div>{children}</div>
            {icon === 'right' && <ArrowRightIcon />}
        </MetaButton>
    );
}
export default CustomButton;
const MetaButton = styled.button`
    border: none;
    border-radius: 20px;
    font-size: 15px;
    color: #5a639c;
    padding: 8px 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    background-color: white;
`;
