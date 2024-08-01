import { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useMountObsever } from '../../../hooks/useMountObsever';
function PercentBar(props) {
    const { ratio, heigth = 'regular', category, count, unit = '회' } = props;

    const ref = useRef(null);
    const isInViewport = useMountObsever(ref);

    return (
        <Wrapper>
            <Title>{category === '' ? '저번달' : category}</Title>
            <BarWrapper>
                <Bar
                    width={ratio * count}
                    heigth={heigth}
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
    min-width: 20%;
    max-width: 20%;
`;
const BarWrapper = styled.div`
    width: 80%;
`;

const slide = (width) => keyframes`
  from {
    width: 20%;
  }
  to {
    width: ${width};
  }
`;

const Bar = styled.div`
    background-color: #ffe4a2;
    width: ${({ width }) => (width ? width : 1)}%;
    height: ${({ heigth }) => (heigth === 'bold' ? '45px' : '30px')};
    border-radius: 0 30px 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    &.animation {
        animation: ${(width) => slide(width)} 1.5s ease-out;
    }
`;
