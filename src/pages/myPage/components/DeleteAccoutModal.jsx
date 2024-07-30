import CustomModal from '../../../components/customModal/customModal';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import MecoQuestionImg from '../../../assets/Img/mecoQuestion.png';
import styled from 'styled-components';
import { CancelIcon } from '../../../components/icons/icons';
import { useDeleteAccount } from '../../../query/Delete/useDeleteAccount';
import { useNavigate } from 'react-router-dom';

function DeleteAccoutModal({ setIsModalView }) {
    const navigate = useNavigate();
    const { mutate: deleteAccout } = useDeleteAccount(navigate);
    return (
        <CustomModal>
            <GlassmorphismModal>
                <Top>
                    <CancelIcon
                        onClick={() => {
                            setIsModalView(false);
                        }}
                    />
                </Top>
                <img src={MecoQuestionImg} alt="" />
                <Text>
                    메코와의 함께한 시간은 어땠나요? <br />
                    메코는 당신이 떠나지 않았으면 합니다.
                </Text>
                <Button onClick={() => deleteAccout()}>탈퇴하기</Button>
            </GlassmorphismModal>
        </CustomModal>
    );
}
export default DeleteAccoutModal;
const Top = styled.div`
    width: 100%;
    text-align: end;
    padding: 0 30px;
`;
const Text = styled.h2`
    color: white;
    margin-top: 20px;
    line-height: 150%;
    font-size: 20px;
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
