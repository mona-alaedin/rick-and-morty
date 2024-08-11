import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";
import { Character } from "./CharacterList";
import { TrashIcon, XCircleIcon } from "@heroicons/react/20/solid";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      {children}
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

export function Favorites({ favorites, onDeleteFavorite }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal onOpen={setIsOpen} open={isOpen} title="FAVORITES ❤">
        {favorites.map((item) => {
          return (
            <Character key={item.id} item={item}>
              <button
                className="icon red"
                onClick={() => onDeleteFavorite(item.id)}>
                <TrashIcon />
              </button>
            </Character>
          );
        })}
      </Modal>
      <button className="heart" onClick={() => setIsOpen(true)}>
        <HeartIcon className="icon" />
        <span className="badge">{favorites.length}</span>
      </button>
    </>
  );
}

function Logo() {
  return <div className="navbar__logo">LOGOO🎭</div>;
}
