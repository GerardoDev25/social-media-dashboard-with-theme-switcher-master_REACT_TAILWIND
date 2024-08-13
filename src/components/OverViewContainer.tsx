import { overview } from '../../data/data.json';
import { OverViewProps } from '../utils/over-view-card-utils';
import { OverViewCard } from './OverViewCard';

export const OverViewContainer = () => {
  return (
    <section className='max-w-[1440px] flex flex-wrap gap-[30px] absolute top-[191px] left-0 right-0 mx-auto'>
      {overview.map((item) => (
        <OverViewCard key={item.id} {...(item as OverViewProps)} />
      ))}
    </section>
  );
};
