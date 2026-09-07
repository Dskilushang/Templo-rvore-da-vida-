// translations.js - Fichier de traduction FR/PT
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
      telephone: '+244 999 999 999'
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
      telephone: '+244 999 999 999'
    },
    departements: { title: 'Lista de departamentos' },
    membres: { title: 'Todos os membros' },
    rapports: { title: 'Relatórios disponíveis' },
    annonces: { title: 'Anúncios ativos' },
    admin: 'Admin'
  }
};

// Variable globale pour la langue courante
let currentLang = 'fr';

// Fonction pour obtenir une traduction
function t(key) {
  const keys = key.split('.');
  let result = translations[currentLang];
  for (let k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      return key; // retourne la clé si non trouvée
    }
  }
  return result;
}

// Fonction pour changer la langue
function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Mettre à jour l'interface
    const activePage = document.querySelector('#sidebar nav ul li.active');
    if (activePage) {
      showPage(activePage.dataset.page);
    } else {
      showPage('dashboard');
    }
    
    // Mettre à jour les boutons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }
}

// Restaurer la langue préférée au chargement
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
  }
});
