import Facebook from '../assets/images/icon-facebook.svg';
import Instagram from '../assets/images/icon-instagram.svg';
import Twitter from '../assets/images/icon-twitter.svg';
import YouTube from '../assets/images/icon-youtube.svg';

interface OverViewProps {
  id: string;
  network: string;
  user: string;
  audienceType: string;
  audience: number;
  today: number;
  isUp: boolean;
}
interface OverViewTodayProps {
  id: string;
  network: string;
  statsType: string;
  stats: number;
  porcentage: number;
  isUp: boolean;
}

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

export {
  type OverViewProps,
  type OverViewTodayProps,
  networkColors,
  networkLogos,
};
