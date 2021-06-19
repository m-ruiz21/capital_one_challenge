import {Recommended} from 'components/body/recommended';

const recommended = [
    "The Shawshank Redemption", 
    "The Godfather", 
    "The Godfather: Part II", 
    "The Dark Knight", 
    "12 Angry Men", 
    "Schindler's List"
];  // top 6 from IMDb top 250 

const Carousel = () =>{

    return(    // TO DO: make into an actual carousel. Priority Level: 2
        <div className="py-6 grid mx-4 lg:gap-8 md:gap-8 gap-4 lg:grid-cols-6 md:grid-cols-4 grid-cols-2">
            {recommended.map(title => <Recommended key={title} title={title}/>)}
        </div>    
    )
}

export default Carousel;


