import Testimonial from "./Testimonial.jsx";

const data = [
    {
        quote: "This is one of the best property websites I have ever used.",
        name: "Ashutosh",
        role: "Director"
    },
    {
        "quote": "it rocks!",
        "name": "Ted",
        "role": "Undies"
    }
]

const Testimonials = () => {
  return (
      <>
      <div className="mt-20 flex p-10 justify-center">
          <h2 className="text-3xl text-gray-500 mb-2">What clients say about us</h2>
      </div>
          <div className="p-10 grid grid-cols-1 md:grid-cols-3 sm:grids-cols-1">
            {data.map(d => <Testimonial {...d} />)}
          </div>
      </>
  )
};

export default Testimonials;