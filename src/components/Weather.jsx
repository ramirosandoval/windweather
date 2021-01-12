import React, {Fragment} from 'react';

const Weather = ({city, country, result}) =>{
    let weather = {};

    console.log(result);
    const {name, main} = result;

    if (main) {
        weather = result.weather[0];
    }

    console.log(weather);

    return(

        !main?

            <>
                <h1 id="noinfo">Input your location please</h1>
                <p id="noinfo-description">Above this section</p>
            </>
        : 

            <div className="weather-container">
                <header id="weather-header">
                    <h1>{(main.temp - 273.15).toFixed(1)} &#176;</h1>
                    <aside>

                        {
                        (weather.main === "Rain") ?
                        <i className="wi wi-day-showers"></i>
                        
                        : ((weather.main === "Clouds")?
                            <i className="wi wi-day-cloudy"></i>

                            :((weather.main === "Clear") ?
                                <i className="wi wi-day-sunny"></i>
                                :
                                <i className="wi wi-day-snow"></i>
                            ))
                        }

                    </aside>
                </header>


                <section id="temperatures-container">
                        <div id="min-temp-container">
                            <h3 className="range-temps">Min temp: {(main.temp_min - 273.15).toFixed(1)}</h3>
                        </div>

                        <div id="max-temp-container">
                            <h3 className="range-temps">Max temp: {(main.temp_max - 273.15).toFixed(1)}</h3>
                        </div>        
                </section>


                <footer id="weather-footer">
                    <p>{name}</p>
                </footer>

                

                
            </div>
            
    );
}

export default Weather