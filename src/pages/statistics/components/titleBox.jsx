import styled from 'styled-components';
import Star from '../../../assets/Img/statistics/star.png';

function TitleBox({ text }) {
  return (
    <Wrapper>
      {text}
      <Img src={Star} />
    </Wrapper>
  );
}
export default TitleBox;

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 12px 60px;
  border-radius: 30px;
  white-space: pre-line;
  color: #5a639c;
  font-weight: bold;
  margin-top: 30px;
  position: relative;
  text-align: center;
`;
const Img = styled.img`
  position: absolute;
  top: -6px;
  right: 5px;
`;
