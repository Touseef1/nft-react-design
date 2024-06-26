import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Modal from './layout/Modal';
import '../css/farm.css';
import '../css/modal.css';

function Farm() {
  return (
    <div>
<button id="scrollToTopBtn">↑</button>
<Header></Header>
<section>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12">
                        <a href="nftcollection.html" className="nftcollection"><h2 className="fw-bold farm-heading">HOW TO $ROW?</h2></a>
                        <p className="text">
                            Discover the possibilities with $ROW, our exclusive <a href="nftcollection.html" className="nftcollection"><span className="fw-bold">social token</span></a> that fuels our dynamic ecosystem. It’s crafted to acknowledge your creativity and participation. <a href="nftcollection.html" className="nftcollection"><span className="fw-bold">Connect your X</span></a> and Discord to embark on our weekly quests, each crafted to offer you the chance to accumulate points and enhance your position within our community.
                        </p>
                        <a href="nftcollection.html" className="nftcollection"><h2 className="farm-heading">CREATOR AWARD PROGRAM</h2></a>
                        <p className="py-3 text">
                            Are you eager to share your creativity with the world?  <br />
                            Join our Creator Award Program, regardless of how many followers you have. We prioritize quality over quantity, ensuring that each tweet adds value and resonates with our community.   
                        </p>
                        <p className="text">
                            To participate, your posts should be more than just noise—they should carry substance, whether it's through memes, insightful explanations about RUYUI, or fan art. Remember to tag <a href="nftcollection.html" className="nftcollection"><span className="fw-bold">@ruyuistudios</span></a> in your contributions. 
                        </p>
                        <p className="text">
                            <a href="nftcollection.html" className="nftcollection"><span className="fw-bold">Avoid spamming X with meaningless tweets</span></a>, as these will not count towards farming and will not earn you any points. If our official Twitter page likes your creative content, you'll receive bonus points.
                        </p>
                        <p className="text">
                            Additionally, keep an eye out for our special events like art and meme contests, which are also part of the Creator Award Program. These contests are a great way to showcase your talents and earn more points.
                        </p>
                        <p className="text">
                            Start your journey with RUYUI today by linking your X and diving into our quests. See your efforts rewarded as you accumulate points through various creative challenges. The more tasks you complete, the more points you gain, propelling your adventure in our vibrant ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Modal></Modal>
      <Footer></Footer>
    </div>
  );
}

export default Farm;
