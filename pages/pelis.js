import useSWR from 'swr'
import {Header} from 'components/header';
import {TestHOC} from 'components/body/testHOC';
const fetcher = (...args) => fetch(...args).then(res => res.json())

const Image = ({src}) => {
    return (
        <img src={src}  alt="Girl in a jacket" width="500" height="600"></img>
    );
};

const Pelis = () => {
    const { data, error } = useSWR('/api/hello', fetcher)
    //const { data, error } = useSWR('http://localhost:3000/api/hello', fetch);
    const title = "Blog de Pelis";



    return (
        <>
        <TestHOC saludo="hola">
            <h1>asdfasdfasdf</h1>
        </TestHOC>
         <Header title={title} body="Soy un Body" />
         <div>{data?.name}</div>
         <Image src={data?.src}/>
        </>
    )
}

export default Pelis;
