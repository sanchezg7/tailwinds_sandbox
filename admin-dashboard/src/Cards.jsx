// overflow-hidden: prevent image to overflow the layout of the card

const items = [
    {
        title: "super plus",
        subtitle: "sales",
        asset: "src/assets/wallet.png",
        dollarAmt: "$25,647",
        pctIncrease: "+58%"
    },
    {
        title: "super pro",
        subtitle: "sales",
        asset: "src/assets/wallet.png",
        pctIncrease: "-9%"
    }
]

const Card = ({ title, subtitle, asset, dollarAmt, pctIncrease }) => {
  return (
      <div className="card w-1/2 bg-white p-4 m">
          <div><img className="w-10 h-10" src={asset} alt=""/></div>
          <div className="font-bold text-xl text-gray-700">{title}</div>
          <div className="uppercase">{subtitle}</div>
          <span className="font-bold text-3xl">{dollarAmt}</span>
          {/*badge component*/}
          <span className="bg-green-500 rounded-full text-white text-sm font-bold p-1 align-text-top">{pctIncrease}</span>
      </div>
  );
};

const Cards = () => {
    return (
        <div className="card-container flex m-7 space-x-6">
            {items.map(item => <Card {...item} />)}
        </div>
    );
}

export default Cards;