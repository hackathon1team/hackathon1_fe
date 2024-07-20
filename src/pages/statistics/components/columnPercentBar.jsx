import { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useMountObsever } from '../../../hooks/useMountObsever';
function ColumnPercentBar(props) {
    const { ratio, category, count, unit = '회' } = props;

    const ref = useRef(null);
    const isInViewport = useMountObsever(ref);

    return (
        <Wrapper>
            <BarWrapper>
                <Bar
                    height={ratio * count}
                    ref={ref}
                    className={isInViewport ? 'animation' : ''}
                >
                    {ratio * count === 0 ? (
                        ''
                    ) : (
                        <div>
                            {count}
                            {unit}
                        </div>
                    )}
                </Bar>
            </BarWrapper>
            <Title>{category}</Title>
        </Wrapper>
    );
}
export default ColumnPercentBar;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
`;
const Title = styled.div`
    font-size: 15px;
    padding: 15px 0;
    text-align: center;
    color: white;
    font-weight: bold;
`;
const BarWrapper = styled.div`
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 330px;
    justify-content: end;
`;

const slide = (height) => keyframes`
  from {
    height: 0;
  }
  to {
    height: ${height};
  }
`;

const Bar = styled.div`
    background-color: #ffe4a2;
    min-width: 50px;
    min-height: ${({ height }) => (height ? height : 1)}%;
    border-radius: 30px 30px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    &.animation {
        animation: ${(height) => slide(height)} 2s ease-out;
    }
`;
