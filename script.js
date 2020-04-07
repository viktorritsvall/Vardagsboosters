document.addEventListener("DOMContentLoaded", function modal(){
  // li in Hall of Books
  let first = document.getElementById("first");
  let second = document.getElementById("second");
  let third = document.getElementById("third");

  // close the modal
  var closeModalFirst = document.getElementsByClassName("close-one")[0];
  var closeModalSecond = document.getElementsByClassName("close-two")[0];
  var closeModalThird = document.getElementsByClassName("close-three")[0];

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



// Quiz
var score = 0; // Set score to 0
var total = 2; // Total number of questions
var point = 1; // Points per correct answer
var highest = total * point;

// Initializer
function init(){
  // Set correct answers
  sessionStorage.setItem('a1', 'c');
  sessionStorage.setItem('a2', 'b');
}

  $(document).ready(function() {
    //Hide all questions
    $('.questionForm').hide();

    //Show first question
    $('#q1').show();

    $('#q1 #submit').click(function(){
      $('.questionForm').hide();
      process('q1');
      $('#q2').fadeIn(300);
      return false;
  });

  $('#q2 #submit').click(function(){
      $('.questionForm').hide();
      process('q2');
      $('#results').fadeIn(300);
      return false;
  });
});

// Process the answers
function process(q){
  if(q == "q1"){
    var submitted = $('input[name=q1]:checked').val();
    if(submitted == sessionStorage.a1){
      score++;
    }
  }
  if(q == "q2"){
    var submitted = $('input[name=q2]:checked').val();
    if(submitted == sessionStorage.a2){
      score++;
    }
    $('#results').html('<h3>Ditt resultat är: '+score+' av 2</h3><a href="index.html">Gör quiz igen</a>');
  }
  return false;
}

// Add event listener
window.addEventListener('load', init, false);

document.getElementById("myCheck").disabled = true;
