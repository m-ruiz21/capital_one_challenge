import Search from 'components/body/search'
import Navbar from 'components/navbar/navbar'

export default function Movie404() {
    return (
        <>
        <Navbar/>        
        <div className="container mx-auto flex flex-col h-full w-full items-center justify-center">
            <div className="flex flex-col md:w-1/2 w-3/4 h-full justify-center py-4">                  
                <Search homepage={false}/>
            </div>
        </div>
        <div className="flex h-full">   
            <div className="m-auto text-white text-center">
                <h1 className="text-xl py-4">Sorry, we couldn't find that movie in our database.</h1>
            </div>
        </div>
        </>
    )
}