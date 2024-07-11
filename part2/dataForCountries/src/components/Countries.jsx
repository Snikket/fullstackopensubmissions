const Countries = ({countries}) => {
    console.log("countries are :", countries)
    if(!countries){
        return null;
    }
    return <div>
                {countries.map(
                    (country) => <div key={country.name.official}> {country.name.common}</div> )
                }
            </div>
}

export default Countries;