import { useDispatch } from "react-redux";
import { useSelector } from "../hooks/useCustomRedux";
import { clearCart } from "../slices/cartSlice";
import { closeModal, openModal } from "../slices/modalSlice";

const PriceBox = () => {
    const { total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { } = useSelector((state) => state.modal);

    const handleInitializeCart = () => {
        dispatch(clearCart());
    }

    const handleClickDelete = () => {
        dispatch(
            openModal({
                message : "모든 장바구니를 삭제하시겠습니까?",
                onConfirm : () => dispatch(clearCart()),
            })
        )
    }
    
    return (
        <div className="p-12 flex justify-between">
            <button 
            className="border p-4 rounded-md cursor-pointer"
            onClick={handleClickDelete}>
                전체 장바구니 삭제
            </button>

            <div>
                총 가격 : { total } 원
            </div>
        </div>
    )
}

export default PriceBox
