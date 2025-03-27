// Objet contenant toutes les traductions
const translations = {
    'fr': {
        'page-title': 'Les 10 Meilleurs Restaurants de Montpellier',
        'page-subtitle': 'Une sélection des meilleures tables selon les avis Google',
        'footer-text': 'Sélection basée sur les avis Google et autres plateformes de restauration',
        'lang-select': 'Choisir la langue',
        
        // Restaurants descriptions
        'rest1-name': 'Les Casseroles en Folie',
        'rest1-cuisine': 'Crêperie',
        'rest1-address': '5 Place de la Chapelle Neuve, 34000 Montpellier',
        'rest1-review': '"Accueil toujours aussi agréable ! Gentillesse, disponibilité, humour, professionnalisme au TOP !!! C\'est LA crêperie de Montpellier !"',
        'rest1-author': '- Via Pages Jaunes',
        
        'rest2-name': 'La Nonna',
        'rest2-cuisine': 'Italien',
        'rest2-address': '5 Rue de Lépante, 34000 Montpellier',
        'rest2-review': '"Un des meilleurs restaurants italiens de Montpellier. Les pâtes sont fraîches et délicieuses, et le service est excellent. Une adresse incontournable pour les amateurs de cuisine italienne authentique."',
        'rest2-author': '- Via Tripadvisor',
        
        'rest3-name': 'Ohana Cafe',
        'rest3-cuisine': 'Café-Restaurant',
        'rest3-address': '15 Rue Four des Flammes, 34000 Montpellier',
        'rest3-review': '"Un lieu chaleureux avec des produits frais et de qualité. Le personnel est adorable et les plats sont préparés avec soin. Un vrai coup de cœur à Montpellier!"',
        'rest3-author': '- Via TheFork',
        
        'rest4-name': 'Terminal #1',
        'rest4-cuisine': 'Fusion',
        'rest4-address': '1 Quai du Pirée, 34000 Montpellier',
        'rest4-review': '"Des plats de qualité, un restaurant bien décoré dans une belle bâtisse. Le personnel est très professionnel, mais dans l\'ambiance décontractée typique de Montpellier. Les plats sont copieux et les saveurs justes, c\'est un régal."',
        'rest4-author': '- Via TheFork',
        
        'rest5-name': 'Anga',
        'rest5-cuisine': 'Gastronomique',
        'rest5-address': '10 Rue Saint-Firmin, 34000 Montpellier',
        'rest5-review': '"La nourriture et le service étaient exceptionnels. C\'était définitivement le meilleur restaurant dans lequel nous avons mangé à Montpellier. Le concept peut ne pas être au goût de tout le monde - on a presque l\'impression d\'aller dîner chez quelqu\'un - mais pour nous, c\'était parfait."',
        'rest5-author': '- Via Tripadvisor',
        
        'rest6-name': 'Le Bistro Urbain',
        'rest6-cuisine': 'Bistrot',
        'rest6-address': '11 Rue du Plan d\'Agde, 34000 Montpellier',
        'rest6-review': '"Une cuisine raffinée, des produits frais et locaux, dans un cadre convivial. Ce bistrot moderne offre une expérience culinaire de qualité avec un excellent rapport qualité-prix."',
        'rest6-author': '- Via Tripadvisor',
        
        'rest7-name': 'Pastis Restaurant',
        'rest7-cuisine': 'Français',
        'rest7-address': '2 Rue de la Fontaine, 34000 Montpellier',
        'rest7-review': '"Le restaurant est impeccablement propre, le service parfait et la nourriture délicieuse. Vous choisissez combien de plats vous voulez et ils vous apportent la nourriture - absolument délicieux."',
        'rest7-author': '- Via Tripadvisor',
        
        'rest8-name': 'La Diligence',
        'rest8-cuisine': 'Gastronomique',
        'rest8-address': '2 Place Pétrarque, 34000 Montpellier',
        'rest8-review': '"Cette excellente adresse montpelliéraine offre une expérience mémorable. Le rapport qualité-prix est très bon dans un cadre d\'exception."',
        'rest8-author': '- Via Gastronomico',
        
        'rest9-name': 'La Manufacture',
        'rest9-cuisine': 'Méditerranéen',
        'rest9-address': '15 Rue des Trésoriers de la Bourse, 34000 Montpellier',
        'rest9-review': '"Une cuisine raffinée aux saveurs méditerranéennes, dans un cadre élégant et contemporain. Les plats sont préparés avec des produits frais et de saison, et le service est attentif et chaleureux."',
        'rest9-author': '- Via TheFork',
        
        'rest10-name': 'Aroma Pizza & Focaccia',
        'rest10-cuisine': 'Italien',
        'rest10-address': '8 Rue du Palais des Guilhem, 34000 Montpellier',
        'rest10-review': '"Les meilleures pizzas de Montpellier ! Pâte fine et croustillante, ingrédients frais et de qualité, une vraie cuisine italienne authentique. Un endroit chaleureux et convivial qui mérite son succès."',
        'rest10-author': '- Via Google'
    },
    'en': {
        'page-title': 'The 10 Best Restaurants in Montpellier',
        'page-subtitle': 'A selection of the best places based on Google reviews',
        'footer-text': 'Selection based on Google reviews and other restaurant platforms',
        'lang-select': 'Choose language',
        
        // Restaurants descriptions
        'rest1-name': 'Les Casseroles en Folie',
        'rest1-cuisine': 'Creperie',
        'rest1-address': '5 Place de la Chapelle Neuve, 34000 Montpellier',
        'rest1-review': '"Always a pleasant welcome! Kindness, availability, humor, TOP professionalism!!! It\'s THE creperie of Montpellier!"',
        'rest1-author': '- Via Pages Jaunes',
        
        'rest2-name': 'La Nonna',
        'rest2-cuisine': 'Italian',
        'rest2-address': '5 Rue de Lépante, 34000 Montpellier',
        'rest2-review': '"One of the best Italian restaurants in Montpellier. The pasta is fresh and delicious, and the service is excellent. A must-visit for lovers of authentic Italian cuisine."',
        'rest2-author': '- Via Tripadvisor',
        
        'rest3-name': 'Ohana Cafe',
        'rest3-cuisine': 'Café-Restaurant',
        'rest3-address': '15 Rue Four des Flammes, 34000 Montpellier',
        'rest3-review': '"A warm place with fresh, quality products. The staff is adorable and the dishes are prepared with care. A real favorite in Montpellier!"',
        'rest3-author': '- Via TheFork',
        
        'rest4-name': 'Terminal #1',
        'rest4-cuisine': 'Fusion',
        'rest4-address': '1 Quai du Pirée, 34000 Montpellier',
        'rest4-review': '"Quality dishes, a well-decorated restaurant in a beautiful building. The staff is very professional, but in the typical relaxed atmosphere of Montpellier. The dishes are hearty and the flavors are spot-on, it\'s a delight."',
        'rest4-author': '- Via TheFork',
        
        'rest5-name': 'Anga',
        'rest5-cuisine': 'Gastronomic',
        'rest5-address': '10 Rue Saint-Firmin, 34000 Montpellier',
        'rest5-review': '"The food and service were exceptional. It was definitely the best restaurant we ate at in Montpellier. The concept may not be to everyone\'s taste - it almost feels like going to someone\'s house for dinner - but for us, it was perfect."',
        'rest5-author': '- Via Tripadvisor',
        
        'rest6-name': 'Le Bistro Urbain',
        'rest6-cuisine': 'Bistro',
        'rest6-address': '11 Rue du Plan d\'Agde, 34000 Montpellier',
        'rest6-review': '"Refined cuisine, fresh and local products, in a friendly setting. This modern bistro offers a quality culinary experience with excellent value for money."',
        'rest6-author': '- Via Tripadvisor',
        
        'rest7-name': 'Pastis Restaurant',
        'rest7-cuisine': 'French',
        'rest7-address': '2 Rue de la Fontaine, 34000 Montpellier',
        'rest7-review': '"The restaurant is spotlessly clean, the service is perfect, and the food is delicious. You choose how many courses you want, and they bring you the food - absolutely delightful."',
        'rest7-author': '- Via Tripadvisor',
        
        'rest8-name': 'La Diligence',
        'rest8-cuisine': 'Gastronomic',
        'rest8-address': '2 Place Pétrarque, 34000 Montpellier',
        'rest8-review': '"This excellent Montpellier address offers a memorable experience. The value for money is very good in an exceptional setting."',
        'rest8-author': '- Via Gastronomico',
        
        'rest9-name': 'La Manufacture',
        'rest9-cuisine': 'Mediterranean',
        'rest9-address': '15 Rue des Trésoriers de la Bourse, 34000 Montpellier',
        'rest9-review': '"Refined cuisine with Mediterranean flavors, in an elegant and contemporary setting. The dishes are prepared with fresh, seasonal products, and the service is attentive and warm."',
        'rest9-author': '- Via TheFork',
        
        'rest10-name': 'Aroma Pizza & Focaccia',
        'rest10-cuisine': 'Italian',
        'rest10-address': '8 Rue du Palais des Guilhem, 34000 Montpellier',
        'rest10-review': '"The best pizzas in Montpellier! Thin and crispy dough, fresh and quality ingredients, authentic Italian cuisine. A warm and friendly place that deserves its success."',
        'rest10-author': '- Via Google'
    },
    'es': {
        'page-title': 'Los 10 Mejores Restaurantes de Montpellier',
        'page-subtitle': 'Una selección de los mejores lugares según las reseñas de Google',
        'footer-text': 'Selección basada en reseñas de Google y otras plataformas de restaurantes',
        'lang-select': 'Elegir idioma',
        
        // Restaurants descriptions
        'rest1-name': 'Les Casseroles en Folie',
        'rest1-cuisine': 'Crepería',
        'rest1-address': '5 Place de la Chapelle Neuve, 34000 Montpellier',
        'rest1-review': '"¡Siempre una bienvenida agradable! ¡Amabilidad, disponibilidad, humor, profesionalidad TOP! ¡¡¡Es LA crepería de Montpellier!!!"',
        'rest1-author': '- Via Pages Jaunes',
        
        'rest2-name': 'La Nonna',
        'rest2-cuisine': 'Italiano',
        'rest2-address': '5 Rue de Lépante, 34000 Montpellier',
        'rest2-review': '"Uno de los mejores restaurantes italianos de Montpellier. La pasta es fresca y deliciosa, y el servicio es excelente. Una visita obligada para los amantes de la auténtica cocina italiana."',
        'rest2-author': '- Via Tripadvisor',
        
        'rest3-name': 'Ohana Cafe',
        'rest3-cuisine': 'Café-Restaurante',
        'rest3-address': '15 Rue Four des Flammes, 34000 Montpellier',
        'rest3-review': '"Un lugar cálido con productos frescos y de calidad. El personal es adorable y los platos están preparados con cuidado. ¡Un verdadero favorito en Montpellier!"',
        'rest3-author': '- Via TheFork',
        
        'rest4-name': 'Terminal #1',
        'rest4-cuisine': 'Fusión',
        'rest4-address': '1 Quai du Pirée, 34000 Montpellier',
        'rest4-review': '"Platos de calidad, un restaurante bien decorado en un hermoso edificio. El personal es muy profesional, pero en el ambiente relajado típico de Montpellier. Los platos son abundantes y los sabores son perfectos, es una delicia."',
        'rest4-author': '- Via TheFork',
        
        'rest5-name': 'Anga',
        'rest5-cuisine': 'Gastronómico',
        'rest5-address': '10 Rue Saint-Firmin, 34000 Montpellier',
        'rest5-review': '"La comida y el servicio fueron excepcionales. Definitivamente fue el mejor restaurante en el que comimos en Montpellier. El concepto puede no ser del gusto de todos - casi se siente como ir a la casa de alguien para cenar - pero para nosotros, fue perfecto."',
        'rest5-author': '- Via Tripadvisor',
        
        'rest6-name': 'Le Bistro Urbain',
        'rest6-cuisine': 'Bistró',
        'rest6-address': '11 Rue du Plan d\'Agde, 34000 Montpellier',
        'rest6-review': '"Cocina refinada, productos frescos y locales, en un ambiente amigable. Este bistró moderno ofrece una experiencia culinaria de calidad con una excelente relación calidad-precio."',
        'rest6-author': '- Via Tripadvisor',
        
        'rest7-name': 'Pastis Restaurant',
        'rest7-cuisine': 'Francés',
        'rest7-address': '2 Rue de la Fontaine, 34000 Montpellier',
        'rest7-review': '"El restaurante está impecablemente limpio, el servicio es perfecto y la comida es deliciosa. Eliges cuántos platos quieres y te traen la comida - absolutamente encantador."',
        'rest7-author': '- Via Tripadvisor',
        
        'rest8-name': 'La Diligence',
        'rest8-cuisine': 'Gastronómico',
        'rest8-address': '2 Place Pétrarque, 34000 Montpellier',
        'rest8-review': '"Esta excelente dirección de Montpellier ofrece una experiencia memorable. La relación calidad-precio es muy buena en un entorno excepcional."',
        'rest8-author': '- Via Gastronomico',
        
        'rest9-name': 'La Manufacture',
        'rest9-cuisine': 'Mediterráneo',
        'rest9-address': '15 Rue des Trésoriers de la Bourse, 34000 Montpellier',
        'rest9-review': '"Cocina refinada con sabores mediterráneos, en un entorno elegante y contemporáneo. Los platos están preparados con productos frescos y de temporada, y el servicio es atento y cálido."',
        'rest9-author': '- Via TheFork',
        
        'rest10-name': 'Aroma Pizza & Focaccia',
        'rest10-cuisine': 'Italiano',
        'rest10-address': '8 Rue du Palais des Guilhem, 34000 Montpellier',
        'rest10-review': '"¡Las mejores pizzas de Montpellier! Masa fina y crujiente, ingredientes frescos y de calidad, auténtica cocina italiana. Un lugar cálido y acogedor que merece su éxito."',
        'rest10-author': '- Via Google'
    }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
    // Enregistrer la préférence de langue
    localStorage.setItem('preferred-language', lang);
    
    // Mise à jour du sélecteur de langue
    document.getElementById('language-selector').value = lang;
    
    // Mise à jour du titre de la page
    document.title = translations[lang]['page-title'];
    
    // Mise à jour des éléments avec l'attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Mise à jour des attributs data-cuisine
    document.querySelectorAll('[data-cuisine-key]').forEach(element => {
        const key = element.getAttribute('data-cuisine-key');
        if (translations[lang][key]) {
            element.setAttribute('data-cuisine', translations[lang][key]);
        }
    });

    // Mise à jour des éléments HTML
    updateRestaurantInfo(lang);
}

// Fonction pour mettre à jour les informations des restaurants
function updateRestaurantInfo(lang) {
    for (let i = 1; i <= 10; i++) {
        const cuisineElement = document.querySelector(`#restaurant${i} .cuisine`);
        if (cuisineElement) {
            cuisineElement.textContent = translations[lang][`rest${i}-cuisine`];
        }
    }
}

// Initialiser la langue au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer la langue préférée du localStorage ou utiliser le français par défaut
    const preferredLanguage = localStorage.getItem('preferred-language') || 'fr';
    
    // Initialiser le sélecteur de langue
    document.getElementById('language-selector').value = preferredLanguage;
    
    // Changer la langue
    changeLanguage(preferredLanguage);
    
    // Ajouter un écouteur d'événement au sélecteur de langue
    document.getElementById('language-selector').addEventListener('change', (event) => {
        changeLanguage(event.target.value);
    });
});