import styled from 'styled-components'

const myPageItem = () => {
  return (
  <MyPageBox>
    <LogoutBox>
      <img src="src\assets\Img\myPageImg\hamsterlogo.png" alt="hamsterlogo" />
      <LogoutBoxDetail>
        <Name>메코메코</Name>
        <LogDetail>메코와 메일을 함께하는,<br/> 하루하루</LogDetail>
        <LogoutButton>로그아웃</LogoutButton>
      </LogoutBoxDetail>
    </LogoutBox>

    <DeleteAccountBox>
      <DeleteAccountBoxDetail>
        <DelDetail>너 자신을 알라.<br/>-소크라테스</DelDetail>
        <DeleteAccountButton>회원탈퇴</DeleteAccountButton>
      </DeleteAccountBoxDetail>
      <img src="src\assets\Img\myPageImg\starcloud.png" alt="starcloud" />
    </DeleteAccountBox>
  </MyPageBox>
  )
}

export default myPageItem

const MyPageBox = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
`

const LogoutBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;

const LogoutBoxDetail = styled.div`
  padding-left: 20px;
  margin-top: 15px;
  text-align: left;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: #5A639C;
  margin-bottom: 5px;
`;

const LogDetail = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #5A639C;
  margin-bottom: 15px;
`;

const LogoutButton = styled.button`
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  color: #5A639C;

  &:hover {
    background-color: #4b578e;
  }
`;

const DeleteAccountBox = styled.div`
  display: flex;
  justify-content: center;
`;

const DeleteAccountBoxDetail = styled.div`
  padding-right: 20px;
  margin-top: 15px;
  text-align: right;
`;

const DelDetail = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 5px;
  color: #5A639C;
  margin-bottom: 15px;
`;

const DeleteAccountButton = styled.button`
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  color: #5A639C;

  &:hover {
    background-color: #4b578e;
  }
`;