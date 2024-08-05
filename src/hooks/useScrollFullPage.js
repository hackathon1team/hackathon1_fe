import { useEffect, useState } from 'react';

function useScrollFullPage() {
    const [currentInputs, setCurrentInputs] = useState({
        currentWindowHeight: window.innerHeight,
        currentPage: 1,
    });
    let totalPageNumber = 6;

    const setPage = () => {
        for (var i = 1; i < totalPageNumber; i++) {
            if (window.scrollY < currentInputs.currentWindowHeight * i) {
                setCurrentInputs({ ...currentInputs, currentPage: i });
                return;
            }
        }
    };

    const setPageSize = () => {
        setCurrentInputs({ currentWindowHeight: window.innerHeight });
    };

    useEffect(() => {
        window.addEventListener('scroll', setPage);
        window.addEventListener('resize', setPageSize);
        return () => {
            window.removeEventListener('scroll', setPage);
            window.removeEventListener('resize', setPageSize);
        };
    });

    window.addEventListener('wheel', (e) => {
        // 마우스 휠을 내릴때
        if (e.deltaY > 0) {
            let p = 1;

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
        if (e.deltaY < 0) {
            let p = 1;
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
