
document.addEventListener("DOMContentLoaded", function modal(){
    // li in Hall of Books
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let third = document.getElementById("third");
  
    // close the modal
    var closeModalFirst = document.getElementsByClassName("close-one")[0];
    var closeModalSecond = document.getElementsByClassName("close-two")[0];
    var closeModalThird = document.getElementsByClassName("close-third")[0];
  
    // modal div 
    var firstModal = document.getElementById("first-modal");
    var secondModal = document.getElementById("second-modal");
    var thirdModal = document.getElementById("third-modal");
  
  
    // first Modal
    first.onclick = function(event) {
        firstModal.style.display = "block";
      }
    closeModalFirst.onclick = function(event) {
      firstModal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === firstModal) {
          firstModal.style.display = "none";
        }
      }
  
    // Second Modal
    second.onclick = function(event) {
      secondModal.style.display = "block";
    }
    closeModalSecond.onclick = function() {
      secondModal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === secondModal) {
          secondModal.style.display = "none";
        }
      }
  
    // Third Modal
    third.onclick = function(event) {
      thirdModal.style.display = "block";
    }
    closeModalThird.onclick = function() {
      thirdModal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === thirdModal) {
          thridModal.style.display = "none";
        }
      }
  });