function createStar(x, y, size) {
    var star = $("<div>");
    star.css({
      "position": "absolute",
      "left": x + "px",
      "top": y + "px",
      "width": size + "px",
      "height": size + "px",
      "border-radius": "50%",
      "background-color": "rgba(225, 225, 225, 0.5)",
      "box-shadow": "0 0 10px 1px white",
      "animation": "star 3s infinite"
    });
    return star;
  }
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function placeStars(numStars, container) {
    var containerWidth = $(container).width();
    var containerHeight = $(container).height();
    
    for (var i = 0; i < numStars; i++) {
      var x = random(0, containerWidth);
      var y = random(0, containerHeight);
      var size = random(1, 4);
      var star = createStar(x, y, size);
      $(container).append(star);
    }
  }
  
  placeStars(50, ".stars-container");
/*-----------------------------------------------------*/
/*-----------------------------------------------------*/
/*-----------------------------------------------------*/
let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
  }, 1000);
});