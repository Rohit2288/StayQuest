import React, { useState } from 'react'
import "./filter.scss"
import { useSearchParams } from "react-router-dom";

const Filter = () => {

    const [searchParams , setSeachParams] = useSearchParams();

    const [query , setQuery] = useState({
        type: searchParams.get('type') || "",
        city: searchParams.get('city') || "",
        minPrice: searchParams.get('minPrice') || 0,
        maxPrice: searchParams.get('maxPrice') || 10000000,
        bedRoom: searchParams.get('bedroom') || 1,
    }) 

    const handleChange = (e) =>{
        setQuery({
            ...query,
            [e.target.name]:e.target.value
        })
    }

    const handleFilter = ()=>{
        setSeachParams(query);
    }

  return (
    <div className='filter'>
        <h1>Search results for <b>{searchParams.get("city")}</b></h1>
        <div className="top">
            <div className="item">
                <label htmlFor="city">Location</label>
                <input 
                type="text" 
                id='city' 
                name='city' 
                placeholder='City Location'
                onChange={handleChange}
                defaultValue={query.city}
                />
            </div>
        </div>
        <div className="bottom">
            <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type" id="type" onChange={handleChange} defaultValue={query.type}>
                    <option value="any">any</option>
                    <option value="Flats/Rooms">Flats/Rooms</option>
                    <option value="Hostel">Hostel</option>
                    <option value="PG">PG</option>
                </select>
            </div>
            {/* <div className="item">
                <label htmlFor="city">Location</label>
                <input 
                type="text" 
                id='city' 
                name='city' 
                placeholder='City Location'
                />
            </div> */}
            <div className="item">
                <label htmlFor="minPrice">Min Price</label>
                <input 
                type="number" 
                id='minPrice' 
                name='minPrice' 
                placeholder='any'
                onChange={handleChange}
                defaultValue={query.minPrice} 
                />
            </div>
            <div className="item">
                <label htmlFor="maxPrice">Max Price</label>
                <input 
                type="number" 
                id='maxPrice' 
                name='maxPrice' 
                placeholder='any'
                onChange={handleChange}
                defaultValue={query.maxPrice} 
                />
            </div>
            <div className="item">
                <label htmlFor="bedroom">BedRoom</label>
                <input 
                type="text" 
                id='bedroom' 
                name='bedroom' 
                placeholder='any'
                onChange={handleChange}
                defaultValue={query.bedRoom}
                />
            </div>
            <button onClick={handleFilter}>
                <img src="/search.png" alt="" />
            </button>
        </div>
    </div>
  )
}

export default Filter