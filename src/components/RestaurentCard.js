import { IMG_URL } from '../utils/constants.js'

const RestaurantCard = (props) => {
  const { restaurantData } = props

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    restaurantData?.info
  const { deliveryTime } = restaurantData?.info?.sla

  return (
    <div className="w-56  mx-3 my-4 rounded-lg p-2 cursor-pointer border-2 hover:border-2 hover:border-yellow-300  hover:shadow-lg">
      <div className="">
        <img
          className="w-56 h-56 object-cover overflow-hidden"
          src={IMG_URL + cloudinaryImageId}
          alt="food-image"
        />
      </div>
      <div>{name}</div>
      <div>⭐{avgRating}</div>
      <div>{cuisines.join(', ')}</div>
      <div>
        <span>{costForTwo}</span>
      </div>
      <div>{deliveryTime} Mins</div>
    </div>
  )
}

export default RestaurantCard
