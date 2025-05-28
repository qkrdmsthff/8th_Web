import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from '../hooks/useCustomRedux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { calculateTotals } from '../slices/cartSlice';
import { closeModal } from '../slices/modalSlice';

const Navbar = () => {
    const { amount, cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());
    }, [dispatch, cartItems])

    return (
        <div 
        className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 
            className="text-2xl font-semibold cursor-pointer"
            onClick={() => {window.location.href = '/'}}> 
                CHICHI's Market 
            </h1>

            <div className="flex items-center space-x-2">
                <FaShoppingCart className='text-2xl' />

                <span className='text-xl font-medium'>
                    { amount }
                </span>
            </div>
        </div>
    )
}

export default Navbar
