/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-orange-300 to-yellow-300",
    title: "Audiophile Ecommerce",
    desc: "Driven by HHTML 5, CSS 3, Javascript and React.Js, This project showcases not only my technical skills but also my dedication to creating seamless user experiences. Welcome to the future of online audio retail – where innovation meets impeccable sound. PLEASE SCROLL THROUGH THE SCREENS. ",
    phone_img: "/audiophile-ecommerce-phone view.png",
    laptop_img: "/audiophile-ecommerce-laptop view.png",
    phone: "/phone.png",
    laptop: "/laptop.png",
    link: "https://audiophile-ecommerce-bay.vercel.app/",
    link2: "https://github.com/Ados1/audiophile_ecommerce",
  },
  {
    id: 2,
    color: "from-yellow-300 to-lime-300",
    title: "AI powered 3D Shirt Website",
    desc: "Step into the future of fashion exploration with the AI-driven 3D shirt website. Crafted with HTML, Tailwind CSS, React and enhanced by Three.js and OpenAI API, it offers an immersive shopping experience where style meets innovation. PLEASE SCROLL THROUGH THE SCREENS. ",
    phone_img: "/AI 3D phone view.png",
    laptop_img: "/AI 3D screen view.png",
    phone: "/phone.png",
    laptop: "/laptop.png",
    link: "https://audiophile-ecommerce-bay.vercel.app/",
    link2: "",
  },
  {
    id: 3,
    color: "from-lime-300 to-purple-300",
    title: "Watch Ecommerce",
    desc: "Experience timeless elegance online with a watch emporium, crafted with HTML, CSS, and JavaScript for seamless browsing and secure transactions. PLEASE SCROLL THROUGH THE SCREENS.",
    phone_img: "/Watch Ecommerce phone view.png",
    laptop_img: "/Watch Ecommerce laptopview.png",
    phone: "/phone.png",
    laptop: "/laptop.png",
    link: "https://ados1.github.io/Watch-Ecommerce/",
    link2: "https://github.com/Ados1/Watch-Ecommerce",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "SmartHome Website",
    desc: "Welcome to  SmartHome website, where innovation meets convenience at the click of a button. Crafted with HTML, CSS, and JavaScript, the platform seamlessly integrates cutting-edge technology to offer you an immersive experience. PLEASE SCROLL THROUGH THE SCREENS. ",
    phone_img: "/smarthome_phoneview.png",
    laptop_img: "/smarthome_laptopview.png",
    phone: "/phone.png",
    laptop: "/laptop.png",
    link: "https://ados1.github.io/SmartHome/",
    link2: "https://github.com/Ados1/SmartHome",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative no-scrollbar" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden sm:p-5">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center  bg-gradient-to-r from-red-300 to-orange-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black">
                  <h1 className="text-xl font-bold md:text-3xl lg:text-5xl xl:text-6xl ">
                    {item.title}
                  </h1>
                  <div className="flex justify-center gap-8 relative bottom-6">
                    <div>
                      <div className="relative">
                        <Image
                          src={item.phone}
                          alt=""
                          width={200}
                          height={150}
                        />
                      </div>
                      <div className="image_container no-scrollbar ">
                        <img
                          src={item.phone_img}
                          alt="work picture"
                          className="photo "
                        />{" "}
                      </div>
                    </div>
                    <div>
                      <div className=" flex-1 relative">
                        <Image
                          src={item.laptop}
                          alt=""
                          width={400}
                          height={200}
                        />
                      </div>
                      <div className="laptop_image_container no-scrollbar ">
                        <img
                          src={item.laptop_img}
                          alt="work picture laptop"
                          className="laptop"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] text-black">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex justify-end  "
                  >
                    <button className=" h-5  flex items-center p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-1 rounded">
                      See Demo
                    </button>
                  </Link>
                  <Link
                    href={item.link2}
                    target="_blank"
                    className="flex justify-center"
                  >
                    <button className="h-5  flex items-center p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-1 rounded">
                      Source Code
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            target="_blank"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
