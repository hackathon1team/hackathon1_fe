import styled from 'styled-components';
import Background from '../../assets/Img/backgroundImg/signUp_1.png';
import { BackGroundImg } from '../../styles/common';
import MetaAbout from './components/MetaAbout';
import MetaQuestion from './components/MetaQuestion';

function SignUpPage() {
    return (
        <>
            <MetaAbout />
            <MetaQuestion />
        </>
    );
}
export default SignUpPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
`;
