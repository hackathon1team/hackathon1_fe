import styled from 'styled-components';
import { CancelIcon } from '../../../components/icons/icons';
import { category } from '../../../constants/category';

function CategoryModal({ setIsView, setAddDate }) {
    const handleClickEmotion = (el) => {
        setAddDate((prev) => ({ ...prev, category: el }));
        setIsView((prev) => ({ ...prev, categoryModal: false }));
    };
    return (
        <Wrapper>
            <Top>
                <CancelIcon
                    color={'black'}
                    onClick={() =>
                        setIsView((prev) => ({ ...prev, categoryModal: false }))
                    }
                />
            </Top>
            <CategoryList>
                {category.map((el, idx) => (
                    <Category key={idx} onClick={() => handleClickEmotion(el)}>
                        {el}
                    </Category>
                ))}
            </CategoryList>
        </Wrapper>
    );
}
export default CategoryModal;

const Wrapper = styled.div`
    height: 210px;
    width: 100%;
    overflow-y: auto;
    left: 0;
    background-color: white;
    position: absolute;
    bottom: 0;
    border-radius: 40px 40px 0 0;
    color: #5d659e;
    padding: 20px 30px;
    z-index: 11;
    animation: fadeIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    @keyframes fadeIn {
        0% {
            bottom: -20rem;
            opacity: 0;
        }
        100% {
            bottom: 0;
            opacity: 1;
        }
    }
`;
const Top = styled.div`
    display: flex;
    justify-content: end;
`;

const CategoryList = styled.div`
    text-align: center;
    margin: 10px 0;
`;
const Category = styled.div`
    padding: 6px 0;
    font-size: 16px;
    font-weight: bold;
`;
