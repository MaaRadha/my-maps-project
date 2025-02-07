import pic from "../../assets/map_1.png";
const Home = () => {
  return (
    <>
      <div className="pb-8 text-center bg-gradient-to-r from-blue-500 to-green-500">
        <p className="text-xl text-center py-6">
          Embark on a journey to uncover the wonders of the world and discover
          new places and cultures.
        </p>
      </div>
      <div className="container mx-auto max-w-5xl p-8 m-2">
        <h1 className="text-6xl text-center font-bold py-4 mb-4 font-serif ">
          Explore the World with Interactive Map
        </h1>
      </div>
      <div className="container mx-auto max-w-5xl flex justify-center ">
        <div className="w-full max-w-lg p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 shadow-2xl">
          <img className="w-full rounded-xl" src={pic} alt="hero img" />
        </div>
      </div>
    </>
  );
};

export default Home;
