import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Anchor from '../shared/Anchor';

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="header text-gray-300">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-10 md:px-16">
        <div className="logo-section">
          <img src="/logo.png" className="object-fit h-8 " />
        </div>
        <Bars3Icon
          className="w-12 h-12 text-gray-500 cursor-pointer xl:hidden"
          onClick={() => setShow(!show)}
        />
        <nav
          className={`${
            show ? 'block' : 'hidden'
          } gap-8 text-sm whitespace-nowrap xl:flex w-full xl:w-fit xl:bg-transparent bg-gray-700 p-4 xl:mt-4`}
        >
          <Anchor title="صفحه نخست" />
          <Anchor title="درباره کاردان" />
          <Anchor title="خدمات" />
          <Anchor title="ابزارها" />
          <Anchor title="امور سهامداران" />
          <Anchor title="ارتباط با کاردان" />
          <Anchor
            title="شروع سرمایه گذاری"
            attr="xl:border-2 xl:border-gray-300 xl:-mt-2 xl:p-2 xl:rounded-md"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
