import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQunatity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity=useSelector(getTotalCartQunatity)
  const totalCartPrice=useSelector(getTotalCartPrice)

  if (!totalCartQuantity) return null;
  return (
    <div className="bg-stone-800 px-4 py-4 uppercase text-sm md:text-base text-stone-200 sm:px-6 flex  justify-between items-center ">
      <p className="space-x-4 font-semibold sm:space-x-4">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency (totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
