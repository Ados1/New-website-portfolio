"use client";

import Image from "next/image";

const Mockportfolio = () => {
  return (
    <div>
      {/* <div className="relative">
        <Image src="/phone.png" alt="" width={300} height={600} />
      </div>
      <div className="w-[264px] h-[567px] overflow-y-scroll absolute top-[17px] left-[18px]  rounded-[28px] no-scrollbar">
        <Image
          src="/Watch Ecommerce phone view.png"
          alt=""
          width={264}
          height={567}
        />{" "}
      </div> */}
      <div className=" flex-1 relative">
        <Image src="/laptop.png" alt="" width={600} height={379} />
      </div>
      <div className="w-[451px] h-[283px] overflow-y-scroll absolute top-[18px] left-[68px]   no-scrollbar">
        <Image
          src="/audiophile-ecommerce-laptop view.png"
          alt=""
          width={451}
          height={283}
        />{" "}
      </div>
    </div>
  );
};

export default Mockportfolio;
