import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

export const StyledToastConatiner = styled(ToastContainer)`
    margin-top: 10px;
`;

const defaultToastOption = {
    position: 'top-center',
    autoClose: 1500,
    // hideProgressBar: true,
    // 2-3. 사라지기까지 progressBar 보이지 않게 설정
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
};

const useToast = (message, type) => {
    switch (type) {
        case 'success':
            return toast.success(message, {
                ...defaultToastOption,
                // icon: <div>😚</div>,
            });
        case 'error':
            return toast.error(message, {
                ...defaultToastOption,
                // icon: <div>😡</div>,
            });
        case 'warning':
            return toast.warning(message, {
                ...defaultToastOption,
                // icon: <div>😡</div>,
            });
    }
};

export default useToast;
