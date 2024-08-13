import data from '../../data/data.json';
import { OverViewTodayProps } from '../utils/over-view-card-utils';
import { OverViewTodayCard } from './OverViewTodayCard';

export const OverViewTodayContainer = () => {
  return (
    <section className=''>
      <h2 className='text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-8'>Overview Today</h2>
      <div className='flex flex-wrap'>
        {data['overview-today'].map((item) => (
          <OverViewTodayCard key={item.id} {...(item as OverViewTodayProps)} />
        ))}
      </div>
    </section>
  );
};
