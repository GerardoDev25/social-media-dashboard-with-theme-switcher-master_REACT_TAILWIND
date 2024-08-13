import iconUp from '../assets/images/icon-up.svg';
import iconDown from '../assets/images/icon-down.svg';
import { convertNumberToKMB } from '../utils';
import {
  // networkColors,
  networkLogos,
  OverViewTodayProps,
} from '../utils/over-view-card-utils';

export const OverViewTodayCard = (props: OverViewTodayProps) => {
  const { network, statsType, stats, isUp, porcentage } = props;
  return (
    <article className='bg-Light-Grayish-Blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] cursor-pointer hover:brightness-95 dark:bg-Dark-Desaturated-Blue hover:dark:brightness-125'>
      <div className='flex items-center justify-between'>
        <p className='text-Dark-Grayish-Blue'>{statsType}</p>
        <img src={networkLogos[network]} alt={networkLogos[network]} />
      </div>
      <div className='flex justify-between'>
        <p className='text-[42px] font-bold text-Very-Dark-Blue dark:text-white'>
          {convertNumberToKMB(stats)}
        </p>
        <div className='flex items-center place-content-center gap-1'>
          <img src={isUp ? iconUp : iconDown} alt='icon arrow' />
          <p
            className={`text-xs font-bold ${
              isUp ? 'text-Lime-Green' : 'text-Bright-Red'
            }`}
          >
            {porcentage} Today
          </p>
        </div>
      </div>
    </article>
  );
};
