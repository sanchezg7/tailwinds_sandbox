const ContactUs =  () => {
    return (
        <>
            <div className="mt-20 flex p-10 justify-center">
                <h2 className="text-3xl text-gray-500 mb-2">Contact Us</h2>
            </div>
            <div className="bg-green-300 mt-5 flex p-10 justify-center items-center">
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor=""
                                   className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">First Name</label>
                            <input type="text"
                                   className="block w-full border border-green-500 px-3 py-4 rounded-md text-gray-700 mb-3" placeholder="Jane"/>
                            <p className="text-sm text-green-500 italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 md:mb-0">
                            <label htmlFor="" className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">Last Name</label>
                            <input type="text"
                                   className="block w-full border border-green-500 px-3 py-4 rounded-md text-gray-700" placeholder="Doe"/>
                        </div>
                    </div>
                    <div className="flex mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">Email</label>
                            <input type="text"
                                   className="block w-full border border-green-500 px-3 py-4 rounded-md text-gray-700" placeholder="example@example.com"/>
                            <p className="text-sm text-green-500 italic">Please fill out this field.</p>
                        </div>
                    </div>
                    <div className="flex mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase text-xs text-gray-700 font-bold mb-2 tracking-wider">Message</label>
                            <textarea type="text"
                                   className="no-resize appearance-none resize-none h-48 block w-full border border-green-500 px-3 py-4 rounded-md text-gray-700" placeholder="Write your message, here."/>
                            <p className="text-sm text-green-500 italic">Please fill out this field.</p>
                        </div>
                    </div>
                    <div className="mx-3 md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button className="shadow bg-green-400 px-2 py-4 mx-2 rounded text-white">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactUs;