import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constants'
import RestaurantCategory from './RestaurantCategory'
const RestaurantMenu = () => {
  const [restaurantMenu, serRestaurantMenu] = useState(null)
  const [showIndex, setShowIndex] = useState(0)
  const { restaurantId } = useParams()
  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restaurantId)
    const json = await data.json()
    serRestaurantMenu(json)
  }
  if (restaurantMenu === null) return <Shimmer />

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.data?.cards[0]?.card?.card?.info

  const { itemCards } =
    restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      .card.card

  const category =
    restaurantMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
    )
  console.log(category)
  return (
    <div className="w-3/6 m-auto bg-gray-50">
      <h1 className="font-bold my-2 text-center">{name}</h1>
      <h3 className="text-center">
        {cuisines.join(', ')} - {costForTwoMessage}
      </h3>
      <div>
        {category.map((category, index) => (
          <RestaurantCategory
            data={category.card.card}
            key={category?.card?.card.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default RestaurantMenu
