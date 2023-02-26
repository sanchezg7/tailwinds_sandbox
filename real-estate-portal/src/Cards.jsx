// overflow-hidden: prevent image to overflow the layout of the card
const OrchidVilla = () => {
  return (
          <div className="rounded shadow-lg overflow-hidden">
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
              <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">7 Beds</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">9 Baths</span>
              </div>
              <div className="px-6 pt-4 pb-10">
                  <button className="inline-block bg-green-500 rounded-full px-4 py-1 font-bold text-white mr-2 mb-2">
                      View Property
                  </button>
              </div>
          </div>
  );
};

const Garcia = () => {
    return (

            <div className="rounded shadow-lg overflow-hidden">
                <img className="w-full" src="src/assets/home2.jpg" alt="" />
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
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">7 Beds</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">9 Baths</span>
                </div>
                <div className="px-6 pt-4 pb-10">
                    <button className="inline-block bg-green-500 rounded-full px-4 py-1 font-bold text-white mr-2 mb-2">
                        View Property
                    </button>
                </div>
            </div>
    );
}

const Epitome = () => {
    return (

        <div className="rounded shadow-lg overflow-hidden">
            <img className="w-full" src="src/assets/home3.jpg" alt="" />
            <div className="px-6 pt-4">
                <div className="font-bold text-xl mb-2">Next Epitome</div>
                <p className="text-gray-700">
                    Located in the suburbs of California, orchid villa offers luxury with a modern touch.
                    Equipped with green lighting and a rainwater harvesting system, this property is eco-friendly.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block text-green-300 font-bold text-sm px-3 py-1 mr-2 mb-2">$4,500,000</span>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">7 Beds</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">9 Baths</span>
            </div>
            <div className="px-6 pt-4 pb-10">
                <button className="inline-block bg-green-500 rounded-full px-4 py-1 font-bold text-white mr-2 mb-2">
                    View Property
                </button>
            </div>
        </div>
    );
}

const Cards = () => {
    return (
        <div className="grid p-10 sm:grid-cols-1 md:grid-cols-3 gap-5">
            <OrchidVilla />
            <Garcia />
            <Epitome />
        </div>
    );
}

export default Cards;