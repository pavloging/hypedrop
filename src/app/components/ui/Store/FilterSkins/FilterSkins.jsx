export default function FilterSkins({ handlePage }) {
  return (
    <div className="filter-skins">
      <h1>FilterSkins</h1>
      <button className="filter-skins__button" onClick={handlePage}>
        Add page
      </button>
    </div>
  );
}
