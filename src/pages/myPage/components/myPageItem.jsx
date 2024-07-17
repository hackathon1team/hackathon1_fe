import styled from 'styled-components'

const myPageItem = () => {
  return (
  <MyPageBox>
    <LogoutBox>
      <img src="src\assets\Img\myPageImg\hamsterlogo.png" alt="hamsterlogo" />
      <LogoutBoxDetail>
        <Name>메코메코</Name>
        <LogDetail>메코와 메일을<br/> 함께하는,<br/> 하루하루</LogDetail>
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
  margin: 60px 50px 0px;
  display: flex;
  flex-direction: column;
`

const LogoutBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  margin-bottom: 30px;

  img {
    width: 125px;
    height: 145px;
  }
`;

const LogoutBoxDetail = styled.div`
  padding-left: 30px;
  margin-top: 10px;
  text-align: left;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: #5A639C;
  margin-bottom: 5px;
`;

const LogDetail = styled.div`
  font-size: 14px;
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
    background-color: #4b578e;
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
    background-color: #4b578e;
  }
`;