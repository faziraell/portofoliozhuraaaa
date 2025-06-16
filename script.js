

//yang ini punya zhura
//main content - why ejm 
window.onload = () => {
  const kenapaContainer = document.getElementById('kenapaContainer');
  const kenapaCard = document.querySelector('#kenapaContainer .card');
  const scrollAmountKenapa = kenapaCard.offsetWidth + 40;
  
  document.querySelector('.why-ejm .scroll-btn.left').onclick = () => {
    kenapaContainer.scrollLeft -= scrollAmountKenapa;
  };
  document.querySelector('.why-ejm .scroll-btn.right').onclick = () => {
    kenapaContainer.scrollLeft += scrollAmountKenapa;
  };
};
