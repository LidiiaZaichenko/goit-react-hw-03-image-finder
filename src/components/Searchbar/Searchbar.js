export const Searchbar = ({ onSubmit }) => {
  return (
    <div>
      <header >
        <form >
          <button type="submit" >
            <span >Search</span>
          </button>

          <input
            type="text"
            placeholder="Search images and photos"
            onChange={evt => onSubmit(evt.target.value)}
          />
        </form>
      </header>
    </div>
  );
};
