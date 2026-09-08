// scripts.js - Version Supabase
document.addEventListener('DOMContentLoaded', function() {

  const navItems = document.querySelectorAll('#sidebar nav ul li');
  const contentArea = document.getElementById('content-area');
  const pageTitle = document.getElementById('page-title');

  // Restaurer la langue préférée
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Fonction principale pour afficher une page
  async function showPage(page) {
    var titles = {
      dashboard: 'dashboard.title',
      vitrine: 'vitrine.title',
      portfolio: 'portfolio.title',
      contact: 'contact.title',
      departements: 'departements.title',
      membres: 'membres.title',
      rapports: 'rapports.title',
      annonces: 'annonces.title'
    };
    pageTitle.textContent = t(titles[page]) || page;

    var html = '';
    switch(page) {
      case 'dashboard': html = await renderDashboard(); break;
      case 'vitrine': html = renderVitrine(); break;
      case 'portfolio': html = renderPortfolio(); break;
      case 'contact': html = renderContact(); break;
      case 'departements': html = await renderDepartements(); break;
      case 'membres': html = await renderMembres(); break;
      case 'rapports': html = await renderRapports(); break;
      case 'annonces': html = await renderAnnonces(); break;
      default: html = '<p>Page en construction</p>';
    }
    contentArea.innerHTML = html;
    document.getElementById('admin-label').textContent = t('admin');
  }

  // ---------- DASHBOARD (Supabase) ----------
  async function renderDashboard() {
    try {
      var membresRes = await supabase.from('membres').select('*');
      var activitesRes = await supabase.from('activites').select('*');
      var rapportsRes = await supabase.from('rapports').select('*');
      var annoncesRes = await supabase.from('annonces').select('*');

      var membres = membresRes.data || [];
      var activites = activitesRes.data || [];
      var rapports = rapportsRes.data || [];
      var annonces = annoncesRes.data || [];

      var stats = {
        membresTotaux: membres.length,
        activitesCeMois: activites.length,
        rapportsEnAttente: rapports.length,
        annoncesActives: annonces.length
      };

      return `
        <div class="cards-grid">
          <div class="card"><div class="number">${stats.membresTotaux}</div><div class="label">${t('dashboard.membres_totaux')}</div></div>
          <div class="card"><div class="number">${stats.activitesCeMois}</div><div class="label">${t('dashboard.activites_ce_mois')}</div></div>
          <div class="card"><div class="number">${stats.rapportsEnAttente}</div><div class="label">${t('dashboard.rapports_en_attente')}</div></div>
          <div class="card"><div class="number">${stats.annoncesActives}</div><div class="label">${t('dashboard.annonces_actives')}</div></div>
        </div>
        <div class="section-title">${t('dashboard.prochaines_activites')}</div>
        ${activites.map(function(a) {
          return '<div class="list-item"><span><strong>' + a.jour + '</strong> ' + a.heure + '</span><span>' + a.titre + '</span></div>';
        }).join('')}
        <div class="section-title">${t('dashboard.rapports_recents')}</div>
        ${rapports.map(function(r) {
          return '<div class="list-item"><span>' + r.nom + '</span></div>';
        }).join('')}
      `;
    } catch(error) {
      return '<p>❌ Erreur de chargement: ' + error.message + '</p>';
    }
  }

  // ---------- VITRINE (statique) ----------
  function renderVitrine() {
    var v = translations[currentLang].vitrine;
    return `
      <h2>${v.title}</h2>
      <p style="margin: 20px 0; font-size: 18px;">${v.subtitle}</p>
      <div style="background: white; padding: 20px; border-radius: 12px;">
        <h3>${v.valeurs_title}</h3>
        <ul>${v.valeurs.map(function(val) { return '<li>' + val + '</li>'; }).join('')}</ul>
      </div>
    `;
  }

  // ---------- PORTFOLIO (statique) ----------
  function renderPortfolio() {
    var projets = translations[currentLang].portfolio.projets;
    return `
      <div class="portfolio-grid">
        ${projets.map(function(p) {
          return '<div class="portfolio-item"><i class="fas fa-church"></i><h4>' + p.nom + '</h4><p>' + p.desc + '</p></div>';
        }).join('')}
      </div>
    `;
  }

  // ---------- CONTACT (statique) ----------
  function renderContact() {
    var c = translations[currentLang].contact;
    return `
      <div class="contact-form">
        <h3>${c.title}</h3>
        <form id="contactForm" action="https://formspree.io/f/xkjnqypy" method="POST" onsubmit="return handleContactSubmit(event)">
          <input type="text" name="nom" placeholder="${c.nom}" required>
          <input type="email" name="email" placeholder="${c.email}" required>
          <textarea name="message" rows="4" placeholder="${c.message}" required></textarea>
          <button type="submit">${c.envoyer}</button>
        </form>
        <div id="form-message" style="display:none; margin-top:15px; padding:12px; background:#d4edda; color:#155724; border-radius:6px;">
          ✅ ${c.confirmation || 'Votre message a été envoyé avec succès !'}
        </div>
        <p style="margin-top:15px;"><i class="fas fa-map-marker-alt"></i> ${c.adresse}</p>
        <p><i class="fas fa-phone"></i> ${c.telephone}</p>
      </div>
    `;
  }

  // ---------- DEPARTEMENTS (Supabase) ----------
  async function renderDepartements() {
    try {
      var result = await supabase.from('departements').select('*').order('nom');
      if (result.error) throw result.error;
      return `
        <div class="section-title">${t('departements.title')}</div>
        ${result.data.map(function(d) {
          return '<div class="list-item"><i class="fas fa-users"></i> ' + d.nom + '</div>';
        }).join('')}
      `;
    } catch(error) {
      return '<p>❌ Erreur: ' + error.message + '</p>';
    }
  }

  // ---------- MEMBRES (Supabase) ----------
  async function renderMembres() {
    try {
      var result = await supabase.from('membres').select('*').order('nom');
      if (result.error) throw result.error;
      return `
        <div class="section-title">${t('membres.title')}</div>
        ${result.data.map(function(m) {
          return '<div class="list-item"><span>' + m.nom + '</span> <span style="font-size:14px;color:#777;">' + m.departement + '</span></div>';
        }).join('')}
      `;
    } catch(error) {
      return '<p>❌ Erreur: ' + error.message + '</p>';
    }
  }

  // ---------- RAPPORTS (Supabase) ----------
  async function renderRapports() {
    try {
      var result = await supabase.from('rapports').select('*').order('nom');
      if (result.error) throw result.error;
      return `
        <div class="section-title">${t('rapports.title')}</div>
        ${result.data.map(function(r) {
          return '<div class="list-item"><i class="fas fa-file-pdf"></i> ' + r.nom + '</div>';
        }).join('')}
      `;
    } catch(error) {
      return '<p>❌ Erreur: ' + error.message + '</p>';
    }
  }

  // ---------- ANNONCES (Supabase) ----------
  async function renderAnnonces() {
    try {
      var result = await supabase.from('annonces').select('*').order('created_at', { ascending: false });
      if (result.error) throw result.error;
      return `
        <div class="section-title">${t('annonces.title')}</div>
        ${result.data.map(function(a) {
          return '<div class="list-item"><i class="fas fa-bullhorn"></i> ' + a.titre + '</div>';
        }).join('')}
      `;
    } catch(error) {
      return '<p>❌ Erreur: ' + error.message + '</p>';
    }
  }

  // ---------- FORMULAIRE DE CONTACT ----------
  window.handleContactSubmit = function(event) {
    event.preventDefault();
    var form = document.getElementById('contactForm');
    var messageDiv = document.getElementById('form-message');
    
    if (messageDiv) {
      messageDiv.style.display = 'block';
      messageDiv.textContent = '⏳ Envoi en cours...';
      messageDiv.style.background = '#fff3cd';
      messageDiv.style.color = '#856404';
    }
    
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {
      if (response.ok) {
        if (messageDiv) {
          messageDiv.style.background = '#d4edda';
          messageDiv.style.color = '#155724';
          messageDiv.textContent = '✅ ' + (translations[currentLang].contact.confirmation || 'Votre message a été envoyé avec succès !');
        }
        form.reset();
        setTimeout(function() {
          if (messageDiv) messageDiv.style.display = 'none';
        }, 5000);
      } else {
        throw new Error('Erreur serveur');
      }
    })
    .catch(function() {
      if (messageDiv) {
        messageDiv.style.background = '#f8d7da';
        messageDiv.style.color = '#721c24';
        messageDiv.textContent = '❌ Une erreur est survenue. Veuillez réessayer.';
        messageDiv.style.display = 'block';
      }
    });
    return false;
  };

  // ---------- NAVIGATION ----------
  for (var i = 0; i < navItems.length; i++) {
    (function(index) {
      navItems[index].addEventListener('click', function() {
        for (var j = 0; j < navItems.length; j++) {
          navItems[j].classList.remove('active');
        }
        this.classList.add('active');
        showPage(this.dataset.page);
      });
    })(i);
  }

  // ---------- DECONNEXION ----------
  window.logout = function() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
  };

  var logoutLink = document.querySelector('.bottom-links a:last-child');
  if (logoutLink) {
    logoutLink.addEventListener('click', function(e) {
      e.preventDefault();
      if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
        logout();
      }
    });
  }

  // ---------- PAGE PAR DEFAUT ----------
  showPage('dashboard');
});
