import { useRef, useEffect, useState } from 'react';

const Time = () => {
  const currentDateRef = useRef<HTMLDivElement>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="md:text-[0.5rem] text-xs lg:text-base font-kanit italic text-[#FCFBB6] font-extralight md:font-bold bg-[#c6898d] p-1 md:p-2 rounded-md md:rounded-2xl text-center">
      <div ref={currentDateRef}>
        {currentDate.getDate()}/{currentDate.getMonth() + 1}/{currentDate.getFullYear()}
      </div>
      <div ref={currentDateRef}>
        {currentDate.getHours()}:{currentDate.getMinutes()}:{currentDate.getSeconds()}
      </div>
    </div>
  );
};

export default Time;