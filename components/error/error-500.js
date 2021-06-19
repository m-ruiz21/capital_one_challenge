export default function Error500() {
    return (
        <div className="flex h-screen">   
            <div className="m-auto text-white text-center">
                <h1 className="text-3xl">Internal Server Error</h1>
                <h1 className="text-5xl py-4">500</h1>
                <p className="text-lg">Failure to connect to API, check network status and try again</p>
            </div>
        </div>
    )
}
