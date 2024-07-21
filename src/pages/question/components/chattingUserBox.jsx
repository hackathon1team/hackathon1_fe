import styled from 'styled-components';

function ChattingUserBox({ text }) {
    return (
        <ChattingBox1>
            <Box1>{text}</Box1>
        </ChattingBox1>
    );
}
export default ChattingUserBox;

const ChattingBox1 = styled.div`
    display: flex;
    margin: 20px 0;
    justify-content: end;
`;

const Box1 = styled.div`
    background-color: #ffffff;
    color: #5a639c;
    padding: 10px 30px;
    max-width: 80%;
    border-radius: 40px;
    font-weight: bold;
    white-space: pre-line;
    position: relative;
`;
