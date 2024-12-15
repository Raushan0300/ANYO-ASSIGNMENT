import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Achievment = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<any>();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/project", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col mt-10">
      <div className="flex justify-between gap-5 items-center">
        <div className="flex gap-12 items-center w-1/2 border-b border-[#E0E0E0]">
          <p
            className="mb-2 text-[#303030] text-sm font-medium cursor-pointer"
            onClick={() => {
              navigate("/project");
            }}>
            Project
          </p>
          <p
            className="mb-2 text-[#303030] text-sm font-norma cursor-pointer"
            onClick={() => {
              navigate("/saved");
            }}>
            Saved
          </p>
          <p
            className="mb-2 text-[#303030] text-sm font-normal cursor-pointer"
            onClick={() => {
              navigate("/shared");
            }}>
            Shared
          </p>
          <p
            className="mb-2 text-[#DF5532] text-sm font-normal cursor-pointer"
            onClick={() => {
              navigate("/achievment");
            }}>
            Achievment
            <span className="block border-b-2 border-[#DF5532]"></span>
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <img
              src="/filter.png"
              alt="Filter"
            />
            <p className="text-base font-normal text-[#303030]">Filter</p>
          </div>
          <div className="flex items-center gap-1 border rounded-lg border-[#E0E0E0] pr-2">
            <input
              type="text"
              placeholder="Search a Project"
              className="px-2 py-1 outline-none placeholder:text-xs"
            />
            <img
              src="/search.png"
              alt="Search"
              className="p-1 rounded-lg bg-[#DF5532]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-4 justify-center overflow-auto h-[65vh] p-4">
        {data?.map((item:any, index:any) => {
          return (
            <div
              className="flex gap-3 items-center shadow-lg rounded-lg w-3/4"
              key={index}>
              <img
                src="/data_image.jpeg"
                alt="Data Image"
                className="h-40 w-60 rounded-tl-lg rounded-bl-lg"
              />
              <div className="flex flex-col gap-2 px-2">
                <h1 className="font-[roboto] text-lg font-medium text-[#303030]">
                  {item.title}
                </h1>
                <p className="font-[roboto] text-xs text-[#9E95A2] font-medium">
                  {item.description}
                </p>
                <div className="flex justify-between items-end mt-5">
                  <div className="flex flex-col mb-3">
                    <h3 className="text-xs text-[#303030] font-normal font-[roboto]">
                      {item.location_1}
                    </h3>
                    <p className="text-xs text-[#9E95A2] font-normal font-[roboto]">
                      {item.location_2}
                    </p>
                  </div>
                  <button className="text-white font-[roboto] font-medium bg-gradient-to-r from-[#F39519] to-[#FFCD67] px-4 py-2 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievment;
