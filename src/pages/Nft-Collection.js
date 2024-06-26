import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Modal from './layout/Modal';
import '../css/nftcollection.css';
import '../css/modal.css';

function Nftcollection() {
  return (
    <div>
       <Header />
       <button id="scrollToTopBtn">↑</button>
      <section className="mt-5 position-relative" style={{overflow: 'hidden'}}>
        <div className="container pt-lg-5">
            <div className="row custom_height">
                <div className="col-lg-6">
                  <div className="d-none d-lg-block">
                    <h1 className="text-lg-start text-center d-none d-lg-block">RUYUI NFT Collection</h1>
                    <p className="text-lg-start text-center d-none d-lg-block">
                        9,999 unique characters created with over 400 traits, waiting for you to find the gates and join Bob’s journey.
                    </p>
                  </div>

                    
            <div className="image-gallery position-relative mt-0 mt-lg-5">
                <img src="assets/nftcollection/Honorary_Base.png" alt="Description 1" className="image-custom image1" />
                <img src="assets/nftcollection/toly.png" alt="Description 2" className="image-custom image2" />
                <img src="assets/nftcollection/pranksy.png" alt="Description 3" className="image-custom image3" />
                <img src="assets/nftcollection/jonahblake.png" alt="Description 1" className="image-custom image4" />
                <img src="assets/nftcollection/Honorary_Bearsnake.png" alt="Description 2" className="image-custom image5" />
                <img src="assets/nftcollection/charl3s.png" alt="Description 3" className="image-custom image6" />
                <img src="assets/nftcollection/Honorary_Deekay.png" alt="Description 1" className="image-custom image7" />
            </div>
            <div className="d-block d-lg-none mt-0 mt-md-4 mt-lg-0">
              <h1 className="text-lg-start text-center">RUYUI NFT Collection</h1>
              <p className="text-lg-start text-center">
                  9,999 unique characters created with over 400 traits, waiting for you to find the gates and join Bob’s journey.
              </p>
            </div>
                   
                </div>
                
                <div className="col-lg-6 d-lg-block d-none">  
                    <div className="gif-container">        
                    <img src="assets/nftcollection/thread.png" alt="Scene-1" className="multi-gif img-fluid" />
                    <img src="assets/nftcollection/raj.png" alt="Scene-2" className="multi-gif img-fluid" />
                    <img src="assets/nftcollection/ray-9gag.png" alt="Scene-3" className="multi-gif img-fluid" />
                    <img src="assets/nftcollection/beanie.png" alt="Scene-4" className="multi-gif img-fluid" />
                    <img src="assets/nftcollection/Honorary_Dingaling.png" alt="Scene-5" className="multi-gif img-fluid" />
                </div>
            </div>  
           
                </div>
            </div>
      </section>
      <section style={{overflow: 'hidden'}}>
        <div className="row position-relative set_Custom_height" style={{overflowX: 'hidden'}}> 
          <div className="col-lg-6 d-lg-none d-block">  
            <div className="gif-container">        
            <img src="assets/nftcollection/thread.png" alt="Scene-1" className="multi-gif img-fluid" />
            <img src="assets/nftcollection/raj.png" alt="Scene-2" className="multi-gif img-fluid" />
            <img src="assets/nftcollection/ray-9gag.png" alt="Scene-3" className="multi-gif img-fluid" />
            <img src="assets/nftcollection/beanie.png" alt="Scene-4" className="multi-gif img-fluid" />
            <img src="assets/nftcollection/Honorary_Dingaling.png" alt="Scene-5" className="multi-gif img-fluid" />
        </div>
    </div>
        </div>
        
      </section>
      <div className="mt-5 container-fluid px-0 pb-0 position-relative d-lg-block d-none overflow-hidden">
      <img src="assets/nftcollection/WebsiteTree.png" className="website-tree" alt="" />
      <img src="assets/nftcollection/allassets.png" className="all-sets" alt="" />
      <img src="assets/nftcollection/Group.png" className="arrow_img" alt="" />
      <h1 className="position-absolute fw-bold text-dark roadmap-title">RUYUI STUDIOS 2024 ROADMAP</h1>
      <h3 className="fw-bold side_text">MORE ANIMATED CONTENT</h3>
      <b className="position-absolute fw-bold text-dark text-heading block1">December 2023</b>
      <div className="position-absolute text-wrapper block1-content">
        <p className="mb-1 fw-bold">Minnies OG Collection Launch</p>
        <p>• Nifty Island Integration <br />
          • CC0 License Release <br />
          • 3D Files Distribution</p>
      </div>

      <b className="position-absolute fw-bold text-dark text-heading block2">Q2 2024</b>
      <div className="position-absolute text-wrapper block2-content">
        <p className="mb-1 fw-bold">$ROW Point System Activated</p>
        <p>• Content Creation Award System Activated <br />
          • Point Utility System Activated</p>
      </div>
      <div className="position-absolute text-wrapper block2-more-content">
        <p className="mb-1 fw-bold">Ruyui Honoraries</p>
        <p>• Honorary collection distribution</p>
      </div>

      <b className="position-absolute fw-bold text-dark text-heading block3">Q3 2024</b>
      <div className="position-absolute text-wrapper block3-content">
        <p>• Discord & Telegram Launch <br />
          • Social Media Launch
        </p>
      </div>
      <div className="position-absolute text-wrapper block3-more-content1">
        <p className="mb-1 fw-bold">Launch with Magic Eden</p>
      </div>
      <div className="position-absolute text-wrapper block3-more-content2">
        <p className="mb-1">Limited Edition Figurines</p>
      </div>
      <div className="position-absolute text-wrapper block3-more-content3">
        <p className="mb-1">Ruyui Studios IRL Company Launch</p>
      </div>

      <b className="position-absolute fw-bold text-dark text-heading block4">Q4 2024</b>
      <div className="position-absolute text-wrapper block4-content">
        <p className="mb-1 fw-bold">3D AVATARS</p>
        <p>• Download your 3D Files <br />
          • Create your own 3D Models from given traits</p>
      </div>
      <div className="position-absolute text-wrapper block4-more-content">
        <p className="mb-1 fw-bold">RUYUI STORE</p>
        <p>• Access to all types of merch <br />
          • Customize your figurines <br />
          • Collab Merchandise</p>
      </div>

      <b className="position-absolute fw-bold text-dark text-heading block5">H1 2024</b>
      <div className="position-absolute text-wrapper block5-content">
        <p className="mb-1 fw-bold">Multiplayer Platformer Game</p>
        <p>• First co-op game <br />
          • Release of the Pixel Avatars <br />
          • Use your pixel avatars in game <br />
          • Get the sprites for other metaverse platforms</p>
      </div>
    </div>
    <Modal></Modal>
      <Footer />
    </div>
  );
}

export default Nftcollection;
