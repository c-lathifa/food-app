import { Link } from 'react-router-dom'
import { LOGO_URL } from '../utils/constants'
import { useSelector } from 'react-redux'

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between m-3 shadow-md ">
      <div>
        <img
          className="w-20 cursor-pointer mx-3"
          src={LOGO_URL}
          alt="app logo"
        />
      </div>
      <div>
        <ul className="flex text-center">
          <li className="p-4 cursor-pointer text-xl hover:text-red-600">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 cursor-pointer text-xl hover:text-red-600">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 cursor-pointer text-xl hover:text-red-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 cursor-pointer text-3xl">
            <Link to="/cart">🛒- {cartItems.length}</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
