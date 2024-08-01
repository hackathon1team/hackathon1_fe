import { css } from 'styled-components';

export const BackGroundImg = (Background) => css`
    background-image: url(${Background});
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 72px 30px 0px 30px;
    @media screen and (max-width: 500px) {
        padding: 72px 15px 0px 15px;
    }
`;
