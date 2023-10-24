export const Button = ({ onClick, page }) => {
  return (
    <div>
      <button onClick={() => {onClick(page)}}>Load more</button>
    </div>
  );
};
