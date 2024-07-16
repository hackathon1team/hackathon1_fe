import styled from 'styled-components'
import { BackGroundImg } from '../../styles/common'
import Background from '../../assets/Img/backgroundImg/myPage.png'
import MyPageItem from './components/myPageItem.jsx'


function MyPagePage() {
	return (
	<BackImg>
		<MyPageMainLine>
			소중한 메일을 만들어 가는,<br/>나의 페이지
		</MyPageMainLine>
		<MyPageItem />
	</BackImg>
	)
}

export default MyPagePage

const BackImg = styled.div`
	${BackGroundImg(Background)}
`
const MyPageMainLine = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	color: #5A639C;
	font-size: 23px;
	font-weight: 700;
	margin-bottom: 20px;
`