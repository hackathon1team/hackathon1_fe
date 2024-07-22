import { css } from 'styled-components';

export const BackGroundImg = (Background) => css`
    background-image: url(${Background});
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 72px 30px 0px 30px;
`;
