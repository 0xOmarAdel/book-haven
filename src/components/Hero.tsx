import { BiBookAlt, BiBookmarks } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { PiUsersThree } from "react-icons/pi";
import useTyping from "../hooks/useTyping";
import image from "../assets/hero-image.svg";
import Lottie from "react-lottie";
import animationData from "../assets/arrow-down.json";

const Hero = () => {
  const text = useTyping([
    "Explore the magic of books at Book Haven. ",
    "Discover captivating stories and insightful non-fiction.",
  ]);

  const statistics = [
    {
      id: 1,
      icon: <BiBookAlt className="text-5xl" />,
      text: "Books",
      value: 9482,
    },
    {
      id: 2,
      icon: <BiBookmarks className="text-5xl" />,
      text: "Categories",
      value: 69,
    },
    {
      id: 3,
      icon: <PiUsersThree className="text-5xl" />,
      text: "Publishers",
      value: 281,
    },
    {
      id: 4,
      icon: <AiOutlineLineChart className="text-5xl" />,
      text: "Visits",
      value: 789271,
    },
  ];

  return (
    <div className="h-screen pt-36 pb-24 px-16 flex flex-col gap-12">
      <h1 className="text-6xl text-center">
        Welcome to{" "}
        <span className="text-green-600 font-semibold">Book Haven</span>
      </h1>
      <div className="h-full flex flex-row justify-center gap-10">
        <img src={image} alt="" className="w-[35rem] shrink-0" />
        <div className="w-[35rem] py-20 flex flex-col justify-between grow-0">
          <p className="text-4xl tracking-wide">{text}</p>
          <div className="w-fit flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-6 text-gray-700">
              {statistics.map((stat) => (
                <div
                  key={stat.id}
                  className="border border-gray-600 rounded-xl py-5 px-6 flex flex-col justify-center items-center gap-2 font-semibold"
                >
                  {stat.icon}
                  <div className="flex flex-row gap-1 text-xl">
                    <p className="text-primaryGreen">{stat.value}</p>
                    <p>{stat.text}!</p>
                  </div>
                </div>
              ))}
            </div>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={50}
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
