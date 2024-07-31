import { toast } from 'react-toastify';
import { SuccessIcon, ErrorIcon } from '../../components/icons/icons';

function ToastComponent({ type, message }) {
    switch (type) {
        case 'success':
            // enum으로 타입 지정했을 때 가독성 상승 -> case ToastType.success:
            toast.success(message || '성공적으로 완료되었습니다', {
                ...toastOptions,
                icon: <img src={SuccessIcon} alt="success" />,
            });
            return;
        case 'error':
            toast.error(message || '다시 한번 시도해주세요', {
                ...toastOptions,
                icon: <img src={ErrorIcon} alt="error" />,
            });
    }
}

export const Toast = () =>
    toast(<ToastComponent />, {
        autoClose: 2000,
        hideProgressBar: true,
        progress: undefined,
    });
