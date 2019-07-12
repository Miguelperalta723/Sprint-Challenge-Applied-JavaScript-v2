/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector('.carousel-container')


carouselContainer.appendChild(carouselComponent())

function carouselComponent(){
  const carousel = document.createElement('div')
  const leftBtn = document.createElement('div')
  const mountainsImg = document.createElement('img')
  const computerImg = document.createElement('img')
  const treesImg = document.createElement('img')
  const turntableImg = document.createElement('img')
  const rightBtn = document.createElement('div')

  carousel.classList.add('carousel')
  leftBtn.classList.add('left-button')
  rightBtn.classList.add('right-button')
  mountainsImg.classList.add('img')
  computerImg.classList.add('img')
  treesImg.classList.add('img')
  turntableImg.classList.add('img')
  


  leftBtn.textContent = ' < '
  rightBtn.textContent = ' > '

  mountainsImg.src = "./assets/carousel/mountains.jpeg"
  computerImg.src = "./assets/carousel/computer.jpeg"
  treesImg.src = "./assets/carousel/trees.jpeg" 
  turntableImg.src = "./assets/carousel/turntable.jpeg"

  carousel.appendChild(leftBtn)
  carousel.appendChild(mountainsImg)
  carousel.appendChild(computerImg)
  carousel.appendChild(treesImg)
  carousel.appendChild(turntableImg)
  carousel.appendChild(rightBtn)

  
  let images = document.getElementsByClassName('img')
  let currentIndex = 0
  mountainsImg.style.display = "block"


  leftBtn.addEventListener('click', function slideLeft(){
      if ((currentIndex - 1) < 0){
      currentIndex = images.length-1;
      } else {
      currentIndex -= 1;        
      }
      Array.from(images).forEach(image => image.style.display = "none");
      images[currentIndex].style.display = "block";
  })


  rightBtn.addEventListener('click', function slideRight(){
      currentIndex += 1;
      if (currentIndex >= images.length){
      currentIndex = 0;
      }
      Array.from(images).forEach(image => image.style.display = "none");
      images[currentIndex].style.display = "block";
  })


  return carousel
}
