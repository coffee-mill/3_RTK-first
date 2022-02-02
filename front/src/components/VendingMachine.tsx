import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync, clear } from '../stores/gif';
import GifTyoe, { RootState } from '../types';

function Gif({ url, loading, error }: GifTyoe) {
  if (error) {
    return <p className="notification is-danger">Error!!</p>;
  }

  if (loading) {
    return <p className="notification is-info">Loading...</p>;
  }

  if (!url) {
    return <p className="notification">Welcome!</p>;
  }

  return (
    <figure>
      <img src={url} alt="" />
      <figcaption>
        GIFs by <a href="https://giphy.com/">GIPHY</a>
      </figcaption>
    </figure>
  );
}

function VendingMachine() {
  const url = useSelector((state: RootState) => state.gif.url);
  const loading = useSelector((state: RootState) => state.gif.loading);
  const error = useSelector((state: RootState) => state.gif.error);

  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="title">猫GIFガチャ</h1>
      <Gif {...{ url, loading, error }} />
      <hr />
      <div className="buttons">
        <button
          className="button is-primary"
          onClick={() => dispatch(fetchAsync())}
        >
          Play
        </button>
        <button className="button" onClick={() => dispatch(clear())}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default VendingMachine;
