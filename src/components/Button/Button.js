import { LoadmoreButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return <LoadmoreButton type="button" onClick={onClick}>Load more</LoadmoreButton>;
};
