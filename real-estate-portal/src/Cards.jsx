const Cards = () => {
    return (
        <div className="grid p-10 sm:grid-cols-1 md:grid-cols-3">
            <div className="rounded shadow-lg">
                <img className="w-full" src="src/assets/home1.jpg" alt="" />
                <div className="px-6 pt-4">
                    <div className="font-bold text-xl mb-2">Orchid Villa</div>
                    <p className="text-gray-700">
                        Located in the suburbs of California, orchid villa offers luxury with a modern touch.
                        Equipped with green lighting and a rainwater harvesting system, this property is eco-friendly.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block text-green-300 font-bold text-sm px-3 py-1 mr-2 mb-2">$4,500,000</span>
                </div>
                <div>
                    <span>7 Beds</span>
                    <span>9 Beds</span>
                </div>
            </div>
        </div>
    );
}

export default Cards;