import { useDispatch, useSelector } from 'react-redux'
import { IMG_URL } from '../utils/constants'
import { clearCart } from '../utils/cartSlice.js'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)
  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  if (cartItems.length === 0) {
    return (
      <h1 className="w-6/12 m-auto text-center bg-gray-100  border-b-2 p-4">
        Your Cart is empty
      </h1>
    )
  }
  return (
    <div className="w-6/12 m-auto bg-gray-100  border-b-2 p-4">
      <div>
        {cartItems.map((item) => (
          <div key={item.card.info.id} className="flex p-3">
            <div>
              <img src={IMG_URL + item.card.info.imageId} className="w-28" />
            </div>
            <div className="p-2">
              <p>{item.card.info.name}</p>
              <p>₹{item.card.info.price / 100}</p>
              <p>Quantity - 1</p>
            </div>
            <div>
              <button className="px-4 py-2 rounded-lg bg-yellow-300 hover:shadow-lg">
                delete
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center">
          <button
            className="px-4 py-2 rounded-lg bg-red-600 hover:shadow-lg text-center"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
