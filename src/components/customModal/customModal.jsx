import styled from 'styled-components';
import ModalPortal from './modalPortal';

function CustomModal(props) {
    const { children } = props;
    return (
        <ModalPortal>
            <Wrapper>
                <Box>{children}</Box>
            </Wrapper>
        </ModalPortal>
    );
}
export default CustomModal;
const Wrapper = styled.div`
    position: fixed;
    left: 0;

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
`;
const Box = styled.div`
    max-width: 520px;
    width: 100%;
    padding: 20px;
    text-align: center;
    animation: fadeIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    position: fixed;
    top: 20%;
    @keyframes fadeIn {
        0% {
            top: -20rem;
        }
        100% {
            top: 20%;
        }
    }
`;
