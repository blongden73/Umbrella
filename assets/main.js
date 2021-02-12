console.log('running');

function menu(){
  var freelance = document.querySelector('.umbrella_freelance h1');
  var client = document.querySelector('.umbrella_clients h1');
  var menuParent = document.querySelector('.umbrella_menu');
  var body = document.querySelector('body');
  console.log(freelance);
  freelance.addEventListener('click', function(){
    // this.parentNode.classList.toggle('open');
    // menuParent.classList.toggle('open');
    // body.classList.toggle('open');
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

    // if(freelance.parentNode.classList.contains('open')) {
    //   menuParent.classList.add('open');
    //   console.log(freelance, 'FREELANCE')
    //   freelance.parentNode.classList.remove('open');
    //   body.classList.toggle('open');
    // } else {
    //   menuParent.classList.toggle('open');
    //   this.parentNode.classList.toggle('open');
    // }
  });
}menu();



Splitting({
	whitespace: true
})

// var slide = document.querySelector('.how-it-works-slider');
// UIkit.slider(slide);
