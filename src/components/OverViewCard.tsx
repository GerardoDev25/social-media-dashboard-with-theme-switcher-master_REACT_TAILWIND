import iconUp from '../assets/images/icon-up.svg';
import iconDown from '../assets/images/icon-down.svg';
import { convertNumberToKMB } from '../utils';
import {
  networkColors,
  networkLogos,
  OverViewProps,
} from '../utils/over-view-card-utils';

export const OverViewCard = (props: OverViewProps) => {
  const { user, audienceType, audience, network, isUp, today } = props;

  return (
    <article className=' bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125'>
      <div className={`${networkColors[network]} h-1 mb-8`}></div>
      <div className='flex place-content-center gap-2 items-center'>
        <img src={networkLogos[network]} alt={`logo - ${network}`} />
        <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
      </div>

      <p className='text-[56px] font-bold text-Very-Dark-Blue mb-6 dark:text-white'>
        {convertNumberToKMB(audience)}
      </p>
      <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs'>
        {audienceType}
      </p>

      <div className='flex items-center place-content-center gap-1'>
        <img src={isUp ? iconUp : iconDown} alt='icon arrow' />
        <p
          className={`text-xs font-bold ${
            isUp ? 'text-Lime-Green' : 'text-Bright-Red'
          }`}
        >
          {today} Today
        </p>
      </div>
    </article>
  );
};
