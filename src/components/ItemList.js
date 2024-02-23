import { useDispatch } from 'react-redux'
import { IMG_URL } from '../utils/constants'
import { addItem } from '../utils/cartSlice'

const ItemList = ({ items }) => {
  const dispatch = useDispatch()
  const handleAddItems = (item) => {
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 h-auto bg-gray-300 border-gray-200 border-b-2 relative"
        >
          <div className="m-1 p-1 flex">
            <div className="w-9/12">
              <div>
                <span>{item.card.info.name}</span>
                <span className="text-sm text-wrap">
                  - ₹{item.card.info.price / 100}
                </span>
              </div>
              <div className="text-gray-500 text-xs m-1 p-1">
                {item.card.info.description}
              </div>
            </div>
            <div className="w-3/12 relative">
              <img src={IMG_URL + item.card.info.imageId} className=" w-28" />
              <button
                className=" px-4 py-2 rounded-lg bg-yellow-300 hover:shadow-lg absolute -bottom-0 right-0"
                onClick={() => handleAddItems(item)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
