let clicks = 0;

const hot = document.querySelector('.hot-button');
const clickCount = document.querySelector('.click-count');

hot.addEventListener('click', handleHotClicks);

function handleHotClicks(event) {
  clicks++;
  let temp;

  if (clicks < 4) {
    temp = 'cold';
  } else if (clicks < 7) {
    temp = 'cold';
  } else if (clicks < 10) {
    temp = 'tepid';
  } else if (clicks < 13) {
    temp = 'warm';
  } else if (clicks < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  hot.className = 'hot-button ' + temp;
  clickCount.textContent = 'Clicks: ' + clicks;
}
