import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import SideBar from '../sideBar/sideBar';
import { HamburgerIcon } from '../icons/icons';
import { useState } from 'react';

function Header() {
    const [isView, setIsView] = useState(false);

    const handleOpen = () => {
        setIsView(true);
    };
    const handleCancel = () => {
        setIsView(false);
    };
    return (
        <Container>
            {isView ? (
                <WrapperSideBar>
                    <SideBar
                        handleCancel={handleCancel}
                        setIsView={setIsView}
                    />
                </WrapperSideBar>
            ) : (
                <Wrapper isView={isView}>
                    <HamburgerIcon onClick={handleOpen} />
                </Wrapper>
            )}
            <Outlet />
        </Container>
    );
}
export default Header;
const Container = styled.div``;
const Wrapper = styled.div`
    height: 72px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1;
`;
const fadeIn = keyframes`
  0% {
    transform: translatex(-100%);
    opacity: 0.2;
    
  }
  30%{
    transform: translatex(0px);
    opacity: 1;

  }
  100% {    
  }
`;
const WrapperSideBar = styled.div`
    position: fixed;
    z-index: 1;
    animation: ${fadeIn} 2.2s ease-in-out;
`;
