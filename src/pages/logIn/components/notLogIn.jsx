import styled from 'styled-components';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import { BackGroundImg } from '../../../styles/common';

function NotLogIn() {
    return (
        <BackImg>
            <GlassmorphismModal>회원가입하고 사용하세요</GlassmorphismModal>
        </BackImg>
    );
}
export default NotLogIn;

const BackImg = styled.div`
    ${BackGroundImg()}
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 120px;
`;
