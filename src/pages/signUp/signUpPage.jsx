import styled from 'styled-components';
import Background from '../../assets/Img/backgroundImg/signUp_1.png';
import Background1 from '../../assets/Img/backgroundImg/signUp_2.png';
import { BackGroundImg } from '../../styles/common';

function SignUpPage() {
    return (
        <>
            <BackImg></BackImg>
            <BackImg1></BackImg1>
        </>
    );
}
export default SignUpPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
`;
const BackImg1 = styled.div`
    ${BackGroundImg(Background1)}
`;
