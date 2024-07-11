const Country = ({country}) => {
    console.log("languages:",country.languages)
    return <div>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <Languages languages={country.languages}/>
        <img alt={country.flags['alt']} src={country.flags['png']}/>
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