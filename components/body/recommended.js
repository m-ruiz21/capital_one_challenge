import useSWR from 'swr';
import Link from 'next/link';


const fetcher = (...args) => fetch(...args).then(res => res.json())
const Recommended = ({title}) => {
    const url =  '/api/byTitle/' + title
    const {data} = useSWR(title ? url : null, fetcher)
    return(
        <div className="relative">   {/*had to use index because imdbID is not a value returned by title search*/}    
            <Link href={`/search/${data?.Title}/${data?.Title}`}>
                <a
                className="rounded-3xl absolute inset-0 text-white bg-blue-light text-start flex flex-col justify-end px-4 pb-8 
                opacity-0 hover:opacity-90 bg-opacity-90">
                    <p className="font-bold text-xl">{data?.Title}</p>
                    <p>{data?.Year}</p>
                    <p>IMDb Rating: {data?.imdbRating}</p>    
                </a>
            </Link>
            <img className="rounded-3xl" src={data?.Poster} alt="Movie Poster"/>
        </div> 
    )
};

export {Recommended};