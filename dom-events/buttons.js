function handleClick(event) {
  console.log('button clicked');
  console.log(' event:', event);
  console.log(' event.target:', event.target);
}

const butt = document.querySelector('.click-button');

butt.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(' event:', event);
  console.log(' event.target:', event.target);
}

const mouse = document.querySelector('.hover-button');

mouse.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(' event:', event);
  console.log(' event.target:', event.target);
}

const doub = document.querySelector('.double-click-button');

doub.addEventListener('dblclick', handleDoubleClick);
