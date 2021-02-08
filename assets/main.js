console.log('running');

function menu(){
  var freelance = document.querySelector('.umbrella_freelance h1');
  var client = document.querySelector('.umbrella_clients h1');
  var menuParent = document.querySelector('.umbrella_menu');
  var body = document.querySelector('body');
  console.log(freelance);
  freelance.addEventListener('click', function(){
    this.parentNode.classList.toggle('open');
    menuParent.classList.toggle('open');
    body.classList.toggle('open');
  });
  client.addEventListener('click', function(){
    this.parentNode.classList.toggle('open');
    menuParent.classList.toggle('open');
    body.classList.toggle('open');
  });
}menu();

Splitting({
	whitespace: true
})

// var slide = document.querySelector('.how-it-works-slider');
// UIkit.slider(slide);
