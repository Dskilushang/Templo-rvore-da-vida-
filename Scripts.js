// ============================================================
// SCRIPT REACT COMPLET - BILINGUE PORTUGAIS / FRANÇAIS
// ============================================================

const { useState, useEffect, useContext, createContext } = React;
const { BrowserRouter, Routes, Route, useNavigate, useLocation } = window.ReactRouterDOM;

// ----- CONTEXTE GLOBAL -----
const AppContext = createContext();

// ----- TRADUCTIONS -----
const TRADUCTIONS = {
    fr: {
        // Général
        'site_title': 'Templo Árvore da Vida ⚡ Église Spirituelle',
        'sous_titre': '☯ Lumière, Amour & Éveil Spirituel ☯',
        'langue_fr': 'FR',
        'langue_pt': 'PT',
        
        // Navigation
        'nav_accueil': 'Accueil',
        'nav_enseignements': 'Enseignements',
        'nav_horaires': 'Horaires',
        'nav_equipe': 'Équipe',
        'nav_galerie': 'Galerie',
        'nav_blog': 'Blog',
        'nav_contact': 'Contact',
        
        // Accueil
        'bienvenue': 'Bienvenue dans la Lumière',
        'bienvenue_desc': 'Le <strong>Templo Árvore da Vida</strong> est un sanctuaire de paix, de méditation et de guérison. Nous célébrons la spiritualité sous toutes ses formes, dans le respect de la Terre et de l\'Être.',
        'btn_rencontrer': 'Venez nous rencontrer',
        'compteur_titre': 'Compteur de Prières',
        'btn_ajouter_priere': 'Ajouter une prière',
        'btn_plus': '+1',
        'compteur_desc': 'Chaque prière est une offrande d\'amour',
        'newsletter_titre': 'Recevez nos inspirations',
        'newsletter_desc': 'Une méditation, un mantra, une pensée positive chaque semaine.',
        'newsletter_placeholder': 'Votre email',
        'newsletter_btn': "S'inscrire",
        'newsletter_abonnes': 'abonnés',
        'newsletter_desinscription': 'Désinscription facile',
        'temoignages_titre': 'Témoignages',
        'temoignages_vide': 'Aucun témoignage pour l\'instant.',
        'btn_ajouter_temoin': 'Ajouter un témoignage',
        'btn_fermer': 'Fermer',
        'temoin_placeholder_nom': 'Votre nom',
        'temoin_placeholder_texte': 'Votre témoignage ...',
        'btn_partager': 'Partager',
        'newsletter_merci': '✅ Merci pour votre inscription !',
        'newsletter_deja': '⚠️ Cet email est déjà inscrit.',
        
        // Enseignements
        'enseignements_titre': 'Nos Enseignements',
        'don_titre': 'Soutenez notre mission',
        'don_desc': 'Vos dons nous aident à maintenir ce lieu de paix et à offrir des soins gratuits à tous.',
        'btn_don': 'Faire un don',
        'btn_paypal': 'PayPal',
        
        // Enseignements - liste
        'ens_meditation': 'Méditation',
        'ens_meditation_desc': 'Séances guidées pour apaiser le mental et retrouver l\'harmonie intérieure.',
        'ens_guerison': 'Guérison énergétique',
        'ens_guerison_desc': 'Pratiques de soin par les énergies, les cristaux et la nature.',
        'ens_etudes': 'Études spirituelles',
        'ens_etudes_desc': 'Cercles de lecture et réflexions sur les textes sacrés.',
        'ens_chant': 'Chant & Mantras',
        'ens_chant_desc': 'Vibrations sonores pour élever la conscience et ouvrir le cœur.',
        'ens_rituels': 'Rituels en nature',
        'ens_rituels_desc': 'Célébrations en plein air, en lien avec les éléments.',
        'ens_communaute': 'Communauté fraternelle',
        'ens_communaute_desc': 'Partage, écoute et soutien mutuel dans un esprit de bienveillance.',
        'ens_reiki': 'Guérison par le Reiki',
        'ens_reiki_desc': 'Séances de Reiki individuelles pour équilibrer vos énergies.',
        'ens_soleil': 'Cérémonies du Soleil',
        'ens_soleil_desc': 'Célébrations spéciales lors des solstices et équinoxes.',
        
        // Horaires
        'horaires_titre': 'Horaires des Célébrations',
        'horaire_mercredi': 'Mercredi – 19h00 : Méditation & chant',
        'horaire_samedi': 'Samedi – 10h00 : Cérémonie spirituelle',
        'horaire_dimanche': 'Dimanche – 17h00 : Guérison & partage',
        'horaire_adresse': '123, Chemin de la Paix, 75000 Paris',
        'btn_details': 'Voir les détails',
        'btn_masquer': 'Masquer',
        'detail_acces': 'Accès libre et gratuit',
        'detail_tenue': 'Tenue confortable recommandée',
        'detail_parking': 'Parking disponible',
        
        // Équipe
        'equipe_titre': 'Notre Équipe Spirituelle',
        'equipe_fondateur': 'Fondateur & Guide Spirituel',
        'equipe_guerisseur': 'Guérisseur Énergétique',
        'equipe_meditation': 'Maître de Méditation',
        'equipe_musique': 'Musicienne & Chanteuse',
        'equipe_jeunes': 'Responsable des Jeunes',
        
        // Galerie
        'galerie_titre': 'Galerie de Notre Temple',
        'galerie_ceremonie': 'Cérémonie du Soleil',
        'galerie_meditation': 'Méditation de Groupe',
        'galerie_nature': 'Rituel en Nature',
        'galerie_chant': 'Cercle de Chant',
        'galerie_reiki': 'Session Reiki',
        'galerie_communaute': 'Communauté Fraternelle',
        
        // Blog
        'blog_titre': 'Articles & Réflexions',
        'blog_article1_titre': 'La Puissance de la Méditation Quotidienne',
        'blog_article1_desc': 'Découvrez comment quelques minutes de méditation par jour peuvent transformer votre vie intérieure.',
        'blog_article2_titre': 'Les 5 Éléments de la Guérison Spirituelle',
        'blog_article2_desc': 'La Terre, l\'Eau, le Feu, l\'Air et l\'Éther - comment harmoniser ces énergies en vous.',
        'blog_article3_titre': 'Le Chemin de la Paix Intérieure',
        'blog_article3_desc': 'Un guide pour trouver la sérénité dans un monde agité.',
        'blog_article4_titre': 'Célébrer les Solstices : Traditions et Rituels',
        'blog_article4_desc': 'Comment honorer les cycles de la nature et de la vie.',
        'btn_lire_plus': 'Lire plus →',
        
        // Contact
        'contact_titre': 'Contactez-nous',
        'contact_telephone': '+33 6 12 34 56 78',
        'contact_email': 'temple@arvoredavida.org',
        'contact_nom': 'Votre nom',
        'contact_email_placeholder': 'Votre email',
        'contact_message': 'Votre message ...',
        'btn_envoyer': 'Envoyer',
        'contact_merci': 'Merci ! Votre message a été envoyé. 🙏',
        'contact_nom_error': 'Nom (min. 2 caractères)',
        'contact_email_error': 'Email invalide',
        'contact_message_error': 'Message (min. 5 caractères)',
        
        // Footer
        'footer_copyright': 'Templo Árvore da Vida — Que la lumière soit en vous.',
        
        // Témoignages existants
        'temoin1': 'J\'ai trouvé la paix intérieure ici 🙏',
        'temoin2': 'Les méditations m\'ont transformé profondément',
        'temoin3': 'Une communauté bienveillante et lumineuse ✨',
    },
    pt: {
        // Général
        'site_title': 'Templo Árvore da Vida ⚡ Igreja Espiritual',
        'sous_titre': '☯ Luz, Amor & Despertar Espiritual ☯',
        'langue_fr': 'FR',
        'langue_pt': 'PT',
        
        // Navigation
        'nav_accueil': 'Início',
        'nav_enseignements': 'Ensinamentos',
        'nav_horaires': 'Horários',
        'nav_equipe': 'Equipe',
        'nav_galerie': 'Galeria',
        'nav_blog': 'Blog',
        'nav_contact': 'Contato',
        
        // Accueil
        'bienvenue': 'Bem-vindo à Luz',
        'bienvenue_desc': 'O <strong>Templo Árvore da Vida</strong> é um santuário de paz, meditação e cura. Celebramos a espiritualidade em todas as suas formas, no respeito à Terra e ao Ser.',
        'btn_rencontrer': 'Venha nos conhecer',
        'compteur_titre': 'Contador de Orações',
        'btn_ajouter_priere': 'Adicionar oração',
        'btn_plus': '+1',
        'compteur_desc': 'Cada oração é uma oferta de amor',
        'newsletter_titre': 'Receba nossas inspirações',
        'newsletter_desc': 'Uma meditação, um mantra, um pensamento positivo toda semana.',
        'newsletter_placeholder': 'Seu email',
        'newsletter_btn': 'Inscrever-se',
        'newsletter_abonnes': 'inscritos',
        'newsletter_desinscription': 'Cancelamento fácil',
        'temoignages_titre': 'Depoimentos',
        'temoignages_vide': 'Nenhum depoimento por enquanto.',
        'btn_ajouter_temoin': 'Adicionar depoimento',
        'btn_fermer': 'Fechar',
        'temoin_placeholder_nom': 'Seu nome',
        'temoin_placeholder_texte': 'Seu depoimento ...',
        'btn_partager': 'Compartilhar',
        'newsletter_merci': '✅ Obrigado pela sua inscrição!',
        'newsletter_deja': '⚠️ Este email já está inscrito.',
        
        // Enseignements
        'enseignements_titre': 'Nossos Ensinamentos',
        'don_titre': 'Apoie nossa missão',
        'don_desc': 'Suas doações nos ajudam a manter este lugar de paz e oferecer cuidados gratuitos a todos.',
        'btn_don': 'Fazer doação',
        'btn_paypal': 'PayPal',
        
        // Enseignements - liste
        'ens_meditation': 'Meditação',
        'ens_meditation_desc': 'Sessões guiadas para acalmar a mente e restaurar a harmonia interior.',
        'ens_guerison': 'Cura Energética',
        'ens_guerison_desc': 'Práticas de cura através de energias, cristais e natureza.',
        'ens_etudes': 'Estudos Espirituais',
        'ens_etudes_desc': 'Círculos de leitura e reflexão sobre textos sagrados.',
        'ens_chant': 'Canto & Mantras',
        'ens_chant_desc': 'Vibrações sonoras para elevar a consciência e abrir o coração.',
        'ens_rituels': 'Rituais na Natureza',
        'ens_rituels_desc': 'Celebrações ao ar livre, em conexão com os elementos.',
        'ens_communaute': 'Comunidade Fraterna',
        'ens_communaute_desc': 'Partilha, escuta e apoio mútuo em um espírito de benevolência.',
        'ens_reiki': 'Cura pelo Reiki',
        'ens_reiki_desc': 'Sessões individuais de Reiki para equilibrar suas energias.',
        'ens_soleil': 'Cerimônias do Sol',
        'ens_soleil_desc': 'Celebrações especiais durante os solstícios e equinócios.',
        
        // Horaires
        'horaires_titre': 'Horários das Celebrações',
        'horaire_mercredi': 'Quarta-feira – 19h00 : Meditação & canto',
        'horaire_samedi': 'Sábado – 10h00 : Cerimônia espiritual',
        'horaire_dimanche': 'Domingo – 17h00 : Cura & partilha',
        'horaire_adresse': '123, Caminho da Paz, 75000 Paris',
        'btn_details': 'Ver detalhes',
        'btn_masquer': 'Ocultar',
        'detail_acces': 'Acesso livre e gratuito',
        'detail_tenue': 'Roupa confortável recomendada',
        'detail_parking': 'Estacionamento disponível',
        
        // Équipe
        'equipe_titre': 'Nossa Equipe Espiritual',
        'equipe_fondateur': 'Fundador & Guia Espiritual',
        'equipe_guerisseur': 'Curador Energético',
        'equipe_meditation': 'Mestre de Meditação',
        'equipe_musique': 'Musicista & Cantora',
        'equipe_jeunes': 'Responsável pelos Jovens',
        
        // Galerie
        'galerie_titre': 'Galeria do Nosso Templo',
        'galerie_ceremonie': 'Cerimônia do Sol',
        'galerie_meditation': 'Meditação em Grupo',
        'galerie_nature': 'Ritual na Natureza',
        'galerie_chant': 'Círculo de Canto',
        'galerie_reiki': 'Sessão de Reiki',
        'galerie_communaute': 'Comunidade Fraterna',
        
        // Blog
        'blog_titre': 'Artigos & Reflexões',
        'blog_article1_titre': 'O Poder da Meditação Diária',
        'blog_article1_desc': 'Descubra como alguns minutos de meditação por dia podem transformar sua vida interior.',
        'blog_article2_titre': 'Os 5 Elementos da Cura Espiritual',
        'blog_article2_desc': 'Terra, Água, Fogo, Ar e Éter - como harmonizar essas energias em você.',
        'blog_article3_titre': 'O Caminho da Paz Interior',
        'blog_article3_desc': 'Um guia para encontrar a serenidade em um mundo agitado.',
        'blog_article4_titre': 'Celebrando os Solstícios: Tradições e Rituais',
        'blog_article4_desc': 'Como honrar os ciclos da natureza e da vida.',
        'btn_lire_plus': 'Ler mais →',
        
        // Contact
        'contact_titre': 'Fale Conosco',
        'contact_telephone': '+33 6 12 34 56 78',
        'contact_email': 'temple@arvoredavida.org',
        'contact_nom': 'Seu nome',
        'contact_email_placeholder': 'Seu email',
        'contact_message': 'Sua mensagem ...',
        'btn_envoyer': 'Enviar',
        'contact_merci': 'Obrigado! Sua mensagem foi enviada. 🙏',
        'contact_nom_error': 'Nome (min. 2 caracteres)',
        'contact_email_error': 'Email inválido',
        'contact_message_error': 'Mensagem (min. 5 caracteres)',
        
        // Footer
        'footer_copyright': 'Templo Árvore da Vida — Que a luz esteja em você.',
        
        // Témoignages existants
        'temoin1': 'Encontrei a paz interior aqui 🙏',
        'temoin2': 'As meditações me transformaram profundamente',
        'temoin3': 'Uma comunidade acolhedora e luminosa ✨',
    }
};

// ============================================================
// COMPOSANT PRINCIPAL
// ============================================================
function App() {
    const [priereCount, setPriereCount] = useState(0);
    const [temoins, setTemoins] = useState([
        { id: 1, auteur: 'Maria S.', texte_key: 'temoin1' },
        { id: 2, auteur: 'Jean P.', texte_key: 'temoin2' },
        { id: 3, auteur: 'Claire D.', texte_key: 'temoin3' },
    ]);
    const [newsletterEmails, setNewsletterEmails] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [langue, setLangue] = useState('fr');

    // Appliquer le mode sombre
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    // Fonction de traduction
    const t = (key) => {
        return TRADUCTIONS[langue][key] || key;
    };

    const ajouterPriere = () => setPriereCount(prev => prev + 1);

    const ajouterTemoin = (auteur, texte) => {
        setTemoins(prev => [...prev, { id: Date.now(), auteur, texte: texte }]);
    };

    const supprimerTemoin = (id) => {
        setTemoins(prev => prev.filter(t => t.id !== id));
    };

    const ajouterNewsletter = (email) => {
        if (email && !newsletterEmails.includes(email)) {
            setNewsletterEmails(prev => [...prev, email]);
            return true;
        }
        return false;
    };

    const contextValue = {
        priereCount,
        ajouterPriere,
        temoins,
        ajouterTemoin,
        supprimerTemoin,
        newsletterEmails,
        ajouterNewsletter,
        darkMode,
        setDarkMode,
        langue,
        setLangue,
        t
    };

    return (
        <AppContext.Provider value={contextValue}>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </AppContext.Provider>
    );
}

// ============================================================
// LAYOUT
// ============================================================
function Layout() {
    const location = useLocation();
    const navigate = useNavigate();
    const { darkMode, setDarkMode, langue, setLangue, t } = useContext(AppContext);

    const navItems = [
        { path: '/', label: t('nav_accueil'), icon: 'fa-home' },
        { path: '/enseignements', label: t('nav_enseignements'), icon: 'fa-feather-alt' },
        { path: '/horaires', label: t('nav_horaires'), icon: 'fa-clock' },
        { path: '/equipe', label: t('nav_equipe'), icon: 'fa-users' },
        { path: '/galerie', label: t('nav_galerie'), icon: 'fa-images' },
        { path: '/blog', label: t('nav_blog'), icon: 'fa-blog' },
        { path: '/contact', label: t('nav_contact'), icon: 'fa-envelope' },
    ];

    const changerLangue = () => {
        setLangue(langue === 'fr' ? 'pt' : 'fr');
    };

    return (
        <>
            {/* HEADER */}
            <header>
                <div className="container">
                    <div className="logo" onClick={() => navigate('/')}>
                        <i className="fas fa-tree"></i> TEMPLO ÁRVORE DA VIDA
                    </div>
                    <div className="sous-titre">{t('sous_titre')}</div>
                    <div className="header-controls">
                        <button className="lang-toggle" onClick={changerLangue}>
                            <i className="fas fa-globe"></i>
                            <span className="active-lang">{langue === 'fr' ? 'FR' : 'PT'}</span>
                            <span style={{ opacity: 0.5 }}>|</span>
                            {langue === 'fr' ? 'PT' : 'FR'}
                        </button>
                        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
                            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                            {darkMode ? (langue === 'fr' ? 'Clair' : 'Claro') : (langue === 'fr' ? 'Sombre' : 'Escuro')}
                        </button>
                    </div>
                </div>
            </header>

            {/* NAVIGATION */}
            <nav>
                {navItems.map(item => (
                    <button
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        className={location.pathname === item.path ? 'active' : ''}
                    >
                        <i className={`fas ${item.icon}`}></i> {item.label}
                    </button>
                ))}
            </nav>

            {/* CONTENU */}
            <main className="container">
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/enseignements" element={<Enseignements />} />
                    <Route path="/horaires" element={<Horaires />} />
                    <Route path="/equipe" element={<Equipe />} />
                    <Route path="/galerie" element={<Galerie />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            {/* FOOTER */}
            <footer>
                <div className="container">
                    <div className="social">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                        <a href="#"><i className="fab fa-tiktok"></i></a>
                    </div>
                    <p style={{ marginTop: '14px', fontSize: '0.9rem' }}>
                        &copy; 2026 {t('footer_copyright')}
                        <i className="fas fa-heart" style={{ color: '#b8946a', marginLeft: '8px' }}></i>
                    </p>
                    <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '4px' }}>
                        <i className="fas fa-envelope"></i> temple@arvoredavida.org &nbsp;|&nbsp;
                        <i className="fas fa-phone-alt"></i> +33 6 12 34 56 78
                    </p>
                </div>
            </footer>
        </>
    );
}

// ============================================================
// PAGE ACCUEIL
// ============================================================
function Accueil() {
    const { priereCount, ajouterPriere, temoins, supprimerTemoin, newsletterEmails, ajouterNewsletter, t } = useContext(AppContext);
    const [nouveauTemoin, setNouveauTemoin] = useState({ auteur: '', texte: '' });
    const [showTemoinForm, setShowTemoinForm] = useState(false);
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterMsg, s
