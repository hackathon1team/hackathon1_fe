import { RxHamburgerMenu } from 'react-icons/rx';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

export const HamburgerIcon = () => <RxHamburgerMenu size={26} color="white" />;
export const ArrowIcon = () => (
    <MdKeyboardDoubleArrowDown
        size={50}
        color="white"
        style={{ marginTop: 30, cursor: 'pointer' }}
    />
);
export const UpArrowIcon = () => (
    <MdKeyboardDoubleArrowUp
        size={50}
        color="white"
        style={{ marginBottom: 30, cursor: 'pointer' }}
    />
);
