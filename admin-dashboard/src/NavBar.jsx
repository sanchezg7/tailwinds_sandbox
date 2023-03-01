const navigations = [
    {
        name: "Dashboard",
        icon: "src/assets/dashboard.png"
    },
    {
        name: "Customers",
        icon: "src/assets/customers.png"
    },
    {
        name: "Orders",
        icon: "src/assets/orders.png"
    },
    {
        name: "Campaigns",
        icon: "src/assets/campaign.png"
    },
    {
        name: "Messages",
        icon: "src/assets/messages.png"
    }
];

const NavBar = () => {
    return (
        <div className="bg-indigo-900 w-64 h-screen">
            <div className="bg-indigo-800">
                <div className="uppercase text-gray-200 p-5 font-bold text-xl">Super Corps</div>
            </div>
            <div>
                <div className="p-5 text-gray-200 uppercase text-xs font-bold">PAGES</div>
                <div className="flex flex-col">
                    {navigations.map(nav => {
                        return (
                            <div className="flex mt-2 m-5">
                                <div>
                                    <img className="h-5 w-5" src={nav.icon} alt="icon"/>
                                </div>
                                <div className="mx-3 text-sm text-gray-100">{nav.name}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NavBar;