import React from "react";

const AnalysticsCard = (props) => {
  return (
    <>
      {props.loading ? (
        <div className="flex flex-col items-center justify-center">
            <div className="p-5 bg-[#F3F3FF]">
                <p>5</p>
            </div>
        </div>
      ) : (
        <div className="p-5 bg-[#F3F3FF] rounded-md flex gap-10 items-center">
          <div>{props.children}</div>
          <div className="grow">
            <div className="text-center text-[#333333] font-semibold">
              {props.title}
            </div>
            <div className="mt-2 text-[#333333] font-semibold text-center text-xl">
              {props.numbers}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnalysticsCard;