// h-screen: allow the background image to show. Span to the height of the viewport
const SiteBanner = () => {
    return (
        <div className="py-20 h-screen" style={
            {
                "background-image": "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('src/assets/luxury.jpg')"
            }}
        >
            <div className="container mx-auto px-6 mt-40">
                <h2 className="text-4xl font-bold text-white mb-2">Experience Luxury Like Never Before</h2>
                <h3 className="text-2xl mb-8 text-gray-200">50+ Exotic locations across the globe.</h3>
                <button className="text-white shadow-lg uppercase border-2 px-8 py-4 font-bold hover:bg-white hover:text-black transition duration-300">Explore Locations</button>
            </div>
        </div>
    );
};

export default SiteBanner;