import React, {Fragment, useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';


function App() {

  

  const [search, storeSearch] = useState({
    city: '',
    country: ''
  });

  const {city, country} = search;

  const handleChange = e =>{
      storeSearch({
          ...search,
          [e.target.name] : e.target.value
      });
  }

  const  [result, storeResult] = useState({});

  useEffect( () =>{
    const apiRequest = async () =>{
      const apikey = "3d37bc9f740ce7610b0b9c7aae063e39";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}`;
      const response = await fetch(url);
      const result = await response.json();
      storeResult(result);
    }

    apiRequest()
  }, [city, country]);


  return(
    <>
    <section id="inputs-section">
      < h2 id="inputs-title">Search from everywhere!</h2>
        
      <Form
        search = {search}
        city = {city}
        country = {country}
        handleChange = {handleChange}
      />

      <i className='bx bxs-chevron-down' ></i>
      </section>

      <section id="weather">
        <Weather
          city = {city}
          country = {country}
          result = {result}
        />
      </section>
    </>
  );
  
}

export default App;
