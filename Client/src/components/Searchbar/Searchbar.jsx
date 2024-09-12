import { useState } from 'react'
import { Link } from "react-router-dom"
import './searchbar.scss';


const types = ["Flats/Rooms" , "Hostel" , "PG"];

const Searchbar = () => {
  const [query,setQuery] = useState({
    type: "Flats/Rooms",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  })

  const setType = (type)=>{
    setQuery((prevQuery) => ({
      ...prevQuery,
      type: type,
    }));
  }

  const handleChange = (e) => {
    setQuery((prevQuery) => ({
     ...prevQuery,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="searchBar">
      <div className="type">
      {types.map((type) => (
          <button
            key={type}
            onClick={() => setType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form >
        <input type="text" name='city' placeholder='City' onChange={handleChange}/>
        <input type="number" 
        name='minPrice' 
        min={0} 
        max={100000} 
        placeholder='Min Price'
        onChange={handleChange}
        />
        <input type="number" 
        name='maxPrice' 
        min={0} 
        max={10000} 
        placeholder='Max Price'
        onChange={handleChange}
        />
        <Link to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>

    </div>
  )
}

export default Searchbar