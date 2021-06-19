import Image from 'next/image'

const Navbar = () => {
    return (
        <>
        <nav className='bg-blue-dark'>
            <div className="container">
                <div className="flex justify-start">
                    <a href="/" className="font-sans text-white text-xl p-2">
                    OMDb    
                    </a> 
                    <div className="space pl-3 y-4 text-white">
                        <p className="block">Powered</p>
                        <p className="font-sans flex justify-end">By</p>
                    </div>
                    <div className="pl-3">
                        <Image src="/capital.png" alt="capital one logo" width="100" height="45.17" />
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Navbar