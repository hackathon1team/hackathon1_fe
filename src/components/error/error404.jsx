import { BackGroundImg } from '../../styles/common';
import styled from 'styled-components';
import Error from '../../assets/Img/404.png';
import { useNavigate } from 'react-router-dom';

function Error404Page() {
    const navigate = useNavigate();
    return (
        <BackImg>
            <>
                <Title>
                    메코..! 메코...! <br />
                    없는 페이지에 들어오셨습니다.
                </Title>
                <img src={Error} alt="" />
                <Button onClick={() => navigate('/')}>홈으로</Button>
            </>
        </BackImg>
    );
}
export default Error404Page;

const BackImg = styled.div`
    ${BackGroundImg()}
    padding: 0 30px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > img {
        width: 70%;
    }
`;

const Title = styled.h2`
    text-align: center;

    line-height: 200%;
    opacity: 0.7;
`;
const Button = styled.div`
    color: #5a639c;
    font-size: 16px;
    background-color: #ffffff;
    padding: 12px 100px;
    margin-top: 20px;
    border-radius: 15px;
    :hover {
        opacity: 0.7;
    }
    font-weight: 600;
`;
