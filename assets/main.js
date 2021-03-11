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

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

function onScroll() {
  var elements = document.querySelectorAll('.animation-target');
  var freelance = document.querySelector('.umbrella_freelance');
  var clients = document.querySelector('.umbrella_clients');
  console.log(elements);
  document.addEventListener('scroll', function(){
    for(i=0; i<elements.length; i++){
      if(elementInViewport(elements[i])){
        console.log(elements[i], 'inview');
        elements[i].classList.add('animate');
      }else {
        elements[i].classList.remove('animate');
      }
    }
  });
  freelance.addEventListener('scroll', function(){
    for(i=0; i<elements.length; i++){
      if(elementInViewport(elements[i])){
        console.log(elements[i], 'inview');
        elements[i].classList.add('animate');
      }else {
        elements[i].classList.remove('animate');
      }
    }
  });
  clients.addEventListener('scroll', function(){
    for(i=0; i<elements.length; i++){
      if(elementInViewport(elements[i])){
        console.log(elements[i], 'inview');
        elements[i].classList.add('animate');
      }else {
        elements[i].classList.remove('animate');
      }
    }
  });
}onScroll();


Splitting({
	whitespace: true
})

// var slide = document.querySelector('.how-it-works-slider');
// UIkit.slider(slide);
