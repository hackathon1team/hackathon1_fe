import styled from 'styled-components';

//glassmorphism 공통 css (height를 주면 그걸로 설정되고 아니면 기본 500px)
function GlassmorphismModal(props) {
    const { height = '100%', margin = '0px', isBlur = false, children } = props;

    return (
        <Box height={height} margin={margin} isBlur={isBlur}>
            {children}
        </Box>
    );
}
export default GlassmorphismModal;

const Box = styled.div`
    width: 100%;
    padding: 30px 0;

    background: ${({ isBlur }) =>
        !isBlur &&
        'linear-gradient(to bottom right,#928ac45c,#9c95c593,#9892c3b0,#8e87b6d5)'};

    border-radius: 40px;

    box-shadow:
        0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);

    backdrop-filter: ${({ isBlur }) => isBlur && 'blur(15.1px)'};
    border: 1px solid rgba(255, 255, 255, 0.14);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: ${({ height }) => height};
    position: relative;
    margin-top: ${({ margin }) => margin};
`;
