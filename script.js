document.addEventListener("DOMContentLoaded", function() {

  var circle = document.getElementById("circle");
  var mouseX = 0, mouseY = 0;

  document.addEventListener("mousemove", function(e){
    mouseX = e.pageX - (circle.offsetWidth / 1);
    mouseY = e.pageY - (circle.offsetHeight / 1); 
  });

  document.addEventListener("scroll", function(e) {
    mouseX = e.pageX - (circle.offsetWidth / 2);
    mouseY = window.scrollY + (window.innerHeight / 2) - (circle.offsetHeight / 2);
  });

  document.querySelectorAll("a, button").forEach(function(link) {
    link.addEventListener("mouseover", function() {
      circle.style.width = "20px";
      circle.style.height = "20px";
    });

    link.addEventListener("mouseout", function() {
      circle.style.width = "45px";
      circle.style.height = "45px";
    });
  });

  setInterval(function(){
    var xp = circle.offsetLeft;
    var yp = circle.offsetTop;
    xp += ((mouseX - xp) / 6);
    yp += ((mouseY - yp) / 6);
    circle.style.left = xp + 'px';
    circle.style.top = yp + 'px';
  }, 20);

  const buttons = document.querySelectorAll('#categories button');
  const projects = document.querySelectorAll('.projet');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Réinitialiser toutes les classes actives
      buttons.forEach(btn => {
        btn.classList.remove('active');
      });

      const filter = button.getAttribute('data-filter');
      button.classList.add('active'); // Ajouter la classe active à la catégorie sélectionnée

      projects.forEach(project => {
        const categories = project.getAttribute('data-categories');
        if (filter === 'all' || categories.includes(filter)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });


  const logoLink = document.querySelector("#logo a");
  // Vérifie si l'élément existe avant d'ajouter l'événement de clic
  if (logoLink) {
    logoLink.addEventListener("click", function(event) {
      event.preventDefault(); // Pour empêcher le comportement par défaut du lien

      // Faites défiler jusqu'à la position (0, 0) de la page avec une animation fluide
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  }



  const burgerMenu = document.getElementById('burger-menu');
  const burgerContent = document.getElementById('burger-content');

  // Fonction pour fermer le menu
  function closeMenu() {
    burgerMenu.classList.remove('active');
    burgerContent.classList.remove('show');
  }
  
  // Fonction pour ouvrir le menu
  function openMenu() {
    burgerMenu.classList.add('active');
    burgerContent.classList.add('show');
  }
  
  // Gestionnaire d'événement pour le bouton du menu burger
  burgerMenu.addEventListener('click', function() {
    if (this.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Gestionnaire d'événement pour chaque lien du menu
  const burgerLinks = burgerContent.getElementsByTagName('a');
  for (let i = 0; i < burgerLinks.length; i++) {
    burgerLinks[i].addEventListener('click', closeMenu);
  }

});
  

  
