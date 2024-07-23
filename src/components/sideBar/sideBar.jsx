import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    CancelIcon,
    GraphIcon,
    HomeIcon,
    LogoutIcon,
    MecoQuestionIcon,
    PersonIcon,
    QuestionIcon,
} from '../icons/icons';

function SideBar({ handleCancel, setIsView }) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogOut = () => {
        alert('로그아웃은 기능은 준비중입니다 :');
    };

    const handleUrl = (url) => {
        navigate(url);
        setIsView(false);
    };

    const urlList = [
        {
            url: '/',
            korUrl: '홈 (시간가계부)',
            icon: <HomeIcon />,
        },
        {
            url: '/question',
            korUrl: '메코의 질문',
            icon: <MecoQuestionIcon />,
        },
        {
            url: '/statistics',
            korUrl: '통계',
            icon: <GraphIcon />,
        },
        {
            url: '/socrates',
            korUrl: '감정 돌아보기',
            icon: <QuestionIcon />,
        },
        {
            url: '/myPage',
            korUrl: '마이페이지',
            icon: <PersonIcon />,
        },
    ];
    return (
        <Wrapper>
            <CancelBox>
                <CancelIcon onClick={handleCancel} />
            </CancelBox>
            <NameBox>
                <Name>이승훈님</Name>
                <LogOut onClick={handleLogOut}>
                    <LogoutIcon />
                    로그아웃
                </LogOut>
            </NameBox>
            <UrlWrapper>
                {urlList.map((el, idx) => (
                    <UrlBox
                        key={idx}
                        isUrl={location.pathname === el.url}
                        onClick={() => handleUrl(el.url)}
                    >
                        {el.icon}
                        <Url>{el.korUrl}</Url>
                    </UrlBox>
                ))}
            </UrlWrapper>
        </Wrapper>
    );
}
export default SideBar;

const Wrapper = styled.div`
    background-color: #333859aa;
    height: 100vh;
    width: 250px;
    color: white;
    z-index: 1000;

    transform: translate(0, 0);
    transition: all 500ms linear;
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
`;
const CancelBox = styled.div`
    text-align: end;
    padding: 50px 25px 0 25px;
`;
const NameBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
    padding: 0 25px;
`;
const Name = styled.div`
    font-size: 20px;
    font-weight: bold;
`;
const LogOut = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const UrlWrapper = styled.div`
    margin-top: 60px;
`;
const UrlBox = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 25px;
    background-color: ${({ isUrl }) => (isUrl ? '#545c9fe6' : 'none')};
    cursor: pointer;
`;
const Url = styled.div`
    width: 100%;
    text-align: center;
    font-size: 21px;
`;
