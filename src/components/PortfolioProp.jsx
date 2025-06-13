import "../App.css";

const PortfolioProp = ({ image, project, customer }) => {
  return (
    <div className="flex flex-col border-2 border-white border-opacity-50 shadow-lg">
      <div className="w-full">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="bg-[#1b1448] px-7 pb-7 pt-16 lg:py-16 lg:px-10 flex flex-col gap-5 ">
        <h1 className="text-2xl opacity-75 tracking-widest uppercase">
          {project}
        </h1>
        <h2 className="spacegrotesk-text font-bold text-2xl lg:text-5xl tracking-wider ">
          {customer}
        </h2>
      </div>
    </div>
  );
};

export default PortfolioProp;
