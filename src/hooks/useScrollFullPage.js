import { useEffect, useState } from 'react';

function useScrollFullPage() {
    const totalPageNumber = 6;

    const [currentInputs, setCurrentInputs] = useState({
        currentWindowHeight: window.innerHeight,
        currentPage: 0,
    });

    //윈도우 리사이즈 시 , current height 체크
    const setPageSize = () => {
        setCurrentInputs({ currentWindowHeight: window.innerHeight });
    };

    //현재 페이지가 몇페이지인지 구하는 함수
    const setPage = () => {
        //1부터 6까지 1,2,3,4,5
        for (var i = 1; i < totalPageNumber; i++) {
            if (window.scrollY < currentInputs.currentWindowHeight * i) {
                setCurrentInputs({ ...currentInputs, currentPage: i });
                return;
            }
        }
    };

    // Scroll Event와 Resize시 무한 반복을 피하기 위함
    useEffect(() => {
        window.addEventListener('scroll', setPage);
        window.addEventListener('resize', setPageSize);
        return () => {
            window.removeEventListener('scroll', setPage);
            window.removeEventListener('resize', setPageSize);
        };
    });

    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        // 마우스 휠을 내릴때

        if (e.deltaY > 0) {
            let p = currentInputs.currentPage;
            while (p < totalPageNumber) {
                if (currentInputs.currentPage === p) {
                    window.scrollTo({
                        top: currentInputs.currentWindowHeight * p,
                        behavior: 'smooth',
                    });
                }
                p++;
            }
        }

        // 마우스 휠을 올릴때
        if (e.deltaY < 0) {
            let p = currentInputs.currentPage;

            while (p < totalPageNumber) {
                if (currentInputs.currentPage === p) {
                    window.scrollTo({
                        top: currentInputs.currentWindowHeight * (p - 1),
                        behavior: 'smooth',
                    });
                }
                p++;
            }
        }
    });
}
export default useScrollFullPage;
