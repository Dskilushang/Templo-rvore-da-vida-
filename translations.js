// translations.js
const translations = {
  fr: {
    menu: {
      dashboard: 'Tableau de bord',
      vitrine: 'Vitrine',
      portfolio: 'Portfolio',
      contact: 'Contact',
      departements: 'Départements',
      membres: 'Membres',
      rapports: 'Rapports',
      annonces: 'Annonces',
      parametres: 'Paramètres',
      deconnexion: 'Déconnexion'
    },
    dashboard: {
      title: 'Tableau de bord',
      membres_totaux: 'Membres totaux',
      activites_ce_mois: 'Activités ce mois',
      rapports_en_attente: 'Rapports en attente',
      annonces_actives: 'Annonces actives',
      prochaines_activites: 'Prochaines activités',
      rapports_recents: 'Rapports récents'
    },
    vitrine: {
      title: 'Bienvenue au Templo Árvore da Vida',
      subtitle: 'Un lieu de foi, de partage et de croissance spirituelle sous la direction du Pape Simão Kimbangu Kiangani.',
      valeurs_title: 'Nos valeurs',
      valeurs: ['Amour et compassion', 'Unité et fraternité', 'Service à la communauté']
    },
    portfolio: {
      title: 'Nos réalisations',
      projets: [
        { nom: 'Culte de louange', desc: 'Célébration avec chorale et orchestre' },
        { nom: 'Action sociale', desc: 'Distribution de nourriture aux démunis' },
        { nom: 'Retraite spirituelle', desc: 'Week-end de prière et méditation' },
        { nom: 'Conférence biblique', desc: 'Enseignement sur les prophéties' }
      ]
    },
    contact: {
      title: 'Nous contacter',
      nom: 'Votre nom',
      email: 'Votre email',
      message: 'Message',
      envoyer: 'Envoyer',
      adresse: 'Angola, Bolingo',
      telephone: '+244 999 999 999',
      confirmation: 'Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.'
    },
    departements: { title: 'Liste des départements' },
    membres: { title: 'Tous les membres' },
    rapports: { title: 'Rapports disponibles' },
    annonces: { title: 'Annonces actives' },
    admin: 'Admin'
  },

  pt: {
    menu: {
      dashboard: 'Painel de Controle',
      vitrine: 'Vitrine',
      portfolio: 'Portfólio',
      contact: 'Contato',
      departements: 'Departamentos',
      membres: 'Membros',
      rapports: 'Relatórios',
      annonces: 'Anúncios',
      parametres: 'Configurações',
      deconnexion: 'Sair'
    },
    dashboard: {
      title: 'Painel de Controle',
      membres_totaux: 'Membros totais',
      activites_ce_mois: 'Atividades este mês',
      rapports_en_attente: 'Relatórios pendentes',
      annonces_actives: 'Anúncios ativos',
      prochaines_activites: 'Próximas atividades',
      rapports_recents: 'Relatórios recentes'
    },
    vitrine: {
      title: 'Bem-vindo ao Templo Árvore da Vida',
      subtitle: 'Um lugar de fé, partilha e crescimento espiritual sob a direção do Papa Simão Kimbangu Kiangani.',
      valeurs_title: 'Nossos valores',
      valeurs: ['Amor e compaixão', 'Unidade e fraternidade', 'Serviço à comunidade']
    },
    portfolio: {
      title: 'Nossas realizações',
      projets: [
        { nom: 'Culto de louvor', desc: 'Celebração com coral e orquestra' },
        { nom: 'Ação social', desc: 'Distribuição de alimentos aos necessitados' },
        { nom: 'Retiro espiritual', desc: 'Fim de semana de oração e meditação' },
        { nom: 'Conferência bíblica', desc: 'Ensino sobre as profecias' }
      ]
    },
    contact: {
      title: 'Contate-nos',
      nom: 'Seu nome',
      email: 'Seu email',
      message: 'Mensagem',
      envoyer: 'Enviar',
      adresse: 'Angola, Bolingo',
      telephone: '+244 999 999 999',
      confirmation: 'Sua mensagem foi enviada com sucesso! Responderemos em breve.'
    },
    departements: { title: 'Lista de departamentos' },
    membres: { title: 'Todos os membros' },
    rapports: { title: 'Relatórios disponíveis' },
    annonces: { title: 'Anúncios ativos' },
    admin: 'Admin'
  }
};

let currentLang = 'fr';

function t(key) {
  var keys = key.split('.');
  var result = translations[currentLang];
  for (var i = 0; i < keys.length; i++) {
    if (result && result[keys[i]] !== undefined) {
      result = result[keys[i]];
    } else {
      return key;
    }
  }
  return result;
}

function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    var activePage = document.querySelector('#sidebar nav ul li.active');
    if (activePage) {
      showPage(activePage.dataset.page);
    } else {
      showPage('dashboard');
    }
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].dataset.lang === lang);
    }
  }
        }
