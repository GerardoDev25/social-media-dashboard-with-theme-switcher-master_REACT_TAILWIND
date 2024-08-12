import { overview } from '../../data/data.json';
import { OverViewCard, type OverViewProps } from './OverViewCard';

export const OverViewContainer = () => {
  return (
    <section className='w-[320px] absolute top-[191px] left-0 right-0 mx-auto'>
      {overview.map((item) => (
        <OverViewCard key={item.id} {...(item as OverViewProps)} />
      ))}
    </section>
  );
};
