import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      {children}
      <Favorites />
    </nav>
  );
}

export default Navbar;

export function SearchResult({ numOfResult }) {
  return <div className="navbar__result">Found {numOfResult} characters</div>;
}

export function Search({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="text-field"
      type="text"
      placeholder="search ..."
    />
  );
}

function Logo() {
  return <div className="navbar__logo">LOGOO🎭</div>;
}

function Favorites() {
  return (
    <button className="heart">
      <HeartIcon className="icon" />
      <span className="badge">2</span>
    </button>
  );
}
