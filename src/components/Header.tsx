import { useEffect, useState } from 'react';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
  };

  return (
    <header className='bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[250px] rounded-b-[20px] p-8 px-6'>
      <h1 className='text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1'>
        Social Media Dashboard
      </h1>
      <p className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6'>
        Total Followers: 23,004
      </p>
      <hr className='bg-black mb-[19px]' />
      <div className='flex justify-between'>
        <p className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold'>Dark Mode</p>
        <label className='w-12 h-6 bg-Toggle rounded-full overflow-hidden cursor-pointer p-[3px] relative'>
          <input
            onChange={handleChange}
            type='checkbox'
            className='peer sr-only'
          />
          <div className='peer-checked:bg-Toggle-gradient  w-full h-full  absolute top-0 left-0'></div>
          <div className='w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[23px] transition-transform'></div>
        </label>
      </div>
    </header>
  );
};
