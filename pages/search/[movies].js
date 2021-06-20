import React, {useState, useEffect} from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router'
import Search from 'components/body/search'
import Navbar from 'components/navbar/navbar'
import Link from 'next/link';
import Error500 from 'components/error/error-500'
import Movie404 from 'components/error/movie-404'

const fetcher = (...args) => fetch(...args).then(res => res.json()) 

const ShowSearchResults = () =>{

    const router = useRouter()
    const { movies } = router.query
    const [searchStringInURL , setSearchStringInURL] = useState(''); 
    const [pageNum , setPageNum] = useState(1);

    useEffect(() => {
        if (movies) {
            setSearchStringInURL(movies);
            setPageNum(1);
            setData({})
        }
      }, [movies]);

    // TO DO: mask API key: Priority level: 1
    const url =  '/api/bySearch/' + searchStringInURL + '/' + pageNum
    const { data: dataFromAPI, error } = useSWR(searchStringInURL ? url : null, fetcher)

    const [data , setData] = useState(dataFromAPI); 

    useEffect(() => { 
        if (dataFromAPI && dataFromAPI.Search) {    // data and dataFromAPI don't exist for a bit and are seperate states, hence both if's
            setData( () => {
                let tempSearchData = dataFromAPI.Search;
              
                if(data?.Search){
                    tempSearchData = [...data.Search, ...dataFromAPI.Search];
                }
                
                const tempData = {
                    ...data,
                    ...dataFromAPI,
                    Search: tempSearchData
                };
                return tempData
            } );
        }
    }, [dataFromAPI]);

    if(error){
        return (
            <Error500/>
        )
    }

    if(dataFromAPI?.Response == "False"){
        return(
            <Movie404/>
        )
    }

    const BtnLoadMore = () => {   // figure out how to change name
        if(pageNum < Math.ceil(data?.totalResults/10) ){
            return (
                <button onClick={() => setPageNum((() => pageNum + 1))} className="bg-transparent hover:bg-blue-light text-blue-light font-semibold 
                hover:text-white py-2 px-4 border border-blue-light hover:border-transparent rounded">
                    Load more
                </button>      
            );
        } else if(data?.Search) {   // stops message from showing up before data is recieved
            return(
                <div className="text-white text-lg">
                    Whoops! Looks like we're at the end of the road
                </div>
            )
        } else {
            return <div></div>
        }
    }

    {/*the code below needed className modifiers to become responsive.
    Non-marked classNamees are for mobile only, sm modifier is useless*/}

    return (
        <>
        <Navbar/>
        <div className="bg-blue">
            <div className="container mx-auto flex flex-col h-full w-full items-center justify-center">
                <div className="flex flex-col md:w-1/2 w-3/4 h-full justify-center py-4">                  
                    <Search homepage={false}/>
                </div>
            </div>
            <div className="py-10 container mx-auto flex flex-col h-full w-full items-center justify-center">
                <div className="grid mx-4 lg:gap-16 md:gap-8 gap-4 lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
                    {data?.Search && data.Search.map(movie => {
                        let posterToShow = movie?.Poster;

                        if(posterToShow === 'N/A' || !posterToShow){
                            posterToShow = '/404-image.jpg';
                        }

                        return (
                            <div className="relative" key={movie.imdbID}>
                                <Link href={`/search/${searchStringInURL}/${movie?.Title}`}>
                                    <a className="rounded-3xl absolute inset-0 text-white bg-blue-light text-start flex flex-col justify-end px-4 pb-8 
                                    opacity-0 hover:opacity-90 bg-opacity-90">
                                        <p className="font-bold text-xl">{movie?.Title}</p>
                                        <p>{movie?.Year}</p>  
                                    </a>
                                </Link>
                                <img className="rounded-3xl" src={posterToShow} title="Title"/>
                            </div>
                        );
                    })}
                </div>
            </div>  {/* pb 10 to match the padding of the containers*/}   
                <div className="flex justify-center pb-10">
                    <BtnLoadMore/>
                </div>
        </div>
        </>
    );
}

export default ShowSearchResults;