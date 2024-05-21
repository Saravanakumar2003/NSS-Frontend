const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

var flipCheck = 0;

function rotateCards() {
  if (flipCheck === 0) {
    document.getElementById("front-2").classList.add("showGreen");
    document.getElementById("back-2").classList.add("showRed");

    document.getElementById("front-1").classList.add("showGreen");
    document.getElementById("back-1").classList.add("showRed");

    flipCheck = 1;

    setTimeout(function () {
      document.getElementById("front-4").classList.add("showGreen");
      document.getElementById("back-4").classList.add("showRed");

      document.getElementById("front-3").classList.add("showGreen");
      document.getElementById("back-3").classList.add("showRed");

      document.getElementById("front-5").classList.add("showGreen");
      document.getElementById("back-5").classList.add("showRed");

      setTimeout(function () {
        document.getElementById("front-6").classList.add("showGreen");
        document.getElementById("back-6").classList.add("showRed");

        document.getElementById("front-7").classList.add("showGreen");
        document.getElementById("back-7").classList.add("showRed");
      }, 500);
    }, 500);
  } else {
    document.getElementById("front-2").classList.remove("showGreen");
    document.getElementById("back-2").classList.remove("showRed");

    document.getElementById("front-1").classList.remove("showGreen");
    document.getElementById("back-1").classList.remove("showRed");

    flipCheck = 0;

    setTimeout(function () {
      document.getElementById("front-3").classList.remove("showGreen");
      document.getElementById("back-3").classList.remove("showRed");

      document.getElementById("front-4").classList.remove("showGreen");
      document.getElementById("back-4").classList.remove("showRed");

      document.getElementById("front-5").classList.remove("showGreen");
      document.getElementById("back-5").classList.remove("showRed");

      setTimeout(function () {
        document.getElementById("front-7").classList.remove("showGreen");
        document.getElementById("back-7").classList.remove("showRed");

        document.getElementById("front-6").classList.remove("showGreen");
        document.getElementById("back-6").classList.remove("showRed");
      }, 500);
    }, 500);
  }
}

setInterval(rotateCards, 3000); // Time in milliseconds
