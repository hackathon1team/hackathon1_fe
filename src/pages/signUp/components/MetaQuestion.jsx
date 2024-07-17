import styled from 'styled-components';
import { BackGroundImg } from '../../../styles/common';
import Background from '../../../assets/Img/backgroundImg/meta_1.png';

function MetaQuestion() {
    return <BackImg></BackImg>;
}
export default MetaQuestion;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    display: flex;
    justify-content: center;
`;
