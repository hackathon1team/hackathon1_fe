import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Background from '../../assets/Img/backgroundImg/calendar&question.png';

function TimeCalendarPage() {
    return (
        <>
            <BackImg>1-1 시간 가계부</BackImg>
            <BackImg>
                1-2 시간 가계부 (1-2여기 리스트는 피그마처럼 list안에 데이터가
                5개면 저렇게 4개면 4개있고 하나는 여백! 3개면 당연히 여백으로
                (그리고 아이콘도 최대한 해보고 안되면 자리라도 만들어주세요!)
            </BackImg>
        </>
    );
}
export default TimeCalendarPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
`;
