import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import WaveEmoji from '/public/svgs/handwave.svg';
import { IoNotificationsCircle } from 'react-icons/io5';

const Header = ({ loggedUser }) => {
  const[totalNotifications, setTotalNotifications] = useState(0);

  return (
    <nav className="w-full sticky top-0 py-4 bg-white z-5 flex justify-between items-center overflow-x-hidden">
      <div className="bg-white px-2 ">
        <h2 className="font-semibold text-2xl inline-block align-middle gradient-text capitalize">
          Hi
          <span className="align-middle inline-block px-4">
            <img src={WaveEmoji.src} alt="Wave emoji" />
          </span>
          <span className="capitalize ">Gulam</span>
        </h2>
      </div>

      {/* Notifications Icon */}
      <div className="bg-white flex relative right-8 py-2 pl-4 pr-6">
        <div className="absolute right-4 top-0 bg-white text-[#5B2C89] text-center align-middle border-2 border-[#5B2C89] h-6 w-6 font-bold rounded-full text-sm">
          {totalNotifications}
        </div>

        <Link href="/">
          <span>
            <IoNotificationsCircle className="text-[#5B2C89] w-9 h-9" />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default React.memo(Header);