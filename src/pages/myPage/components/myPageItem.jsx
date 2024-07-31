import styled from 'styled-components';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import meco from '../../../assets/Img/meco.png';
import TokenService from '../../../utils/tokenService';
import UserNickNameService from '../../../utils/userNickNameService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DeleteAccoutModal from '../components/DeleteAccoutModal';

const myPageItem = () => {
    const [isModalView, setIsModalView] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        TokenService.removeAccessToken();
        UserNickNameService.removeNickName();
        navigate('/logIn');
    };
    return (
        <Wrapper>
            <MyPageBox>
                <GlassmorphismModal>
                    <LogoutBox>
                        <img src={meco} alt="hamsterlogo" />
                        <LogoutBoxDetail>
                            <Name>메코메코</Name>
                            <LogDetail>
                                메코와 메일을
                                <br /> 함께하는,
                                <br /> 하루하루
                            </LogDetail>
                            <LogoutButton onClick={handleLogout}>
                                로그아웃
                            </LogoutButton>
                        </LogoutBoxDetail>
                    </LogoutBox>

                    <DeleteAccountBox>
                        <DeleteAccountBoxDetail>
                            <DelDetail>
                                너 자신을 알라.
                                <br />
                                -소크라테스
                            </DelDetail>
                            <DeleteAccountButton
                                onClick={() => {
                                    setIsModalView(true);
                                }}
                            >
                                회원탈퇴
                            </DeleteAccountButton>
                        </DeleteAccountBoxDetail>
                        <img
                            src="src\assets\Img\myPageImg\starcloud.png"
                            alt="starcloud"
                        />
                    </DeleteAccountBox>
                </GlassmorphismModal>
            </MyPageBox>
            {isModalView && (
                <DeleteAccoutModal setIsModalView={setIsModalView} />
            )}
        </Wrapper>
    );
};

export default myPageItem;

const Wrapper = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;
const MyPageBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoutBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    margin-bottom: 30px;

    img {
        width: 165px;
    }
`;

const LogoutBoxDetail = styled.div`
    padding-left: 30px;
    margin-top: 10px;
    text-align: left;
`;

const Name = styled.div`
    font-size: 27px;
    @media screen and (max-width: 500px) {
        font-size: 23px;
    }

    font-weight: 900;
    color: #5a639c;
    margin-bottom: 5px;
`;

const LogDetail = styled.div`
    font-size: 20px;
    @media screen and (max-width: 500px) {
        font-size: 17px;
    }
    font-weight: 600;
    color: #5a639cb2;
    margin-bottom: 10px;
`;

const LogoutButton = styled.button`
    border: none;
    border-radius: 30px;
    padding: 8px 17px;
    cursor: pointer;
    font-size: 12px;
    color: #5f6bbacb;
    font-weight: 700;

    &:hover {
        opacity: 0.7;
    }
`;

const DeleteAccountBox = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px 0px;

    img {
        width: 135px;
        height: 120px;
    }
`;

const DeleteAccountBoxDetail = styled.div`
    padding-right: 10px;
`;

const DelDetail = styled.div`
    font-size: 24px;
    font-weight: 900;
    color: #5a639cb2;
    margin-bottom: 10px;
    text-align: right;
    font-size: 27px;
    @media screen and (max-width: 500px) {
        font-size: 23px;
    }
`;

const DeleteAccountButton = styled.button`
    border: none;
    border-radius: 30px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 9px;
    color: #5f6bbacb;
    font-weight: 700;
    &:hover {
        opacity: 0.7;
    }
`;
