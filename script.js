/* ==========================================================
   SELAH EXPERTISE — Scripts JavaScript minimaux
   Module 7 : Navigation responsive + Retour en haut
   ========================================================== */

(function () {
  'use strict';

  // ==========================================
  // 1. MENU HAMBURGER (mobile)
  // ==========================================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('nav-menu--open');
      navToggle.classList.toggle('nav-toggle--open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    // Fermer le menu quand on clique sur un lien (mobile)
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('nav-menu--open');
        navToggle.classList.remove('nav-toggle--open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================
  // 2. BOUTON "RETOUR EN HAUT"
  // ==========================================
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    // Afficher / masquer le bouton selon le scroll
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('back-to-top--visible');
      } else {
        backToTopBtn.classList.remove('back-to-top--visible');
      }
    });

    // Remonter en douceur au clic
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // 3. ANIMATIONS D'APPARITION AU SCROLL
  // ==========================================
  // On cible les sections et cartes qui doivent apparaître en fondu
  const animatedElements = document.querySelectorAll(
    '.service-card, .mv-card, .valeur-card, .atout-card, ' +
    '.methode-step, .partenaire-card, .livrable-card, ' +
    '.modalite-card, .formation-card, .channel-card, ' +
    '.faq-item, .section-header'
  );

  // Vérifie si le navigateur supporte IntersectionObserver
  if ('IntersectionObserver' in window && animatedElements.length > 0) {

    // Prépare les éléments : invisibles + légèrement décalés
    animatedElements.forEach(function (el) {
      el.classList.add('fade-in-prep');
    });

    // Observateur : déclenche l'animation quand l'élément entre dans l'écran
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target); // Animation jouée une seule fois
        }
      });
    }, {
      threshold: 0.1,           // déclenche à 10% visible
      rootMargin: '0px 0px -50px 0px'  // 50px avant le bas de l'écran
    });

    // Observe chaque élément
    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ==========================================
  // 4. PRÉ-SÉLECTION DU SUJET (formulaire de contact)
  // ==========================================
  // Permet aux CTA des pages Services/Formations de préremplir
  // le sujet via ?sujet=... (ex: contact.html?sujet=Formation#formulaire)
  // Réappliqué sur "pageshow" car le navigateur restaure parfois
  // les valeurs de formulaire après le chargement (retour/rechargement).
  function preselectionnerSujet() {
    const sujetSelect = document.getElementById('sujet');
    if (!sujetSelect) return;

    const params = new URLSearchParams(window.location.search);
    const sujetVoulu = params.get('sujet');
    if (!sujetVoulu) return;

    const optionExiste = Array.from(sujetSelect.options).some(function (opt) {
      return opt.value === sujetVoulu;
    });
    if (optionExiste) {
      sujetSelect.value = sujetVoulu;
    }
  }

  preselectionnerSujet();
  window.addEventListener('pageshow', preselectionnerSujet);

})();
