console.log('running');

function menu(){
  var freelance = document.querySelector('.umbrella_freelance h1');
  var client = document.querySelector('.umbrella_clients h1');
  var menuParent = document.querySelector('.umbrella_menu');
  var body = document.querySelector('body');
  console.log(freelance);
  freelance.addEventListener('click', function(){
    if(!this.parentNode.classList.contains('open') && !client.parentNode.classList.contains('open')) {
      this.parentNode.classList.add('open');
      menuParent.classList.add('open');
      body.classList.add('open');
    } else if(client.parentNode.classList.contains('open')){
      client.parentNode.classList.remove('open');
      this.parentNode.classList.add('open');
      menuParent.classList.add('open');
    } else {
      this.parentNode.classList.remove('open');
      menuParent.classList.remove('open');
      body.classList.remove('open');
    }
  });
  client.addEventListener('click', function(){
    if(!this.parentNode.classList.contains('open') && !freelance.parentNode.classList.contains('open')) {
      this.parentNode.classList.add('open');
      menuParent.classList.add('open');
      body.classList.add('open');
    }else if(freelance.parentNode.classList.contains('open')) {
      freelance.parentNode.classList.remove('open');
      this.parentNode.classList.add('open');
      menuParent.classList.add('open');
    } else {
      this.parentNode.classList.remove('open');
      menuParent.classList.remove('open');
      body.classList.remove('open');
    }
  });
}menu();

function accordian(){
  var workWrapper = document.querySelectorAll('.project_wrapper');

  for(i=0; i<workWrapper.length; i++){
    workWrapper[i].addEventListener('click', function(){
      var expandProject = this.querySelector('.expand-project span');
      console.log(this);
      var accordian = this.nextElementSibling;
      console.log(accordian);
      accordian.classList.toggle('open');
      expandProject.classList.toggle('open');
    });
  }
}accordian();


Splitting({
	whitespace: true
})

// var slide = document.querySelector('.how-it-works-slider');
// UIkit.slider(slide);
