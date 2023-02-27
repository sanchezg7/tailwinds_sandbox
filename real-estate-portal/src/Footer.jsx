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
                <div className="grid grid-cols-2 gap-x-3 gap-y-8 text-sm">
                    <div className="space-y-3">
                        <h3 className="text-green-500 mb-2 uppercase tracking-wide">Product</h3>
                        <ul className="space-y-1">
                            <li><a href="">Features</a></li>
                            <li><a href="">Integrations</a></li>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-green-500 mb-2 uppercase tracking-wide">Company</h3>
                        <ul className="space-y-1">
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
        
    );
}

export default Footer;