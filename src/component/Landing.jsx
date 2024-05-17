import React from "react";
import landImage from "../images/illustration-intro.png";
import curve from "../images/bg-curvy-desktop.svg";
import any from "../images/icon-access-anywhere.svg";
import security from "../images/icon-security.svg";
import collaboration from "../images/icon-collaboration.svg";
import file from "../images/icon-any-file.svg";
import productive from "../images/illustration-stay-productive.png";
import user1 from "../images/profile-1.jpg";
import user2 from "../images/profile-2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import user3 from "../images/profile-3.jpg";
import MediaQuery from 'react-responsive';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
const Landing = () => {
  return (
    <div className="land relative">
          <span className="dot-land-1 absolute w-[20px] h-[20px] rounded-full bg-[#10C843]"></span>
          <span className="dot-land-2 absolute w-[17px] h-[17px] rounded-full bg-[#10C843]"></span>

      <div className="container flex justify-center p-3  relative  gap-8 flex-wrap mx-auto flex-col lg:flex-row  relative">
      
        <div className="image w-[750px] max-w-full mx-auto z-0  flex justify-center flex-1 relative order-1 ">
          <span className="dot-1 absolute w-[20px] h-[20px] rounded-full bg-white"></span>
          <span className="dot-2 absolute w-[20px] h-[20px] rounded-full bg-white"></span>
          <span className="dot-3  absolute w-[13px] h-[13px] rounded-full bg-white"></span>
          <span className="dot-4  absolute w-[20px] h-[20px] rounded-full bg-white"></span>
          <span className="dot-5  absolute w-[13px] h-[13px] rounded-full bg-white"></span>
          <span className="dot-6  absolute w-[17px] h-[17px] rounded-full bg-[#10C843]"></span>
          <span className="dot-7  absolute w-[13px] h-[13px] rounded-full bg-white"></span>
          <span className="dot-8  absolute w-[13px] h-[13px] rounded-full bg-white"></span>

          <div className="not-real w-[82%] h-[92%]  absolute bg-[#10C843] -z-10"></div>
          <img className="relative women-image w-[100%]" src="https://s3-alpha-sig.figma.com/img/d7ac/3685/6fc095c586944c8a8a9c471be56fcddd?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RxFEZHY8HXTrMZrMOWojdmUUHqjW-VghBbeRi3WPzoUGTOcE2woYR1dozZmOsl5moY5z7suxT8SAzMVjWhqY6jDtqVD7fMKcXPjCXuq~0mZXBZdCLhcZpIMLQDpiLqWFOnlA9~aXyD9mcHPUcBo74Vz9UK7kFtLFYZaSDUEZQ9geWHJm0OGgobIGggfoYfDHGD~Jfwo~CxuO3SJT18T7hDLv4SA9Ks3m17GvBM96TFb~-8pnr8pcQ0lJ~GCSpNgsnIN6MYeITCu~6aNhXWvRuciJlxWsPi866fH3pmazVZW3rwj8GiWfTkLAaMWz~OHtkmW8ZdchZDFYa4UW6~uYkw__" alt="intro" />
        </div>
        <div className="content flex gap-[1rem] lg:gap-8 z-10 justify-center text-balance flex-1 flex-col  ">
          <div className="title  text-3xl font-bold">
            <div className="leading-none head">
              <h2 className="text-[3.5rem] ">You bring the <br /> <span className="text-[#10C843]">expertise</span>, we'll make <br /> it unforgettable.</h2>
            </div>
           
           
          </div>
          <div className="desc  lg:w-[82%] ">
            <p>
            Using highly personalised activities, videos and animations you can energise your students and motivate them to achieve their learning goals as they progress through a journey.
            </p>
          </div>
          <div className="buttons flex gap-3">
            <button className="w-36 text-white  bg-[#10C843] py-3 px-6 rounded-full flex items-center justify-around">
            Register <FaArrowRightLong />
          </button>
            <button className="w-36 text-green-400 border-[#10C843] border-x border-y  py-3 px-6 rounded-full flex items-center justify-around">
            Login <FaArrowRightLong />
          </button>
          </div>
          <MediaQuery minWidth={991}>
          <div className="second-nav absolute flex justify-between">
            <li className="flex justify-between">Select Course <IoIosArrowDown /></li>
            <li className="flex justify-between">Select Instructor <IoIosArrowDown /></li>
            <button className="flex justify-center items-center gap-3">Search <IoMdSearch /></button>
          </div>
          </MediaQuery>
          
        </div>
      </div>
      {/* <div className="curve w-[100%]">
        <img src={curve} alt="" className="relative w-[100%]" />
      </div> */}
  
    </div>
  );
};

export default Landing;
