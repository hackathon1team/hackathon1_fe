import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Background from '../../assets/Img/backgroundImg/myPage.png';
import MyPageItem from './components/myPageItem.jsx';

function MyPagePage() {
    return (
        <BackImg>
            <MyPageMainLine>
                소중한 메일을 만들어 가는,
                <br />
                나의 페이지
            </MyPageMainLine>
            <MyPageItem />
        </BackImg>
    );
}

export default MyPagePage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}/* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
`;
const MyPageMainLine = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #5a639c;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
    @media screen and (max-width: 500px) {
        font-size: 24px;
    }
`;
