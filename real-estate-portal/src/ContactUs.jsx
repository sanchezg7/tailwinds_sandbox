const ContactUs =  () => {
    return (
        <>
            <div className="mt-20 flex p-10 justify-center">
                <h2 className="text-3xl text-gray-500 mb-2">Contact Us</h2>
            </div>
            <div className="bg-green-300 mt-5 flex p-10 justify-center items-center">
                <form className="w-full max-w-lg">
                    <div className="flex">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="" className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">First Name</label>
                            <input type="text" className="block w-full border border-green-500 px-3 py-4 rounded-md text-gray-700 mb-3" placeholder="Jane"/>
                            <p className="text-sm text-green-500 italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 md:mb-0">
                            <label htmlFor="" className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">Last Name</label>
                            <input type="text" className="block w-full border border-green-500 px-3 py-4 rounded-md text-gray-700" placeholder="Doe"/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactUs;