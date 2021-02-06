console.log('running');

function menu(){
  var freelance = document.querySelector('.umbrella_freelance');
  var client = document.querySelector('.umbrella_clients');
  var menuParent = document.querySelector('.umbrella_menu');
  var body = document.querySelector('body');
  console.log(freelance);
  freelance.addEventListener('click', function(){
    this.classList.toggle('open');
    menuParent.classList.toggle('open');
    body.classList.toggle('open');
  });
  client.addEventListener('click', function(){
    this.classList.toggle('open');
    menuParent.classList.toggle('open');
    body.classList.toggle('open');
  });
}menu();

Splitting({
	whitespace: true
})
