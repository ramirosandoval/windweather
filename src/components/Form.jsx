import React from 'react'

const Form = ({city, country, handleChange}) =>{

    return(
        <form action="">
            <div className="user-input-container" id="city-input-container">
                <h3>City</h3>
                <input
                    type="text" 
                    placeholder = "Your city" 
                    id="city-input" 
                    name="city"
                    value = {city}
                    onChange = {handleChange}
                    >
                    
                </input>
                
                <p>i.e: Buenos Aires</p>
            </div>

            <div className="user-input-container" id="country-input-container">
                <h3>Country</h3>
                <input
                    type="text"
                    placeholder = "Your country" 
                    id="country-input" 
                    name="country"
                    value = {country}
                    onChange = {handleChange}
                    >
                </input>
                <p>i.e: Argentina</p>
            </div>
        </form>
    );
}

export default Form