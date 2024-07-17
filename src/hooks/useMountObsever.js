import { useEffect, useRef, useState } from 'react';

export const useMountObsever = (targetRef) => {
    const [isView, setIsView] = useState(false);
    const observer = useRef();

    useEffect(() => {
        if (!observer.current) {
            const observerCallback = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsView(true);
                    }
                });
            };

            observer.current = new window.IntersectionObserver(
                observerCallback,
                {
                    threshold: 0,
                },
            );
        }

        if (targetRef.current) {
            observer.current.observe(targetRef.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [targetRef]);
    return isView;
};
