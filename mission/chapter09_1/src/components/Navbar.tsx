import { FaShoppingCart } from 'react-icons/fa';
import { useEffect } from 'react';
import { useCartActions, useCartInfo } from '../hooks/useCartStore';

const Navbar = () => {
    const { amount, cartItems } = useCartInfo();
    const { calculateTotals } = useCartActions();

    useEffect(() => {
        calculateTotals();
    }, [cartItems, calculateTotals])

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
