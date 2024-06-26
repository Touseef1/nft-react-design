import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Modal from './layout/Modal';
import '../css/thelorestyle.css';
import '../css/modal.css';
import { Link } from 'react-router-dom';
function Lore() {
  return (
    <div>
      <section className="banner-section-2">
        <Header />
        <div className="banner-content-2 d-flex flex-column justify-content-start p-4">
          <h1>Realm of Ways</h1>
          <p>
            Since the beginning of time, there has been a hidden power, a force waiting to be discovered. It was always just a matter of time until the "Portals" were found. But when these mysterious, indestructible gates were unlocked, they revealed a path to endless new worlds. Are you ready to dive into a world where the impossible happens every day?
          </p>
        </div>
      </section>

      <section className="nft-collection pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="gif-container-2">
                <img src="assets/THELORE/gif-7.gif" alt="Scene-1" className="multi-gif" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-content pt-5">
                <h1>Meet Bob - The Protagonist</h1>
                <p>
                  On an abandoned planet, Bob is the only human, surrounded by animals and plants that can speak. Everyday he learns something new from these mysterious beings, exploring every corner of his world. His next big adventure is just around the corner..
                </p>
              </div>
              <div className="image-gallery pb-5">
                <img src="assets/THELORE/random.png" alt="Pose 1" className="rotated-image1 img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner-wrapper">
        <div className="banner-section2"></div>
      </section>
      <Modal></Modal>
      <Footer />
    </div>
  );
}

export default Lore;
