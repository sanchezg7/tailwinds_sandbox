// mt-10: margin top 10
//tracking-tight: letter spacing of an element
const Banner = () => {
  return (
    <div className="bg-indigo-200 m-7 p-6">
        <div className="text-4xl text-gray-800 font-md tracking-tighter">Good morning, Super Inc.!</div>
        <div className="mt-4">These are the stats for today, have a good day.</div>
    </div>
  );
};

export default Banner;