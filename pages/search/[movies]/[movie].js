import React, {useState, useEffect} from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router'
import Navbar from 'components/navbar/navbar'
import Search from 'components/body/search'
import Movie404 from 'components/error/movie-404'
import Error500 from 'components/error/error-500'
import { InfoHOC } from 'components/body/infoHOC';

const fetcher = (...args) => fetch(...args).then(res => res.json())
const ShowSearchResults = () =>{
    const router = useRouter()
    const { movie } = router.query
    const [movieStringInURL , setMovieStringInURL] = useState('');  

    useEffect(() => {
        if (movie) {
            setMovieStringInURL(movie);
        }
      }, [movie]);

    const url =  '/api/byTitle/' + movieStringInURL
    const { data, error } = useSWR(movieStringInURL ? url : null, fetcher)

    if(error){
        return (
            <Error500/>
        )
    }

    if(data?.Response == "False"){
        return(
            <Movie404/>
        )
    }

    const infoTitles = ["Director","Actors", "Awards", "Language", "Runtime"];     // edit to change data returned under plot

    let posterToShow = data?.Poster;

    if(posterToShow === 'N/A' || !posterToShow){
        posterToShow = '/404-image.jpg';
    }

    {/*the code below needed className modifiers to become responsive.
    Non-marked classNames are for mobile only, sm modifier is useless*/}

    return (
        <>
        <Navbar/>
            <div className="container mx-auto flex flex-col h-full w-full items-center">
                <div className="md:w-1/2 w-3/4 h-full py-4">              
                    <Search homepage={false}/>
                </div>
            </div>
            <div className="md:pl-8 px-8 text-white text-4xl font-semibold">
                {data?.Title} - {data?.Year}
            </div>
            <div className="md:flex md:pl-8 px-8 py-4 text-white">
                <div className="md:max-w-xs"> 
                    <div className=" text-white text-lg py-2"> {data?.Rated} - {data?.Genre}</div>
                    <div className="flex md:justify-start justify-center">
                        <img className="rounded-3xl" src={posterToShow}/>
                    </div>
                </div>
                <div className="py-3 xl:px-32 md:px-8 pr-8 xl:w-2/3">
                    <div className="grid md:grid-cols-3 text-white font-bold">
                        <div>
                            IMDb: {data?.imdbRating} 
                        </div>
                        <div>
                            IMDb Votes: {data?.imdbVotes}
                        </div>
                        <div className="lg:flex justify-end">
                            Metascore: {data?.Metascore}
                        </div>
                    </div>
                    <div className="py-4">
                        {data?.Plot}
                        <div className="pt-2"><hr/></div>
                    </div>
                    {data && data.Director &&       // replaces ?. function, needed because data can't be found initially for some reason
                        infoTitles.map((element) => {      // returns all data labeled in infoTItles 
                            return (                       // I understand it's not entirely necessary, but I wanted to play around with and understand HOC's
                                <InfoHOC key={element} title={element}>
                                    {data[element]}
                                </InfoHOC>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}   

export default ShowSearchResults;