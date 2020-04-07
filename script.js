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

    $('.questionForm #submit').click(function(){
        // Get data attribute
        current = $(this).parents('Form:first').data('question');
        next = $(this).parents('Form:first').data('question')+1;
        // Hide all questions
        $('.questionForm').hide();
        // Show next question
        $('#q'+next+'').fadeIn(300);
        process(''+current+'');
        return false;
    });
});

// Process the answers
function process(n){
    // Get input value
    var submitted = $('input[name=q'+n+']:checked').val();
    if(submitted == sessionStorage.getItem('a'+n+'')){
        score = score + point;
    }
  
  if(n == total){
    $('#results').html('<h3>Ditt resultat är: '+score+' av '+highest+'</h3><a href="index.html">Gör quiz igen</a>');
    if(score == highest){
      $('#results').append('<p>Du är framgångsrik!</p>');
    } else if(score == highest - point || score == highest - point - point){
      $('#results').append('<p>Bättre lycka nästa gång!</p>');
    }
  }
  return false;
}

// Add event listener
window.addEventListener('load', init, false);

document.getElementById("myCheck").disabled = true;
