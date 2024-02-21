import { useEffect, useState } from 'react'
import RestaurantCard from './RestaurentCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  console.log(restaurantList)
  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.68020&lng=77.62500&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
    )
    const json = await data.json()
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    )
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    )
  }
  if (restaurantList.length === 0) {
    return <Shimmer />
  }
  return (
    <div className="max-w-5xl m-auto">
      <div>
        <input
          value={searchText}
          type="search"
          className="outline-none rounded-lg p-3 border-2 w-6/12 h-12 ml-6  hover:border-yellow-300 focus:border-red-600"
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button
          className="mx-3 py-2 px-8 text-xl rounded-lg bg-yellow-300 hover:shadow-lg"
          onClick={() => {
            console.log(searchText)

            const filteredRestaurant = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            )

            setFilteredRestaurant(filteredRestaurant)
          }}
        >
          Search
        </button>
        <button
          className="mx-1 py-2 px-8 text-xl rounded-lg bg-red-500 hover:shadow-lg"
          onClick={() => {
            const topRastedRestaurants = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating > 4,
            )
            setRestaurantList(topRastedRestaurants)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={'/restaurant/' + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body
