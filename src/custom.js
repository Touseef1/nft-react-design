let wheel = document.getElementById('wheel_spinner');
let  tree_img = document.getElementById('tree_img');
let  wheel_img = document.getElementById('wheel_img');
let value = Math.ceil(Math.random() * 3600);
let timerTopup = document.getElementById('timer_topup');


wheel.onclick = function() {
    wheel.style.transition = "transform 5s ease-out";
    wheel.style.transform = "rotate(" + value + "deg)";
    setTimeout(function() {
        timerTopup.classList.remove('d-none');
        tree_img.classList.add('tree_img')
          wheel_img.classList.add('wheel_img')
    }, 5000); // 5000 milliseconds = 5 seconds
    
    value += Math.ceil(Math.random() * 3600);

}

document.addEventListener('click', function(event) {
      if (!timerTopup.contains(event.target) && !wheel.contains(event.target)) {
          timerTopup.classList.add('d-none');
          tree_img.classList.remove('tree_img')
          wheel_img.classList.remove('wheel_img')
      }
    });



document.addEventListener('DOMContentLoaded', function () {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Show the button when the user scrolls down 100px from the top
  window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
          scrollToTopBtn.style.display = 'block';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  });

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

