import { RxHamburgerMenu } from 'react-icons/rx';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

export const HamburgerIcon = () => <RxHamburgerMenu size={26} color="white" />;
export const ArrowIcon = () => (
    <MdKeyboardDoubleArrowDown
        size={40}
        color="white"
        style={{ marginTop: 15, cursor: 'pointer' }}
    />
);
export const ArrowRightIcon = () => <IoIosArrowForward size={15} />;
export const ArrowLeftIcon = () => <IoIosArrowBack size={15} />;
export const UpArrowIcon = () => (
    <MdKeyboardDoubleArrowUp
        size={40}
        color="white"
        style={{ marginBottom: 15, cursor: 'pointer' }}
    />
);
