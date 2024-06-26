import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Modal from './layout/Modal';
import '../css/team.css';
import '../css/modal.css';

function Team() {
  return (
    <div>
      <button id="scrollToTopBtn">↑</button>
      <Header />
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="team-title">THE COUNCIL</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
              <div className="card">
                <img className="card-img-top img-fluid" src="./assets/team/team1.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title">YAN</h5>
                  <p className="card-text">CO-FOUNDER ART DIRECTOR</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
              <div className="card">
                <img className="card-img-top img-fluid" src="./assets/team/team2.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title">VOXEL QUEEN</h5>
                  <p className="card-text">CO-FOUNDER 3D ARTIST</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
              <div className="card">
                <img className="card-img-top img-fluid" src="./assets/team/team3.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title">EMI</h5>
                  <p className="card-text">MARKETING STRATEGIST</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
              <div className="card">
                <img className="card-img-top img-fluid" src="./assets/team/team4.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title">ESRA</h5>
                  <p className="card-text">SOCIAL MEDIA MANAGER</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
              <div className="card">
                <img className="card-img-top img-fluid" src="./assets/team/team5.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title">BHARAT KRYMO</h5>
                  <p className="card-text">FOUNDING INVESTOR ADVISOR</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
              <div className="card">
                <img className="card-img-top img-fluid" src="./assets/team/team6.png" alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title">GHOST</h5>
                  <p className="card-text">SANGEL INVESTOR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="team-title">THE STUDIO</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team7.png" alt="Card image cap" />
                    <div className="card-body text-center">
                      <h5 className="card-title-1">ALEXANDER ALBIZ</h5>
                      <p className="card-text-1">KEY ANIMATOR</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team8.png" alt="Card image cap" />
                    <div className="card-body text-center">
                      <h5 className="card-title-1">DENNIS BUARA</h5>
                      <p className="card-text-1">KEY ANIMATOR COLORING ARTIST</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team9.png" alt="Card image cap" />
                    <div className="card-body text-center">
                      <h5 className="card-title-1">YOH</h5>
                      <p className="card-text-1">ANIMATOR CLEAN UP ARTIST</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team10.png" alt="Card image cap"/>
                    <div className="card-body text-center">
                      <h5 className="card-title-1">YUI</h5>
                      <p className="card-text-1">ANIMATOR IN BETWEEN ANIMATOR</p>
                    </div>
                  </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team11.png" alt="Card image cap"/>
                    <div className="card-body text-center">
                      <h5 className="card-title-1">MUF</h5>
                      <p className="card-text-1">STORYBOARD ARTIST</p>
                    </div>
                  </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team12.png" alt="Card image cap"/>
                    <div className="card-body text-center">
                      <h5 className="card-title-1">OLLY</h5>
                      <p className="card-text-1">CONCEPT ARTIST BACKGROUND ARTIST</p>
                    </div>
                  </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team13.png" alt="Card image cap"/>
                    <div className="card-body text-center">
                      <h5 className="card-title-1">FE</h5>
                      <p className="card-text-1">CONCEPT ARTIST</p>
                    </div>
                  </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team14.png" alt="Card image cap"/>
                    <div className="card-body text-center">
                      <h5 className="card-title-1">INDRA</h5>
                      <p className="card-text-1">3D ARTIST SCULPTOR</p>
                    </div>
                  </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team15.png" alt="Card image cap"/>
                    <div className="card-body text-center">
                      <h5 className="card-title-1">DAVE</h5>
                      <p className="card-text-1">PIXEL ARTIST</p>
                    </div>
                  </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team16.png" alt="Card image cap"/>
                    <div className="card-body text-center">
                      <h5 className="card-title-1">ONEDSOUL</h5>
                      <p className="card-text-1">PIXEL ARTIST</p>
                    </div>
                  </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team17.png" alt="Card image cap"/>
                    <div className="card-body text-center">
                      <h5 className="card-title-1">SEKU</h5>
                      <p className="card-text-1">GAME DEVELOPER</p>
                    </div>
                  </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team18.png" alt="Card image cap"/>
                    <div className="card-body text-center">
                      <h5 className="card-title-1">AKITO</h5>
                      <p className="card-text-1">GAME DEVELOPER</p>
                    </div>
                  </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team19.png" alt="Card image cap"/>
                    <div className="card-body text-center">
                      <h5 className="card-title-1">ONEDSOUL</h5>
                      <p className="card-text-1">PIXEL ARTIST</p>
                    </div>
                  </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 mt-3 px-5 px-md-2">
                <div className="card">
                    <img className="card-img-top img-fluid" src="./assets/team/team20.png" alt="Card image cap"/>
                    <div className="card-body text-center">
                      <h5 className="card-title-1">SEKU</h5>
                      <p className="card-text-1">GAME DEVELOPER</p>
                    </div>
                  </div>
            </div>
        </div>
        </div>
      </section>
      <Modal />
      <Footer />
    </div>
  );
}

export default Team;
