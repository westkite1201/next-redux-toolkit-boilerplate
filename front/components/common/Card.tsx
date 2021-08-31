import styled from 'styled-components';

const St = {
  CardWrapper: styled.div``,
};
type CardProps = {
  number: '';
  title: '';
};
const Card: React.FC<CardProps> = ({ number, title }) => {
  return (
    <St.CardWrapper>
      <div>{number}</div>
      <div>{title}</div>
    </St.CardWrapper>
  );
};

export default Card;
