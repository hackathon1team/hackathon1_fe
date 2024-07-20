import { RxHamburgerMenu } from 'react-icons/rx';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';
import { MdHomeFilled } from 'react-icons/md';
import { MdOutlineQuestionAnswer } from 'react-icons/md';
import { TbDeviceIpadHorizontalQuestion } from 'react-icons/tb';
import { VscGraph } from 'react-icons/vsc';
import { BsPersonFill } from 'react-icons/bs';
import { IoIosLogOut } from 'react-icons/io';

export const HamburgerIcon = ({ onClick }) => (
    <RxHamburgerMenu
        size={26}
        color="white"
        style={{ cursor: 'pointer', marginLeft: '40px' }}
        onClick={onClick}
    />
);
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
export const CancelIcon = ({ onClick }) => (
    <RxCross1
        size={24}
        color="white"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
    />
);

//SideBar Icons
export const LogoutIcon = () => (
    <IoIosLogOut size={20} color="white" style={{ marginRight: '8px' }} />
);
export const PersonIcon = () => <BsPersonFill size={40} color="white" />;
export const GraphIcon = () => <VscGraph size={40} color="white" />;
export const MecoQuestionIcon = () => (
    <TbDeviceIpadHorizontalQuestion size={40} color="white" />
);
export const QuestionIcon = () => (
    <MdOutlineQuestionAnswer size={40} color="white" />
);
export const HomeIcon = () => <MdHomeFilled size={40} color="white" />;
