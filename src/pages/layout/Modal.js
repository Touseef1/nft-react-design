import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Modal() {
  const [timerVisible, setTimerVisible] = useState(false);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  useEffect(() => {
    // Close modals on outside click
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains('modal')) {
        setShowFirstModal(false);
        setShowSecondModal(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOpenFirstModal = () => {
    setShowFirstModal(true);
    document.querySelector(".modal-backdrop").style.display = 'block';
  };

  const handleCloseFirstModal = () => {
    setShowFirstModal(false);
    document.querySelector(".modal-backdrop").classList.remove('show');
  };
  
  const handleOpenSecondModal = () => {
    setShowSecondModal(true);
    setShowFirstModal(false);
    document.querySelector(".modal-backdrop").style.display = 'block';
    setTimerVisible(true); // Start the timer when the second modal is opened
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
    document.querySelector(".modal-backdrop").classList.remove('show');
    setTimerVisible(false); // Stop the timer when the second modal is closed
  };


  // Function to start the timer
  useEffect(() => {
    if (timerVisible) {
      const countdown = document.getElementById('countdown');
      startTimer(86400, countdown);
    }
  }, [timerVisible]);

  // Function to handle wheel click
  const handleWheelClick = () => {
    let value = Math.ceil(Math.random() * 3600);
  
    // Perform DOM manipulations
    const wheel = document.getElementById('wheel_spinner');
    wheel.style.transition = "transform 5s ease-out";
    wheel.style.transform = "rotate(" + value + "deg)";
  
    setTimeout(() => {
      setTimerVisible(true); // Set timerVisible to true when the wheel stops rotating
    }, 5000);
  
    // Update the value for the next click
    value += Math.ceil(Math.random() * 3600);
  };

  // Function to handle document click
  const handleDocumentClick = (event) => {
    const timerTopup = document.getElementById('timer_topup');
    const wheel = document.getElementById('wheel_spinner');

    // Check if the click is outside of timerTopup and wheel
    if (!timerTopup.contains(event.target) && !wheel.contains(event.target)) {
      setTimerVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener for document click
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

// Function to start the timer
function startTimer(duration, display) {
  let startTime = Date.now(); // Get the current timestamp
  let endTime = startTime + duration * 1000; // Calculate the end time

  function updateTimer() {
    let currentTime = Date.now(); // Get the current timestamp
    let remainingTime = endTime - currentTime; // Calculate the remaining time

    if (remainingTime <= 0) {
      remainingTime = 0; // Ensure the remaining time doesn't go negative
    }

    // Convert remaining time to hours, minutes, and seconds
    let hours = Math.floor(remainingTime / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Format hours, minutes, and seconds with leading zeros if needed
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Update the timer display
    display.querySelector('#hours').textContent = hours;
    display.querySelector('#minutes').textContent = minutes;
    display.querySelector('#seconds').textContent = seconds;

    // Schedule the next update
    if (remainingTime > 0) {
      requestAnimationFrame(updateTimer); // Use requestAnimationFrame for smoother animation
    }
  }

  // Start the timer
  updateTimer();
}
  return (
    <div>
         {/* First Modal */}
      <div
  className={`modal fade quest-modal ${showFirstModal ? 'show' : ''}`}
  id="exampleModal"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden={!showFirstModal}
  style={{ display: showFirstModal ? 'block' : 'none' }}
>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="lucky-wheel" onClick={handleOpenSecondModal}>
                <img
                  src="assets/modal/LUCKY 1.png"
                  className="w-50"
                  alt="lucky-wheel"
                />
              </div>
              <div className="cross-btn">
                <button
                  type="button"
                  onClick={handleCloseFirstModal}
                  aria-label="Close"
                >
                  <img
                    src="assets/modal/cross-btn.png"
                    className="w-50"
                    alt="cross-btn"
                  />
                </button>
              </div>
              <div className="weekly-text">
                <h1>Weekly Quests</h1>
              </div>
              <div className="row">
                <div className="col-lg-8 weekly-sec">
                  <p className="modal-title fw-bold text-center mb-2 pt-2">
                    Complete Weekly Quests to collect $ROW
                  </p>
                  {[
                    {
                      title: 'Link X Account',
                      description: 'Link X account to start farming',
                      link: 'Login.html',
                    },
                    {
                      title: 'Follow @ruyuistudios',
                      description: 'It’s an easy task to farm, isn’t it?',
                    },
                    {
                      title: 'Like this post',
                      description: 'It’s an easy task to farm, isn’t it?',
                    },
                    {
                      title: 'Follow @ruyuistudios',
                      description: 'Link X account to start farming',
                    },
                  ].map((quest, index) => (
                    <div
                      className="quest-item d-flex align-items-center pt-3"
                      key={index}
                    >
                      <div className="mx-3 d-flex flex-column align-items-center">
                        <img
                          src="assets/modal/coin 1.png"
                          alt="coin-icon"
                          className="w-50"
                        />
                        <p>600</p>
                      </div>
                      <div className="mx-3">
                        <h5 className="fw-bold">{quest.title}</h5>
                        {quest.link ? (
                          <a href={quest.link}>{quest.description}</a>
                        ) : (
                          <p>{quest.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-lg-4 px-2">
                  <div className="profile-card d-flex">
                    <div className="mx-2">
                      <img src="assets/modal/PFP.png" alt="Profile Image" />
                      <h3>USERNAME</h3>
                    </div>
                    <div className="mx-2">
                      <p className="text-nowrap fw-bold">
                        LEVEL <span className="level">12</span>
                      </p>
                      <p className="text-nowrap fw-bold">
                        $ROW: <span className="px-1"></span> 2444
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Modal */}
      <div
  className={`modal fade quest-modal ${showSecondModal ? 'show' : ''}`}
  id="exampleModal2"
  tabIndex="-1"
  aria-labelledby="exampleModalLabel2"
  aria-hidden={!showSecondModal}
  style={{ display: showSecondModal ? 'block' : 'none' }}
>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="back d-flex justify-content-center">
                <a
                  href="#"
                  onClick={() => {
                    setShowSecondModal(false);
                    setShowFirstModal(true);
                  }}
                >
                  Go back to Quest Page
                </a>
              </div>
              <div className="lucky-wheel">
                <img
                  src="assets/modal/LUCKY 1.png"
                  className="w-50"
                  alt="lucky-wheel"
                />
              </div>
              <div className="cross-btn" style={{ top: '2px' }}>
                <button
                  type="button"
                  onClick={handleCloseSecondModal}
                  aria-label="Close"
                >
                  <img
                    src="assets/modal/cross-btn.png"
                    className="w-50"
                    alt="cross-btn"
                  />
                </button>
              </div>
              <div className="row">
                <div className="col-lg-8 weekly-sec2" id="weekly-sec">
                <div className={`timer_topup ${timerVisible ? '' : 'd-none'}`} id="timer_topup">
        <h4 className="px-3 pt-3">YOU’VE WON .............. POINTS!</h4>
        <p>SPIN AGAIN IN</p>
        <div className="timer d-flex justify-content-center" id="countdown">
          <div>
            <span id="hours">23</span>
            <p>HRS</p>
          </div>
          <span className="px-2">:</span>
          <div>
            <span id="minutes">59</span>
            <p>MINS</p>
          </div>
          <span className="px-2">:</span>
          <div>
            <span id="seconds">45</span>
            <p>SECS</p>
          </div>
        </div>
      </div>
      <div className="TreeWheel">
        <img
          src="assets/modal/TreeWheel-Tree.png"
          alt="TreeWheel-Tree"
          className="img-fluid"
          id="tree_img"
        />
        <div className="bg"></div>
        <div className="inner-image" id="wheel_img">
          <img
            src="assets/modal/TreeWheel-Wheel.png"
            alt="Inner Image"
            className="img-fluid"
            id="wheel_spinner"
            onClick={handleWheelClick}
          />
        </div>
      </div>
                  <p className="text-center">
                    Spin the wheel to get your daily ROW Points!
                  </p>
                </div>

                <div className="col-lg-4 px-2">
                  <div className="profile-card d-flex">
                    <div className="mx-2">
                      <img src="assets/modal/PFP.png" alt="Profile Image" />
                      <h3>USERNAME</h3>
                    </div>
                    <div className="mx-2">
                      <p className="text-nowrap fw-bold">
                        LEVEL <span className="level">12</span>
                      </p>
                      <p className="text-nowrap fw-bold">
                        $ROW: <span className="px-1"></span> 2444
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-buttons">
        <a
          id="exampleModal"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={handleOpenFirstModal}
        >
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
    </div>
  );
}

export default Modal;
