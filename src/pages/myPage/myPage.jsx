import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
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
    ${BackGroundImg()};
    background: linear-gradient(#ad96d3 0%, #d7cbec 50%, #ad96d3 100%);
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
