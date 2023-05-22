document.addEventListener('DOMContentLoaded', function() {
  const scrollMarker = document.querySelector('.scroll-marker');
  const scrollButtons = document.querySelector('.scroll-buttons');
  const sections = document.querySelectorAll('section');

  scrollMarker.addEventListener('click', function() {
    if (scrollButtons.style.opacity === '1') {
      scrollButtons.style.opacity = '0';
      scrollButtons.style.visibility = 'hidden';
    } else {
      scrollButtons.style.opacity = '1';
      scrollButtons.style.visibility = 'visible';
    }
  });

  scrollButtons.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('north')) {
      sections[0].scrollIntoView({behavior: 'smooth'});
    } else if (target.classList.contains('north-west')) {
      sections[1].scrollIntoView({behavior: 'smooth'});
    } else if (target.classList.contains('west')) {
      sections[2].scrollIntoView({behavior: 'smooth'});
    } else if (target.classList.contains('south-west')) {
      sections[3].scrollIntoView({behavior: 'smooth'});
    } else if (target.classList.contains('south')) {
      sections[4].scrollIntoView({behavior: 'smooth'});
    }
  });
});

// Profile Details

const infoWrapper = document.querySelector('.info-wrapper');
const hideOnScroll = document.querySelector('.hide-on-scroll');

window.addEventListener('scroll', function() {
  if (window.pageYOffset === 0) {
    infoWrapper.classList.add('show-info');
    hideOnScroll.classList.remove('hidden');
  } else {
    infoWrapper.classList.remove('show-info');
    hideOnScroll.classList.add('hidden');
  }
});



// Progress Bar

const scrollToTopLink = document.querySelector('.cl-scroll-top');
const progressBar = document.querySelector('#scroll-top-bar');

scrollToTopLink.addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY || window.pageYOffset;
  const scrollProgress = 100 - ((scrollTop / (documentHeight - windowHeight)) * 100);

  progressBar.style.height = scrollProgress + '%';

  if (window.pageYOffset > 0) {
    scrollToTopLink.style.display = 'block'; // Show the scroll-to-top link
  } else {
    scrollToTopLink.style.display = 'none'; // Hide the scroll-to-top link
  }
});

// Resume

const resumeBox = document.querySelector('.resume-box');
const downloadText = document.getElementById('download-text');

// Add event listener to the resume box
resumeBox.addEventListener('click', function() {
  // Check the current text content
  if (downloadText.textContent === 'Download Resources') {
    // Update the text to "Download Complete"
    downloadText.textContent = 'Download Complete';
  } else {
    // Update the text to "Download Resources"
    downloadText.textContent = 'Downloading Resources';
  }
});