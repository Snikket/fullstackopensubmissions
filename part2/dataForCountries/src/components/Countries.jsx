const Countries = ({countries, setFilterTerm}) => {
    console.log("countries are :", countries)
    const handleCountrySelection = (countryName) => {
        setFilterTerm(countryName);
    };
    if(!countries){
        return null;
    }
    return <div>
                {countries.map(
                    (country) => <div key={country.name.official}>{country.name.common}<button onClick={()=>handleCountrySelection(country.name.common)}>show</button></div>)
                }
            </div>
}


export default Countries;