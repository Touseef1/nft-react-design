import React from 'react';
import Header from './layout/Header';
import Modal from './layout/Modal';
import '../css/landingPage.css';
import '../css/modal.css';
function LandingPage() {
  return (
    <div>
          <button id="scrollToTopBtn">↑</button>
          <section>
          <Header></Header>
        <div class="background-img"></div>
    </section>
    <Modal></Modal>

    </div>
  );
}

export default LandingPage;
