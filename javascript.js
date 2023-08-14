    document.addEventListener("DOMContentLoaded", function () {
    const loadingBarFront = document.querySelector(".loadingBarFront");
    const counter = document.querySelector(".counter");
  
    let width = 0;
    let percent = 0;
  
    function updateLoadingBar() {
      width++;
      percent = Math.min((width / 400) * 100, 100); // 400px, so it will stop when it reaches 100%
      console.log(percent)
      loadingBarFront.style.width = percent + "%";
      counter.textContent = Math.round(percent) + "%";
  
      if (percent < 100) {
        requestAnimationFrame(updateLoadingBar);
      }
    }
  
    updateLoadingBar();
  });
  