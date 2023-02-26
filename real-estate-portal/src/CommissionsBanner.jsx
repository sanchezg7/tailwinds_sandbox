const title = "Save up to 50% on broker commissions";
const subtitle = "Lowest brokerage fees";
const cta = "Inquire";
const CommissionsBanner = () => {
    return (
        <div className="py-20" style={
            {
                "background": "linear-gradient(315deg, #D1FAE5 0%, #10B981 74%)"
            }}
        >
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
                <h3 className="text-2xl mb-8 text-gray-200">{subtitle}</h3>
                <button className="text-white shadow-lg uppercase border-2 px-8 py-4 font-bold hover:bg-white hover:text-black transition duration-300">
                    {cta}
                </button>
            </div>
        </div>
    )
};

export default CommissionsBanner;