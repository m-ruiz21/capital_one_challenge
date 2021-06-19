import React, {useState} from 'react';
import Link from 'next/link';


const Search = ({homepage}) => {
    const [searchString , setSearchString] = useState('');
    const handleOnChange = (event) => {
        setSearchString(event.target.value);
    }

    var label = homepage ? "Explore Now" : "Search"

    return (
        <>
        <div className="flex justify-center py-3">
                <input className ="pl-3 w-full h-10 rounded-lg" type="text" placeholder ="Search Movie Titles" onChange={handleOnChange} />
        </div>
        <div className="flex justify-center">
            <Link href={`/search/${searchString}`}>
                <button className="bg-transparent hover:bg-blue-light text-blue-light font-semibold hover:text-white py-2 px-4 
                border border-blue-light hover:border-transparent rounded">
                    {label}
                </button>
            </Link>
        </div>
        </>
    );
}

export default Search