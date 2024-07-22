import styled, { keyframes } from 'styled-components';
import Star1 from '../../../assets/Img/questionImg/star.png';

function ChattingMecoBox({ text }) {
    return (
        <>
            <ChattingBox>
                <Box>
                    {text}
                    <Star src={Star1} />
                </Box>
            </ChattingBox>
        </>
    );
}
export default ChattingMecoBox;
const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  80% {    
    opacity: 0;
  }
  100% {    
    opacity: 1;
  }
`;
const ChattingBox = styled.div`
    display: flex;
    margin: 20px 0;
    animation: ${fadeIn} 2s ease-in-out;
`;
const Box = styled.div`
    background-color: #e1e2ed;
    color: #5a639c;
    padding: 10px 30px;
    max-width: 90%;
    border-radius: 40px;
    font-weight: bold;
    white-space: pre-line;
    position: relative;
`;
const Star = styled.img`
    position: absolute;
    top: -7px;
    right: 7px;
`;
