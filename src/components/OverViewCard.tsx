import Facebook from '../assets/images/icon-facebook.svg';
import Instagram from '../assets/images/icon-instagram.svg';
import Twitter from '../assets/images/icon-twitter.svg';
import YouTube from '../assets/images/icon-youtube.svg';
import iconUp from '../assets/images/icon-up.svg';
import iconDown from '../assets/images/icon-down.svg';

export interface OverViewProps {
  id: string;
  network: string;
  user: string;
  audienceType: string;
  audience: number;
  today: number;
  isUp: boolean;
}

// const networkLogos: { [key: string]: string } = {
const networkLogos: Record<string, string> = {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
};

const networkColors: Record<string, string> = {
  Facebook: 'bg-Facebook',
  Twitter: 'bg-Twitter',
  YouTube: 'bg-YouTube',
  Instagram: 'bg-Instagram-gradient',
};

export const OverViewCard = (props: OverViewProps) => {
  const { user, audienceType, audience, network, isUp, today } = props;

  return (
    <article className='bg-Light-Grayish-Blue w-full h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center dark:bg-Dark-Desaturated-Blue'>
      <div className={`${networkColors[network]} h-1 mb-8`}></div>
      <div className='flex place-content-center gap-2 items-center'>
        <img src={networkLogos[network]} alt={`logo - ${network}`} />
        <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
      </div>

      <p className='text-[56px] font-bold text-Very-Dark-Blue mb-6 dark:text-white'>{audience}</p>
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
