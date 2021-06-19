const Header = ({title, body}) => {
    
    return (
        <>
        <h1>{title ?? 'No title'}</h1>
        </>
    );
}

const OtherHeader = props => {
    return (<div>asdfasdf</div>)
}


export { OtherHeader, Header };
