import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Modal from './layout/Modal';
import '../css/studio.css';
import '../css/modal.css';

function Studio() {
  return (
    <div>
    <button id="scrollToTopBtn">↑</button>
    <Header></Header>
    <section className="section-1">
      <div className="container mt-5">
        <a href="nftcollection.html" className="nftcollection2"><h2>WHO WE ARE</h2></a>
        <p className="text">
          <a href="nftcollection.html" className="nftcollection2"><span className="fw-bold">Ruyui Studios</span></a> is driven by a dynamic team of creatives, gamers, builders, and visionaries who consistently push the boundaries of what's possible.
        </p>
        <p className="text">
          Having ex-Disney animators in our team, who are known for their work on Duck Tales, Helluva Boss, Big Hero 6, and Looney Tunes, we aim to establish a strong presence in the industry. Our goal is to become a leading Web2 and Web3-focused gaming and entertainment company, using our broad expertise across creative disciplines to deliver high-quality and innovative products.
        </p>
      </div>
      <div className="container mt-5">
        <a href="nftcollection.html" className="nftcollection2"><h2>OUR SERVICES</h2></a>
        <p className="text">
          Our studio offers comprehensive services to enhance any Web3 project. We manage all aspects of game development in-house, from pixel and voxel art to sophisticated 3D modeling, ensuring every project benefits from our direct oversight and creative control. For those in need of specific talents, whether it's crafting <a href="nftcollection.html" className="nftcollection2"><span className="fw-bold">Sandbox-compatible avatars</span></a> with Voxelqueen and her team, developing <a href="nftcollection.html" className="nftcollection2"><span className="fw-bold">pixel art and sprite sheets</span></a> for your next game, or creating <a href="nftcollection.html" className="nftcollection2"><span className="fw-bold">fully rigged 3D metaverse avatars</span></a> for platforms like Nifty Island, Hyperfy, or Portals, we have the expertise to deliver.
        </p>
        <p className="text">
          Additionally, we're passionate about adding creative touches to smaller projects, like animated <a href="nftcollection.html" className="nftcollection2"><span className="fw-bold">GM posts</span></a> featuring your PFP. At Ruyui Studios, we’re more than just a service; we’re your partner in creativity, turning innovative ideas into stunning realities. Let’s shape the future of digital entertainment together.
        </p>
      </div>
      <div className="container studio-img mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-3 mt-3">
            <img src="./assets/studio/farm1.png" className="img-1 img-fluid" alt="farm1" />
          </div>
          <div className="col-lg-3 col-md-4 col-3 mt-3">
            <img src="./assets/studio/farm2.png" className="img-2 img-fluid" alt="farm2" />
          </div>
          <div className="col-lg-3 col-md-4 col-3 mt-3">
            <img src="./assets/studio/farm3.png" className="img-3 img-fluid" alt="farm3" />
          </div>
          <div className="col-lg-3 col-md-4 col-3 mt-3">
            <img src="./assets/studio/farm4.png" className="img-4 img-fluid" alt="farm4" />
          </div>
        </div>
      </div>
    </section>
    <Modal></Modal>
      <Footer />
    </div>
  );
}

export default Studio;
