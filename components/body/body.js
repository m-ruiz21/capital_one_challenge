import Search from 'components/body/search'
import Carousel from 'components/body/carousel'

const Main_Body = () => {
    return (
        <>
        <div className ="card w-screen h-96 bg-movies bg-image">
            <div className="container mx-auto flex flex-col h-full w-full items-center">
                <div className="flex flex-col md:w-1/2 w-3/4 h-full justify-center">                  
                    <h1 className="text-white font-bold text-4xl">Welcome.</h1>
                    <p className="text-white text-2xl py-2">Millions of movies for you to search and discover.</p>
                        <Search homepage={true}/>
                </div>
            </div>
        </div>
        <div className="text-white px-4 text-2xl text-bold">Popular Movies</div>
        <Carousel/>
        </>
    );
}
export default Main_Body
