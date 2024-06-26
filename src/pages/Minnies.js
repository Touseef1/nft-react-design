import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Modal from './layout/Modal';
import PopupButton from './layout/PopupButton';
import '../css/minnies.css';
import '../css/modal.css';

function Minnies() {
  return (
    <div>
   <button id="scrollToTopBtn">↑</button>
    <section className="banner-section">
    <Header></Header>
        <div className="banner-content d-flex flex-column justify-content-start p-4">
            <h1>MINNIES</h1>
            <p>Discover the enchanting world of Minnies, where forgotten memories carve the path to a universe filled</p>
        </div>
    </section>  
    <section className="nft-collection">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 mx-auto">
                        <div className="gif-container-1">
                            <img src="assets/minnies/gif-1.gif" alt="Scene-1" className="multi-gif" />
                            <img src="assets/minnies/gif-2.gif" alt="Scene-2" className="multi-gif" />
                            <img src="assets/minnies/gif-3.gif" alt="Scene-3" className="multi-gif" />
                            <img src="assets/minnies/gif-4.gif" alt="Scene-4" className="multi-gif" />
                            <img src="assets/minnies/gif-5.gif" alt="Scene-5" className="multi-gif" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="text-content pt-5">
                            <h1>MINNIES OG COLLECTION</h1>
                            <p>Meet the Minnies, a collection of 999 adorable CC0-licensed voxel characters, designed to bring a touch of cuteness to the Web3 space. As one of the first fully family-friendly NFT projects, Minnies bridges the gap between the youthful excitement of children and the young at heart.</p>
                            <p>These charming characters are not just collectibles; they are fully interactive and metaverse compatible. Play with your Minnies on Nifty Island, and access their .glb files for personal use. Looking forward, Minnies will also be compatible with The Sandbox in the second half of 2024, expanding the ways you can engage with your voxel friends.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="slider">
        <div className="slider-container">
            <div className="owl-carousel owl-theme">
                <div className="item"><img src="assets/minnies/image0.png" alt="Image 0"/></div>
                <div className="item"><img src="assets/minnies/image1.png" alt="Image 1"/></div>
                <div className="item"><img src="assets/minnies/image2.png" alt="Image 2"/></div>
                <div className="item"><img src="assets/minnies/image3.png" alt="Image 3"/></div>
                <div className="item"><img src="assets/minnies/image4.png" alt="Image 4"/></div>
                <div className="item"><img src="assets/minnies/image5.png" alt="Image 5"/></div>
                <div className="item"><img src="assets/minnies/image6.png" alt="Image 6"/></div>
                <div className="item"><img src="assets/minnies/image8.png" alt="Image 8"/></div>
                <div className="item"><img src="assets/minnies/image9.png" alt="Image 9"/></div>
                <div className="item"><img src="assets/minnies/image10.png" alt="Image 10"/></div>
                <div className="item"><img src="assets/minnies/image11.png" alt="Image 11"/></div>
                <div className="item"><img src="assets/minnies/image12.png" alt="Image 12"/></div>
                <div className="item"><img src="assets/minnies/image13.png" alt="Image 13"/></div>
                <div className="item"><img src="assets/minnies/image14.png" alt="Image 14"/></div>
                <div className="item"><img src="assets/minnies/image15.png" alt="Image 15"/></div>
                <div className="item"><img src="assets/minnies/image16.png" alt="Image 16"/></div>
                <div className="item"><img src="assets/minnies/image17.png" alt="Image 17"/></div>
                <div className="item"><img src="assets/minnies/image18.png" alt="Image 18"/></div>
                <div className="item"><img src="assets/minnies/image19.png" alt="Image 19"/></div>
                <div className="item"><img src="assets/minnies/image20.png" alt="Image 20"/></div>
                <div className="item"><img src="assets/minnies/image21.png" alt="Image 21"/></div>
            </div>
        </div>
    </section>
    

    
    <section>
        <div className="banner-section2"></div>
    </section>
    <Modal></Modal>
      <Footer></Footer>
  </div>
  );
}

export default Minnies;
