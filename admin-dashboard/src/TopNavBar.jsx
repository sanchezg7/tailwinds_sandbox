const TopNavBar = () => {
    return (
        <div className="flex bg-white px-2 py-0.5 h-18">
            <div className="flex items-center md:w-3/4 sm:w-1/3">
                <img className="w-10 h-10" src="src/assets/person.png" alt="person"/>
                <span className="block ml-2">First Last</span>
            </div>
            <div className="flex md:w-1/4 sm:w-2/3 items-center">
                <img className="w-7 h-7 rounded-full p-1 mx-2 my-4 bg-gray-100" src="src/assets/search.png" />
                <img className="w-7 h-7 rounded-full p-1 mx-2 my-4 bg-gray-100" src="src/assets/message.png" />
                <img className="w-7 h-7 rounded-full p-1 mx-2 my-4 bg-gray-100" src="src/assets/warning.png" />
                <a className="text-indigo-500 font-semibold">Logout</a>
            </div>
        </div>
    );
};

export default TopNavBar;