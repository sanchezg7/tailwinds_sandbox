const locations = [
    {
        asset: "src/assets/newyork.jpg",
        title: "New York",
        description: "New York comprises 5 boroughs sitting where the Hudson river meets the Atlantic Ocean. At its core is Manhattan, a densely populated location."
    },
    {
        asset: "src/assets/california.jpg",
        title: "San Fransisco",
        description: ""
    },
    {
        asset: "src/assets/chicago.jpg",
        title: "Chicago"
    }
]
const Locations = ({title, description, asset}) => {
    return (
            <div className="rounded shadow-lg overflow-hidden">
                <img className="w-full" src={asset} alt="" />
                <div className="px-6 pt-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700">
                        {description}
                    </p>
                </div>
            </div>
    );
};

export default () => {
    return (
        <div className="grid p-10 sm:grid-cols-1 md:grid-cols-3 gap-5">
            {locations.map((l,i) =>
        <Locations
            key={i}
            title={l.title}
            description={l.description}
            asset={l.asset}
        />)
            }
        </div>
    );
}