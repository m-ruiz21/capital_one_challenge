const InfoHOC = ({children, title}) => {

    return (
        <div className="flex justify-start pt-2"><p className="font-bold">{title}:</p><p className="pl-2">{children}</p></div>
    );
}

export {InfoHOC};