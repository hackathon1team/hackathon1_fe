import styled, { keyframes } from 'styled-components';

function PercentBar() {
  let ratio = 10;
  let eachVal = 10;
  let total = ratio * eachVal;
  let titleTxt = '7회';
  return (
    <Wrapper>
      <Title>기쁨🥹</Title>
      <BarWrapper>
        <Bar width={total}>{total === 0 ? '' : <div>{titleTxt}</div>}</Bar>
      </BarWrapper>
    </Wrapper>
  );
}
export default PercentBar;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  font-size: 15px;
  margin-right: 10px;
  color: #ffffff;
  min-width: 13%;
`;
const BarWrapper = styled.div`
  width: 87%;
`;

const fillAnimation = (width) => keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${width};
  }
`;

const Bar = styled.div`
  background-color: #ffe4a2;
  width: ${({ width }) => width}%;
  height: 47px;
  border-radius: 0 30px 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  animation: ${(width) => fillAnimation(width)} 1s ease-out;
`;
