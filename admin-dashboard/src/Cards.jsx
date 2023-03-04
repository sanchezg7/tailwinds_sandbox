// overflow-hidden: prevent image to overflow the layout of the card

const items = [
    {
        content: "Card 1"
    },
    {
        content: "Card 2"
    }
]

const Card = ({ content }) => {
  return (
      <div className="card w-1/2 bg-white p-4 m">{content}</div>
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