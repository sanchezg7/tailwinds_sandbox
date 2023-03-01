const Testimonial = ({quote, name, role}) => {
    return (
        <div className="shadow-lg bg-white mx-auto md:w-56 sm:w-72 rounded-xl p-4 gap-5">
            <p className="text-gray-600">
                <span className="text-green-500 text-lg font-bold">"</span>
                {quote}
                <span className="text-green-500 text-lg font-bold">"</span>
            </p>
            <div className="flex bg-green-100 items-center rounded-full">
                <a href="" className="block relative">
                    <img className="h-10 w-10 rounded-full mx-auto" src="src/assets/avatar.png" alt="" />
                </a>
                <div className="flex flex-col ml-2 justify-between">
                    <span className="text-sm text-green-500 font-semibold">{name}</span>
                    <span className="text-xs flex items-center">{role}</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;