import React from 'react';
import { Link } from 'react-router-dom';

function PopupButton() {
  return (
    <div className="fixed-buttons">
    <a id="exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img src="assets/minnies/book_icon.png" alt="Book Icon" />
    </a>
    <Link to="/nft-collection">
      <div className="nft-container">
        <img src="assets/minnies/gif.gif" alt="NFT" />
        <div className="nft-text d-none d-md-block">
          <span>VISIT RUYUI NFT</span>
          <span>COLLECTION</span>
        </div>
      </div>
    </Link>
  </div>
  );
}

export default PopupButton;
