const Footer = () => {
    return (
        <footer className="pt-40 px-4">
            <div className="container flex flex-col justify-between mx-auto">
                <div>
                    <a href="" className="flex justify-center">
                        <div className="flex w-12 h-12">
                            <img src="src/assets/house.png" alt="house" className="h-8 w-8 mr-2"/>
                        </div>
                        <span className="font-semibold text-gray-500 text-2xl">
                            Prime Properties
                        </span>
                    </a>
                </div>
            </div>
        </footer>
        
    );
}

export default Footer;