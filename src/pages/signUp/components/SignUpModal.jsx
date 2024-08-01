import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import CustomModal from '../../../components/customModal/customModal';
import styled from 'styled-components';
import SuccessImg from '../../../assets/Img/signUpImg/mecoSuccess.png';
import { usePostLogIn } from '../../../query/Post/usePostLogIn';

function SignUpMadal({ setIsModalView, user }) {
    const { mutate } = usePostLogIn('/metaAbout');
    const handleStart = () => {
        mutate({
            userId: user.userId,
            userPw: user.userPw,
        });
        setIsModalView(false);
        alert('임시로 회원가입 성공! 튜토리얼 시작합니다');
    };
    return (
        <CustomModal>
            <GlassmorphismModal>
                <Title>회원가입 성공</Title>
                <Img src={SuccessImg} alt="" />
                <Title>
                    이제, 메코와 함께
                    <br />
                    나에 대해 알아보아요.
                </Title>
                <Button onClick={handleStart}>시작하기</Button>
            </GlassmorphismModal>
        </CustomModal>
    );
}
export default SignUpMadal;
const Title = styled.div`
    font-size: 23px;
    font-weight: 600;
    color: #ffffff;
`;

const Img = styled.img`
    width: 150px;
    margin: 20px 0;
`;
const Button = styled.div`
    color: #5a639c;
    font-size: 16px;
    background-color: #ffffff;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 7px;
    :hover {
        opacity: 0.7;
    }
    font-weight: 600;
`;
