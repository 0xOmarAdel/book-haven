import { BiBookAlt } from "react-icons/bi"; 
import { IoIosArrowDown } from "react-icons/io"; 
import useTyping from "../hooks/useTyping";

const Hero = () => {
  const text = useTyping([
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    'Deleniti explicabo praesentium itaque unde nihil ipsa.'
  ]);

  const statistics = [
    { id: 1, text: 'Books', value: 9482 },
    { id: 2, text: 'Categories', value: 69 },
    { id: 3, text: 'Publishers', value: 281 },
    { id: 4, text: 'Visits', value: 789271 },
  ]

  return (
    <div className='hero relative h-screen flex flex-col justify-center items-center gap-20 text-white'>
      <p className='text-4xl tracking-wide z-50'>{text}</p>
      <div className='grid grid-cols-4 gap-10 z-50'>
        {
          statistics.map(stat =>
            <div key={stat.id} className='border border-white rounded-xl py-6 px-16 flex flex-col justify-center items-center gap-2 font-semibold'>
              <BiBookAlt className='text-7xl' />
              <div className='flex flex-row gap-1 text-2xl'>
                <p className='text-primaryGreen'>{stat.value}</p>
                <p>{stat.text}!</p>
              </div>
            </div>
          )
        }
      </div>
      <IoIosArrowDown className='absolute z-20 bottom-10 text-6xl text-primaryGreen cursor-pointer' />
      <div className='absolute z-10 w-full h-full bg-black bg-opacity-90'></div>
    </div>
  );
};

export default Hero;