import { css } from 'styled-components';

export const BackGroundImg = () => css`
    background: linear-gradient(#59629b 12%, #7776b3 47%, #9b86bd 100%);
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    padding: 72px 30px 0px 30px;
    @media screen and (max-width: 500px) {
        padding: 72px 15px 0px 15px;
    }
`;
