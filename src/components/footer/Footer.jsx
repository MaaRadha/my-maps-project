import pic2 from "../../assets/Group1.jpg";
const Footer = () => {
  return (
    <div className="w-full text-gray-400 my-4 border-t-4  mx-auto container">
      <footer className="pt-10 py-5">
        <div className=" text-center">
          <span className="font-bold"> &copy; Rohit kumar Amdahl, </span>
          <span>{new Date().getFullYear()} </span>
          <p className="py-2">
            E-post : rohit_designer@outlook.com & Omyoga2016@outlook.com
          </p>
          <p className="py-2">Phone : +47 405 38 464</p>
        </div>
        <div className="flex justify-center items-center py-4">
          <img className="w-full max-w-[150px]" src={pic2} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
