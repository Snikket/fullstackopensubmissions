import weatherService from '../services/weatherService';

const Country = ({country, temperature, wind, icon}) => {
    console.log("Country params! country:",country)
    console.log("Country params! temperature:",temperature)
    console.log("Country params! wind:",wind)
    console.log("Country params! icon:",icon)
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
    console.log(iconUrl)

    return <div>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages:</h3>
        <Languages languages={country.languages}/>
        <img alt={country.flags['alt']} src={country.flags['png']}/>
        <h3>Weather in {country.capital}</h3>
        <p>temperature {temperature} Celcius</p>
        <img src={iconUrl}/>
        <p>wind {wind}m/s</p>
    </div>
}

const Languages = ({languages}) => {
    return <ul>
            {Object.keys(languages).map((languageCode) => (
                <li key={languageCode}>{languages[languageCode]}</li>
            ))}
    </ul>
}


export default Country