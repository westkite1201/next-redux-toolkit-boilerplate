import { useSelector, RootState } from 'store';
import { Card } from 'components/common';

const HomeContainer = () => {
  const datas = useSelector((state: RootState) => state.data.datas);

  return (
    <>
      {datas?.map((card, index: number) => (
        <Card key={index} title={card.title} number={card.number} />
      ))}
    </>
  );
};

export default HomeContainer;
