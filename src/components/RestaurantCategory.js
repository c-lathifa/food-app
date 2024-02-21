import ItemList from './ItemList'

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex()
  }

  return (
    <div className=" mx-auto my-3 bg-gray-100 px-4 py-3 shadow-md">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="font-bold">{showItems ? '△' : '▽'}</span>
      </div>
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  )
}

export default RestaurantCategory
