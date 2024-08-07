import styled from 'styled-components';
import UserApi from '../../../apis/UserApi';

function SignUpId({ setUser, id, setIsCheckAndError }) {
    const handleCheckId = async () => {
        if (id.trim().length < 4 || id.trim().length > 12)
            return setIsCheckAndError(() => ({
                isCheckIdMs: '최소 4글자 최대 12글자 입력해주세요.',
                isError: true,
            }));
        try {
            const res = await UserApi.getCheckId(id);
            res.data
                ? setIsCheckAndError((prev) => ({
                      isError: true,
                      isCheckIdMs: '사용할수없는 아이디입니다.',
                  }))
                : setIsCheckAndError((prev) => ({
                      isError: true,
                      isCheckIdMs: '사용가능한 아이디입니다.',
                  }));
        } catch (err) {}
    };

    const handleOnChangeInput = (val) => {
        setUser((prev) => ({ ...prev, userId: val }));
        setIsCheckAndError(() => ({
            isError: false,
            isCheckIdMs: '중복확인 해주세요.',
        }));
    };
    return (
        <NameBox0>
            <NameBox1>사용 할 아이디를 작성해주세요.</NameBox1>
            <IdBox>
                <NameInput2
                    type="text"
                    value={id}
                    placeholder="아이디 최대 10글자"
                    onChange={(e) => handleOnChangeInput(e.target.value)}
                />
                <IdCheckBt
                    type="Button"
                    value="중복확인"
                    onClick={handleCheckId}
                    onChange={(e) =>
                        setUser((prev) => ({ ...prev, userId: e.target.value }))
                    }
                />
            </IdBox>
        </NameBox0>
    );
}
export default SignUpId;

const NameBox1 = styled.h2`
    width: 100%;
    height: 100px;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
`;
const NameBox0 = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const IdCheckBt = styled.input`
    border: 0px;
    width: 20%;
    height: 43px;
    border-radius: 10px;
    font-size: 14px;
    background-color: #65628b;
    color: #ffffff;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
        background-color: #e2bbe9a8;
        transition: 0.3s;
        color: #ffffff;
    }
`;
const NameInput2 = styled.input`
    border-width: 0 0 2px;
    border-color: white;
    width: 75%;
    font-size: 22px;
    padding-left: 5px;
    padding-right: 50px;
    padding-bottom: 10px;
    background-color: transparent;
    color: white;

    color: white;

    &::placeholder {
        color: #edecec;
        opacity: 70%;
    }
    &:focus {
        outline: none;
        border-color: #e2bbe9;
        color: white;
    }
`;
const IdBox = styled.div`
    width: 100%;
    display: flex;
`;
