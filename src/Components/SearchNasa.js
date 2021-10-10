import React, {useState,useEffect} from 'react'
import Loading from './Loading';
const SearchNasa = (props) => {
    const [searchResults, setSearchResults] = useState()
    const [searchText,setSearchText]= useState("");
    const [loading, setLoading] = useState(false);
    const fetchResults = async () =>{
        setLoading(true);
        setSearchResults();
        const url = `https://api.nasa.gov/techtransfer/patent/?${searchText}&api_key=${props.api_key}`;
        let searchdata = await fetch(url);
        let searchDataParsed = await searchdata.json();
        setSearchResults(searchDataParsed);
        setLoading(false);
       
    }
    const handleChange =(event) =>{
        setSearchText(event.target.value);
    }
    return (
        <div className="mx-3">
            <div className="my-2 mx-auto  text-center">
                <label htmlFor="searchText">Search NASA
                <input className="mx-2 my-1 px-2" type="text" value={searchText} id="searchText" onChange={handleChange} placeholder="Search"/></label>
                <button className="btn btn-primary py-1 px-2 mb-1" type="submit" onClick={fetchResults}>Search</button>
            </div>

            {loading && <Loading />}
            {searchResults && searchResults["results"].map(element=>{
                return <div className="d-flex mx-auto bg-secondary my-2">
                    <div className="w-50 p-2 m-0" >
                    <img src={element[10]} alt="Can't Load the Image" width="100%"/>
                    </div>
                    <div className="w-50 p-2 m-0" dangerouslySetInnerHTML={{__html: `<h2>${element[2]}</h2><p>${element[3]}</p>`}} />
                    
                </div>
            })}
        </div>
    )
}

export default SearchNasa
