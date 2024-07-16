import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { HamburgerIcon } from '../icons/icons'

function Header() {
	return (
		<>
			<Wrapper>
				<HamburgerIcon />
			</Wrapper>
			<Outlet />
		</>
	)
}
export default Header

const Wrapper = styled.div`
	height: 72px;
	display: flex;
	align-items: center;
	margin-left: 40px;
	position: fixed;
`
