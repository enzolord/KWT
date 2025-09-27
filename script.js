        // Menu burger functionality
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');
            
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                
                // Changer l'icône du hamburger
                const icon = hamburger.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
            
            // Fermer le menu quand on clique sur un lien
            const navItems = navLinks.querySelectorAll('a');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                });
            });
            
            // Fermer le menu quand on clique en dehors
            document.addEventListener('click', function(event) {
                if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
                    navLinks.classList.remove('active');
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
   
        // Données des templates
        const templatesData = {
            'template-1': {
                id: 'template-1',
                title: 'BusinessPro',
                category: 'Corporate',
                price: 59,
                oldPrice: 79,
                image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
                preview: '<div style="width: 100%; height: 500px; background: #f5f7fa; display: flex; justify-content: center; align-items: center; border-radius: 10px; border: 1px solid #eee;"><h2 style="color: #4361ee;">Prévisualisation du template BusinessPro</h2></div>'
            },
            'template-2': {
                id: 'template-2',
                title: 'ShopMaster',
                category: 'E-commerce',
                price: 89,
                oldPrice: 109,
                image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
                preview: '<div style="width: 100%; height: 500px; background: #f8f9fa; display: flex; justify-content: center; align-items: center; border-radius: 10px; border: 1px solid #eee;"><h2 style="color: #4361ee;">Prévisualisation du template ShopMaster</h2></div>'
            },
            'template-3': {
                id: 'template-3',
                title: 'CreativeFolio',
                category: 'Portfolio',
                price: 49,
                oldPrice: null,
                image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                preview: '<div style="width: 100%; height: 500px; background: #fff; display: flex; justify-content: center; align-items: center; border-radius: 10px; border: 1px solid #eee;"><h2 style="color: #4361ee;">Prévisualisation du template CreativeFolio</h2></div>'
            },
            'template-4': {
                id: 'template-4',
                title: 'EnterpriseX',
                category: 'Corporate',
                price: 69,
                oldPrice: null,
                image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
                preview: '<div style="width: 100%; height: 500px; background: #f8f9fa; display: flex; justify-content: center; align-items: center; border-radius: 10px; border: 1px solid #eee;"><h2 style="color: #4361ee;">Prévisualisation du template EnterpriseX</h2></div>'
            },
            'template-5': {
                id: 'template-5',
                title: 'MarketPro',
                category: 'E-commerce',
                price: 99,
                oldPrice: 129,
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
                preview: '<div style="width: 100%; height: 500px; background: #fff; display: flex; justify-content: center; align-items: center; border-radius: 10px; border: 1px solid #eee;"><h2 style="color: #4361ee;">Prévisualisation du template MarketPro</h2></div>'
            },
            'template-6': {
                id: 'template-6',
                title: 'ArtisanPort',
                category: 'Portfolio',
                price: 39,
                oldPrice: null,
                image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                preview: '<div style="width: 100%; height: 500px; background: #f5f7fa; display: flex; justify-content: center; align-items: center; border-radius: 10px; border: 1px solid #eee;"><h2 style="color: #4361ee;">Prévisualisation du template ArtisanPort</h2></div>'
            }
        };

        // Données des projets
        const projectsData = {
            'project-1': {
                id: 'project-1',
                title: 'Boutique en ligne FashionStyle',
                category: 'E-commerce',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
                description: 'Plateforme e-commerce complète avec gestion des stocks, paiements sécurisés et interface administrateur.',
                features: [
                    'Design responsive et moderne',
                    'Intégration de paiement sécurisé',
                    'Gestion des stocks en temps réel',
                    'Interface administrateur complète',
                    'Système de promotion et de réductions'
                ],
                technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                liveUrl: 'https://www.example.com',
                client: 'FashionStyle'
            },
            'project-2': {
                id: 'project-2',
                title: 'Site vitrine EntrepriseXYZ',
                category: 'Corporate',
                image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
                description: 'Site institutionnel moderne avec présentation de l\'entreprise, services et portfolio de réalisations.',
                features: [
                    'Design corporate professionnel',
                    'Présentation des services',
                    'Portfolio des réalisations',
                    'Formulaire de contact avancé',
                    'Optimisation SEO complète'
                ],
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
                liveUrl: 'https://www.example.com',
                client: 'EntrepriseXYZ'
            },
            'project-3': {
                id: 'project-3',
                title: 'App DeliveryFast',
                category: 'Application Mobile',
                image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                description: 'Application de livraison rapide avec suivi en temps réel, paiement mobile et système de notation.',
                features: [
                    'Suivi en temps réel des livraisons',
                    'Paiement mobile sécurisé',
                    'Système de notation des livreurs',
                    'Interface utilisateur intuitive',
                    'Notifications push'
                ],
                technologies: ['React Native', 'Firebase', 'Google Maps API'],
                liveUrl: 'https://www.example.com',
                client: 'DeliveryFast'
            },
            'project-4': {
                id: 'project-4',
                title: 'Portfolio Artistique',
                category: 'Portfolio',
                image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
                description: 'Site portfolio élégant pour un artiste avec galerie, biographie et gestion des expositions.',
                features: [
                    'Galerie d\'images responsive',
                    'Gestion des expositions',
                    'Blog intégré',
                    'Formulaire de contact',
                    'Design artistique et unique'
                ],
                technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
                liveUrl: 'https://www.example.com',
                client: 'Artiste Indépendant'
            },
            'project-5': {
                id: 'project-5',
                title: 'Plateforme Artisanale',
                category: 'Marketplace',
                image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
                description: 'Marketplace mettant en relation artisans et clients avec système de commande et de livraison.',
                features: [
                    'Profils artisans et clients',
                    'Système de commande avancé',
                    'Gestion des livraisons',
                    'Système de paiement sécurisé',
                    'Évaluations et commentaires'
                ],
                technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
                liveUrl: 'https://www.example.com',
                client: 'Artisans Associés'
            },
            'project-6': {
                id: 'project-6',
                title: 'Blog Culturel',
                category: 'Blog',
                image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                description: 'Plateforme de blog avec système de gestion de contenu, commentaires et newsletter.',
                features: [
                    'Système de gestion de contenu',
                    'Espace commentaires',
                    'Newsletter intégrée',
                    'Recherche avancée',
                    'Design responsive et accessible'
                ],
                technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
                liveUrl: 'https://www.example.com',
                client: 'Blog Culturel'
            }
        };

 // Gestion du panier
        class Cart {
            constructor() {
                this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
                this.init();
            }
            
            init() {
                this.updateCartIcon();
                this.setupEventListeners();
                this.renderCartItems();
            }
            
            setupEventListeners() {
                // Boutons "Ajouter au panier"
                document.querySelectorAll('.add-to-cart').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const templateCard = e.target.closest('.template-card');
                        this.addToCart(templateCard);
                    });
                });
                
                // Icône du panier
                document.getElementById('cart-icon').addEventListener('click', () => {
                    this.openCart();
                });
                
                // Fermer le panier
                document.getElementById('close-cart').addEventListener('click', () => {
                    this.closeCart();
                });
                
                // Overlay pour fermer le panier
                document.getElementById('cart-overlay').addEventListener('click', () => {
                    this.closeCart();
                });
                
                // Bouton de paiement
                document.getElementById('checkout-btn').addEventListener('click', () => {
                    this.checkout();
                });
                
                // Bouton "Voir plus de templates"
                document.querySelector('.toggle-btn').addEventListener('click', (e) => {
                    const targetId = e.target.getAttribute('data-target');
                    const targetSection = document.getElementById(targetId);
                    targetSection.classList.toggle('active');
                    
                    // Changer l'icône
                    const icon = e.target.querySelector('i');
                    if (targetSection.classList.contains('active')) {
                        icon.className = 'fas fa-chevron-up';
                        e.target.innerHTML = 'Voir moins de templates <i class="fas fa-chevron-up"></i>';
                    } else {
                        icon.className = 'fas fa-chevron-down';
                        e.target.innerHTML = 'Voir plus de templates <i class="fas fa-chevron-down"></i>';
                    }
                });
                
                // Filtrage des templates
                document.querySelectorAll('.filter-btn').forEach(button => {
                    button.addEventListener('click', (e) => {
                        // Retirer la classe active de tous les boutons
                        document.querySelectorAll('.filter-btn').forEach(btn => {
                            btn.classList.remove('active');
                        });
                        
                        // Ajouter la classe active au bouton cliqué
                        e.target.classList.add('active');
                        
                        // Filtrer les templates
                        this.filterTemplates(e.target.getAttribute('data-filter'));
                    });
                });
            }
            
            addToCart(templateCard) {
                const id = templateCard.getAttribute('data-id');
                const name = templateCard.querySelector('.template-title').textContent;
                const category = templateCard.querySelector('.template-category').textContent;
                const priceText = templateCard.querySelector('.template-price').textContent;
                const price = this.extractPrice(priceText);
                const image = templateCard.querySelector('img').src;
                
                // Vérifier si l'article est déjà dans le panier
                const existingItem = this.items.find(item => item.id === id);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    this.items.push({
                        id,
                        name,
                        category,
                        price,
                        image,
                        quantity: 1
                    });
                }
                
                // Sauvegarder dans le localStorage
                this.saveToLocalStorage();
                
                // Mettre à jour l'interface
                this.updateCartIcon();
                this.renderCartItems();
                this.showNotification(`${name} a été ajouté au panier`);
                
                // Animation sur l'icône du panier
                document.getElementById('cart-icon').classList.add('cart-animation');
                setTimeout(() => {
                    document.getElementById('cart-icon').classList.remove('cart-animation');
                }, 500);
            }
            
            extractPrice(priceText) {
                // Extraire le premier nombre (le prix actuel)
                const match = priceText.match(/\$(\d+)/);
                return match ? parseInt(match[1]) : 0;
            }
            
            removeFromCart(id) {
                this.items = this.items.filter(item => item.id !== id);
                this.saveToLocalStorage();
                this.updateCartIcon();
                this.renderCartItems();
            }
            
            updateQuantity(id, newQuantity) {
                if (newQuantity <= 0) {
                    this.removeFromCart(id);
                    return;
                }
                
                const item = this.items.find(item => item.id === id);
                if (item) {
                    item.quantity = newQuantity;
                    this.saveToLocalStorage();
                    this.updateCartIcon();
                    this.renderCartItems();
                }
            }
            
            saveToLocalStorage() {
                localStorage.setItem('cartItems', JSON.stringify(this.items));
            }
            
            updateCartIcon() {
                const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
                document.getElementById('cart-count').textContent = totalItems;
            }
            
            openCart() {
                document.getElementById('cart-panel').classList.add('open');
                document.getElementById('cart-overlay').classList.add('active');
            }
            
            closeCart() {
                document.getElementById('cart-panel').classList.remove('open');
                document.getElementById('cart-overlay').classList.remove('active');
            }
            
            renderCartItems() {
                const cartItemsContainer = document.getElementById('cart-items');
                
                if (this.items.length === 0) {
                    cartItemsContainer.innerHTML = `
                        <div class="empty-cart">
                            <i class="fas fa-shopping-cart"></i>
                            <p>Votre panier est vide</p>
                        </div>
                    `;
                    document.getElementById('cart-total-price').textContent = '$0';
                    return;
                }
                
                let itemsHTML = '';
                let total = 0;
                
                this.items.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;
                    
                    itemsHTML += `
                        <div class="cart-item">
                            <div class="cart-item-image">
                                <img src="${item.image}" alt="${item.name}">
                            </div>
                            <div class="cart-item-details">
                                <div class="cart-item-name">${item.name}</div>
                                <div class="cart-item-category">${item.category}</div>
                                <div class="cart-item-price">$${item.price}</div>
                                <div class="cart-item-actions">
                                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                                    <span class="item-quantity">${item.quantity}</span>
                                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                                    <button class="remove-item" data-id="${item.id}">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                });
                
                cartItemsContainer.innerHTML = itemsHTML;
                document.getElementById('cart-total-price').textContent = `$${total}`;
                
                // Ajouter les écouteurs d'événements pour les nouveaux boutons
                document.querySelectorAll('.decrease').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const id = e.target.getAttribute('data-id');
                        const item = this.items.find(item => item.id === id);
                        this.updateQuantity(id, item.quantity - 1);
                    });
                });
                
                document.querySelectorAll('.increase').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const id = e.target.getAttribute('data-id');
                        const item = this.items.find(item => item.id === id);
                        this.updateQuantity(id, item.quantity + 1);
                    });
                });
                
                document.querySelectorAll('.remove-item').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const id = e.target.closest('.remove-item').getAttribute('data-id');
                        this.removeFromCart(id);
                    });
                });
            }
            
            showNotification(message) {
                const notification = document.getElementById('cart-notification');
                const notificationText = document.getElementById('notification-text');
                
                notificationText.textContent = message;
                notification.classList.add('show');
                
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 3000);
            }
            
            checkout() {
                if (this.items.length === 0) {
                    this.showNotification('Votre panier est vide');
                    return;
                }
                
                // Simuler un processus de paiement
                this.showNotification('Redirection vers le paiement...');
                
                // Ici, vous intégreriez votre système de paiement réel
                setTimeout(() => {
                    // Vider le panier après un "paiement réussi"
                    this.items = [];
                    this.saveToLocalStorage();
                    this.updateCartIcon();
                    this.renderCartItems();
                    this.closeCart();
                    this.showNotification('Paiement effectué avec succès!');
                }, 2000);
            }
            
            filterTemplates(filter) {
                const templates = document.querySelectorAll('.template-card');
                
                templates.forEach(template => {
                    if (filter === 'all' || template.getAttribute('data-category').includes(filter)) {
                        template.style.display = 'block';
                    } else {
                        template.style.display = 'none';
                    }
                });
            }
        }
        
        // Initialiser le panier lorsque la page est chargée
        document.addEventListener('DOMContentLoaded', () => {
            new Cart();
        });
// Gestionnaire d'événement pour les templates
function setupTemplateEventHandlers() {
    // Gestionnaire pour les templates existants
    document.querySelectorAll('.template-card .add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const templateCard = this.closest('.template-card');
            if (templateCard) {
                addTemplateToCart(templateCard);
            }
        });
    });

    // Gestionnaire délégué pour les templates ajoutés dynamiquement
    document.addEventListener('click', function(e) {
        if (e.target.closest('.template-card .add-to-cart')) {
            e.preventDefault();
            e.stopPropagation();
            
            const button = e.target.closest('.template-card .add-to-cart');
            const templateCard = button.closest('.template-card');
            if (templateCard) {
                addTemplateToCart(templateCard);
            }
        }
    });
}
// Script pour la prévisualisation des templates
class TemplatePreview {
    constructor() {
        this.previewModal = null;
        this.currentTemplate = null;
        this.init();
    }
    
    init() {
        this.createPreviewModal();
        this.setupEventListeners();
    }
    
    createPreviewModal() {
        // Création de la modale de prévisualisation
        this.previewModal = document.createElement('div');
        this.previewModal.className = 'template-preview-modal';
        this.previewModal.innerHTML = `
            <div class="preview-overlay" id="preview-overlay"></div>
            <div class="preview-container">
                <div class="preview-header">
                    <h3 class="preview-title">Aperçu du Template</h3>
                    <button class="close-preview" id="close-preview">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="preview-content">
                    <div class="preview-image-container">
                        <img class="preview-image" src="" alt="Preview Template">
                        <div class="preview-actions">
                            <button class="btn btn-primary preview-buy-btn">
                                <i class="fas fa-shopping-cart"></i> Acheter maintenant
                            </button>
                            <button class="btn btn-secondary preview-demo-btn">
                                <i class="fas fa-external-link-alt"></i> Voir la démo
                            </button>
                        </div>
                    </div>
                    <div class="preview-details">
                        <div class="preview-badge-container"></div>
                        <span class="preview-category"></span>
                        <h2 class="preview-template-name"></h2>
                        <p class="preview-description"></p>
                        
                        <div class="preview-features">
                            <h4>Fonctionnalités incluses :</h4>
                            <ul class="features-list"></ul>
                        </div>
                        
                        <div class="preview-specs">
                            <div class="spec-item">
                                <i class="fas fa-layer-group"></i>
                                <span>Pages : <strong class="pages-count">5</strong></span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-mobile-alt"></i>
                                <span>Responsive : <strong>Oui</strong></span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-file-code"></i>
                                <span>Format : <strong>HTML/CSS/JS</strong></span>
                            </div>
                            <div class="spec-item">
                                <i class="fas fa-download"></i>
                                <span>Taille : <strong>2.5 MB</strong></span>
                            </div>
                        </div>
                        
                        <div class="preview-price-section">
                            <div class="price-container">
                                <span class="preview-price"></span>
                                <small class="preview-old-price"></small>
                            </div>
                            <div class="preview-discount"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(this.previewModal);
        this.addPreviewStyles();
    }
    
    addPreviewStyles() {
        const styles = `
            <style>
                .template-preview-modal {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2000;
                }
                
                .template-preview-modal.active {
                    display: block;
                }
                
                .preview-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(5px);
                }
                
                .preview-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 90%;
                    max-width: 1200px;
                    max-height: 90vh;
                    background: white;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
                    display: flex;
                    flex-direction: column;
                }
                
                .preview-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem 2rem;
                    background: linear-gradient(90deg, var(--primary), var(--secondary));
                    color: white;
                }
                
                .preview-title {
                    margin: 0;
                    font-size: 1.5rem;
                }
                
                .close-preview {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: var(--transition);
                }
                
                .close-preview:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: rotate(90deg);
                }
                
                .preview-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    flex: 1;
                    overflow-y: auto;
                }
                
                .preview-image-container {
                    position: relative;
                    background: #f8f9fa;
                    display: flex;
                    flex-direction: column;
                }
                
                .preview-image {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                    flex: 1;
                }
                
                .preview-actions {
                    padding: 1.5rem;
                    display: flex;
                    gap: 1rem;
                    background: white;
                    border-top: 1px solid #eee;
                }
                
                .preview-actions .btn {
                    flex: 1;
                    justify-content: center;
                }
                
                .preview-details {
                    padding: 2rem;
                    overflow-y: auto;
                }
                
                .preview-badge-container {
                    margin-bottom: 1rem;
                }
                
                .preview-badge {
                    display: inline-block;
                    padding: 0.4rem 1rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin-right: 0.5rem;
                }
                
                .preview-badge.new {
                    background: var(--accent);
                    color: white;
                }
                
                .preview-badge.popular {
                    background: var(--warning);
                    color: white;
                }
                
                .preview-badge.sale {
                    background: var(--danger);
                    color: white;
                }
                
                .preview-category {
                    display: inline-block;
                    background: rgba(67, 97, 238, 0.1);
                    color: var(--primary);
                    padding: 0.3rem 0.8rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }
                
                .preview-template-name {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    color: var(--dark);
                }
                
                .preview-description {
                    color: var(--gray);
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }
                
                .preview-features {
                    margin-bottom: 2rem;
                }
                
                .preview-features h4 {
                    margin-bottom: 1rem;
                    color: var(--dark);
                }
                
                .features-list {
                    list-style: none;
                    padding: 0;
                }
                
                .features-list li {
                    padding: 0.5rem 0;
                    border-bottom: 1px solid #eee;
                    display: flex;
                    align-items: center;
                }
                
                .features-list li:before {
                    content: "✓";
                    color: var(--success);
                    font-weight: bold;
                    margin-right: 0.5rem;
                }
                
                .preview-specs {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    padding: 1rem;
                    background: #f8f9fa;
                    border-radius: 10px;
                }
                
                .spec-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--gray);
                }
                
                .spec-item i {
                    color: var(--primary);
                    width: 20px;
                }
                
                .preview-price-section {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem;
                    background: linear-gradient(135deg, rgba(67, 97, 238, 0.05) 0%, rgba(247, 37, 133, 0.05) 100%);
                    border-radius: 10px;
                }
                
                .price-container {
                    display: flex;
                    align-items: baseline;
                    gap: 0.5rem;
                }
                
                .preview-price {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--primary);
                }
                
                .preview-old-price {
                    font-size: 1.2rem;
                    color: var(--gray);
                    text-decoration: line-through;
                }
                
                .preview-discount {
                    background: var(--accent);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-weight: 600;
                }
                
                @media (max-width: 968px) {
                    .preview-content {
                        grid-template-columns: 1fr;
                    }
                    
                    .preview-image {
                        height: 300px;
                    }
                    
                    .preview-actions {
                        flex-direction: column;
                    }
                }
                
                @media (max-width: 768px) {
                    .preview-container {
                        width: 95%;
                        height: 95vh;
                    }
                    
                    .preview-specs {
                        grid-template-columns: 1fr;
                    }
                    
                    .preview-price-section {
                        flex-direction: column;
                        gap: 1rem;
                        text-align: center;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }
    
    setupEventListeners() {
        // Événements pour les boutons de prévisualisation
        document.addEventListener('click', (e) => {
            if (e.target.closest('.preview-template')) {
                const templateCard = e.target.closest('.template-card');
                this.showPreview(templateCard);
            }
        });
        
        // Fermeture de la prévisualisation
        document.getElementById('close-preview').addEventListener('click', () => {
            this.hidePreview();
        });
        
        document.getElementById('preview-overlay').addEventListener('click', () => {
            this.hidePreview();
        });
        
        // Bouton d'achat dans la prévisualisation
        document.querySelector('.preview-buy-btn').addEventListener('click', () => {
            if (this.currentTemplate) {
                this.addToCartFromPreview();
            }
        });
        
        // Bouton démo (simulation)
        document.querySelector('.preview-demo-btn').addEventListener('click', () => {
            this.showDemoAlert();
        });
        
        // Fermeture avec la touche Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.previewModal.classList.contains('active')) {
                this.hidePreview();
            }
        });
    }
    
    showPreview(templateCard) {
        this.currentTemplate = templateCard;
        const templateData = this.extractTemplateData(templateCard);
        
        this.populatePreviewModal(templateData);
        this.previewModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Empêche le défilement
    }
    
    hidePreview() {
        this.previewModal.classList.remove('active');
        document.body.style.overflow = ''; // Rétablit le défilement
        this.currentTemplate = null;
    }
    
    extractTemplateData(templateCard) {
        const id = templateCard.getAttribute('data-id');
        const name = templateCard.querySelector('.template-title').textContent;
        const category = templateCard.querySelector('.template-category').textContent;
        const description = templateCard.querySelector('.template-description').textContent;
        const priceText = templateCard.querySelector('.template-price').textContent;
        const image = templateCard.querySelector('img').src;
        const badge = templateCard.querySelector('.template-badge');
        
        // Extraction du prix
        const priceMatch = priceText.match(/\$(\d+)/);
        const oldPriceMatch = priceText.match(/\$(\d+)\s*<small>\$(\d+)<\/small>/);
        
        const price = priceMatch ? parseInt(priceMatch[1]) : 0;
        const oldPrice = oldPriceMatch ? parseInt(oldPriceMatch[2]) : null;
        
        // Détermination du type de badge
        let badgeType = '';
        let badgeText = '';
        if (badge) {
            badgeText = badge.textContent;
            if (badgeText.includes('Nouveau') || badgeText.includes('New')) {
                badgeType = 'new';
            } else if (badgeText.includes('Best-seller') || badgeText.includes('Popular')) {
                badgeType = 'popular';
            } else if (badgeText.includes('Promo') || badgeText.includes('Sale')) {
                badgeType = 'sale';
            }
        }
        
        return {
            id,
            name,
            category,
            description,
            price,
            oldPrice,
            image,
            badge: { type: badgeType, text: badgeText }
        };
    }
    
    populatePreviewModal(data) {
        // Image
        document.querySelector('.preview-image').src = data.image;
        
        // Badge
        const badgeContainer = document.querySelector('.preview-badge-container');
        badgeContainer.innerHTML = '';
        if (data.badge.text) {
            badgeContainer.innerHTML = `<span class="preview-badge ${data.badge.type}">${data.badge.text}</span>`;
        }
        
        // Catégorie
        document.querySelector('.preview-category').textContent = data.category;
        
        // Nom
        document.querySelector('.preview-template-name').textContent = data.name;
        
        // Description
        document.querySelector('.preview-description').textContent = data.description;
        
        // Fonctionnalités (générées dynamiquement selon le template)
        this.generateFeaturesList(data);
        
        // Prix
        const priceElement = document.querySelector('.preview-price');
        const oldPriceElement = document.querySelector('.preview-old-price');
        const discountElement = document.querySelector('.preview-discount');
        
        priceElement.textContent = `$${data.price}`;
        
        if (data.oldPrice) {
            oldPriceElement.textContent = `$${data.oldPrice}`;
            oldPriceElement.style.display = 'inline';
            
            const discount = Math.round(((data.oldPrice - data.price) / data.oldPrice) * 100);
            discountElement.textContent = `-${discount}%`;
            discountElement.style.display = 'block';
        } else {
            oldPriceElement.style.display = 'none';
            discountElement.style.display = 'none';
        }
    }
    
    generateFeaturesList(data) {
        const featuresList = document.querySelector('.features-list');
        featuresList.innerHTML = '';
        
        // Fonctionnalités basées sur la catégorie du template
        const features = this.getTemplateFeatures(data);
        
        features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }
    
    getTemplateFeatures(data) {
        // Retourne des fonctionnalités spécifiques selon la catégorie
        const baseFeatures = [
            'Design responsive et moderne',
            'Code propre et bien commenté',
            'Compatibilité cross-browser',
            'Facile à personnaliser',
            'Documentation incluse'
        ];
        
        const categoryFeatures = {
            'corporate': [
                'Sections services, équipe, contact',
                'Formulaire de contact fonctionnel',
                'Optimisé pour le référencement',
                'Intégration réseaux sociaux'
            ],
            'ecommerce': [
                'Page produit détaillée',
                'Panier d\'achat fonctionnel',
                'Système de filtrage',
                'Intégration paiement'
            ],
            'portfolio': [
                'Galerie d\'images optimisée',
                'Layout créatif et unique',
                'Animations fluides',
                'Optimisé pour les créatifs'
            ]
        };
        
        const specificFeatures = categoryFeatures[data.category.toLowerCase()] || [
            'Layout adaptable',
            'Design professionnel',
            'Performance optimisée'
        ];
        
        return [...baseFeatures, ...specificFeatures];
    }
    
    addToCartFromPreview() {
        if (!this.currentTemplate) return;
        
        // Simuler l'ajout au panier
        const addToCartBtn = this.currentTemplate.querySelector('.add-to-cart');
        addToCartBtn.click();
        
        // Feedback visuel
        const buyBtn = document.querySelector('.preview-buy-btn');
        const originalText = buyBtn.innerHTML;
        buyBtn.innerHTML = '<i class="fas fa-check"></i> Ajouté au panier!';
        buyBtn.style.background = 'var(--success)';
        
        setTimeout(() => {
            buyBtn.innerHTML = originalText;
            buyBtn.style.background = '';
        }, 2000);
    }
    
    showDemoAlert() {
        alert('Fonctionnalité démo - En développement\n\nCette fonctionnalité permettra de visualiser une démo live du template.');
    }
}

// Intégration avec le système de panier existant
class EnhancedCart extends Cart {
    constructor() {
        super();
        this.templatePreview = new TemplatePreview();
    }
    
    setupEventListeners() {
        super.setupEventListeners();
        
        // Surcharge pour gérer aussi les prévisualisations
        document.querySelectorAll('.preview-template').forEach(button => {
            button.addEventListener('click', (e) => {
                const templateCard = e.target.closest('.template-card');
                this.templatePreview.showPreview(templateCard);
            });
        });
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Remplacer Cart par EnhancedCart pour avoir les deux fonctionnalités
    new EnhancedCart();
});

// Alternative : Si vous voulez garder Cart tel quel
document.addEventListener('DOMContentLoaded', () => {
    new Cart();
    new TemplatePreview(); // Initialiser séparément
});
// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    cleanInvalidCartItems();
    updateCartCount();
    setupTemplateEventHandlers();
});

// Gestion de la touche Echap pour fermer le panier
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cartModal.classList.contains('active')) {
        cartModal.classList.remove('active');
    }
});

        document.querySelector('.close-cart').addEventListener('click', function() {
            cartModal.classList.remove('active');
        });

        // Gestion des sections cachées
        document.querySelectorAll('.toggle-btn').forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                const targetSection = document.getElementById(targetId);
                const icon = button.querySelector('i');
                
                button.classList.toggle('active');
                targetSection.classList.toggle('active');
                
                if (targetSection.classList.contains('active')) {
                    setTimeout(() => {
                        targetSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                }
            });
        });
        
        // Filtrage des templates
        const filterButtons = document.querySelectorAll('.filter-btn');
        const templateCards = document.querySelectorAll('.template-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                templateCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Témoignages slider
        const track = document.querySelector('.testimonials-track');
        const dots = document.querySelectorAll('.testimonial-dot');
        let currentSlide = 0;
        
        function goToSlide(index) {
            track.style.transform = `translateX(-${index * 100}%)`;
            
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
            
            currentSlide = index;
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });
        
        setInterval(() => {
            currentSlide = (currentSlide + 1) % dots.length;
            goToSlide(currentSlide);
        }, 5000);
        
        // FAQ accordéon
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                item.classList.toggle('active');
            });
        });
        
        // Navigation mobile
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navActions = document.querySelector('.nav-actions');
        
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navActions.style.display = navActions.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Fermer le menu mobile quand un lien est cliqué
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                    navActions.style.display = 'none';
                }
            });
        });
        
        // Smooth scrolling pour les ancres
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Animation de la navbar au scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav-container');
            if (window.scrollY > 50) {
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                nav.style.boxShadow = 'none';
            }
        });

        // Ajouter au panier
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const templateCard = this.closest('.template-card');
                const templateId = templateCard.getAttribute('data-id');
                
                const alreadyInCart = cart.some(item => item.id === templateId);
                
                if (!alreadyInCart) {
                    cart.push({ id: templateId });
                    updateCartCount();
                    renderCart();
                    
                    cartIcon.classList.add('cart-animate');
                    setTimeout(() => {
                        cartIcon.classList.remove('cart-animate');
                    }, 500);
                } else {
                    alert('Ce template est déjà dans votre panier');
                }
            });
        });

        // Prévisualisation du template
        document.querySelectorAll('.preview-template').forEach(button => {
            button.addEventListener('click', function() {
                const templateCard = this.closest('.template-card');
                const templateId = templateCard.getAttribute('data-id');
                const template = templatesData[templateId];
                
                document.getElementById('template-display').innerHTML = template.preview;
                document.querySelector('.template-viewer').classList.add('active');
            });
        });

        // Fermer le viewer
        document.querySelector('.close-viewer').addEventListener('click', function() {
            document.querySelector('.template-viewer').classList.remove('active');
        });

        // Voir les détails d'un projet
        document.querySelectorAll('.view-project').forEach(button => {
            button.addEventListener('click', function() {
                const projectCard = this.closest('.project-card');
                const projectId = projectCard.getAttribute('data-id');
                const project = projectsData[projectId];
                
                const projectModal = document.getElementById('project-modal');
                const projectModalTitle = document.getElementById('project-modal-title');
                const projectModalContent = document.getElementById('project-modal-content');
                
                projectModalTitle.textContent = project.title;
                
                projectModalContent.innerHTML = `
                    <div class="project-modal-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-modal-details">
                        <h3>À propos du projet</h3>
                        <p>${project.description}</p>
                        
                        <div class="project-modal-features">
                            <h4>Fonctionnalités</h4>
                            ${project.features.map(feature => `
                                <div class="project-modal-feature">
                                    <i class="fas fa-check"></i> ${feature}
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="project-modal-features">
                            <h4>Technologies utilisées</h4>
                            ${project.technologies.map(tech => `
                                <div class="project-modal-feature">
                                    <i class="fas fa-cog"></i> ${tech}
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="project-modal-actions">
                            <a href="${project.liveUrl}" target="_blank" class="btn btn-primary">
                                <i class="fas fa-external-link-alt"></i> Voir le site
                            </a>
                            <button class="btn btn-secondary close-project-modal">
                                <i class="fas fa-times"></i> Fermer
                            </button>
                        </div>
                    </div>
                `;
                
                projectModal.classList.add('active');gj


                
                // Ajouter le gestionnaire d'événements pour le bouton de fermeture
                document.querySelector('.close-project-modal').addEventListener('click', function() {
                    projectModal.classList.remove('active');
                });
            });
        });

        // Fermer la modal de projet
        document.querySelector('.close-project-modal').addEventListener('click', function() {
            document.getElementById('project-modal').classList.remove('active');
        });


// Taux de conversion Euro vers CFA (pour référence, mais nous utilisons directement les prix CFA)
const EURO_TO_CFA = 655;

// Données des forfaits en CFA uniquement
const planData = {
    starter: {
        title: "Starter",
        monthly: 65000, // 99€ ≈ 65,000 FCFA
        yearly: 622000, // 950€ ≈ 622,000 FCFA (économies d'environ 15%)
        features: [
            "5h de développement",
            "Support par email",
            "1 correction mineure",
            "Accès aux mises à jour basiques"
        ]
    },
    pro: {
        title: "Pro",
        monthly: 196000, // 299€ ≈ 196,000 FCFA
        yearly: 1880000, // 2870€ ≈ 1,880,000 FCFA (économies d'environ 20%)
        features: [
            "20h de développement",
            "Support prioritaire",
            "3 corrections mensuelles",
            "Maintenance basique incluse",
            "Accès aux nouvelles fonctionnalités"
        ]
    },
    enterprise: {
        title: "Enterprise",
        monthly: 392000, // 599€ ≈ 392,000 FCFA
        yearly: 3760000, // 5750€ ≈ 3,760,000 FCFA (économies d'environ 20%)
        features: [
            "50h de développement",
            "Support dédié 24/7",
            "Corrections illimitées",
            "Maintenance complète",
            "Accès premium à toutes les fonctionnalités",
            "Consulting stratégique inclus"
        ]
    }
};

// Éléments DOM
const pricingToggle = document.getElementById('pricing-toggle');
const priceAmounts = document.querySelectorAll('.price-amount');
const pricePeriods = document.querySelectorAll('.price-period');
const choosePlanButtons = document.querySelectorAll('.choose-plan');
const planOverlay = document.getElementById('plan-selection-overlay');

// Formatage des nombres avec séparateurs de milliers
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR').format(price);
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    updatePrices();
    setupEventListeners();
    // Mettre à jour les symboles de devise
    updateCurrencySymbols();
});

// Mise à jour des symboles de devise dans tout le document
function updateCurrencySymbols() {
    // Mettre à jour les symboles dans les cartes de prix
    document.querySelectorAll('.price-currency').forEach(currency => {
        currency.textContent = 'FCFA';
    });
    
    // Mettre à jour les attributs data pour qu'ils contiennent les prix CFA
    priceAmounts.forEach(amount => {
        const planName = amount.closest('.pricing-card').querySelector('.pricing-title').textContent.toLowerCase();
        const planInfo = planData[planName];
        amount.setAttribute('data-monthly', planInfo.monthly);
        amount.setAttribute('data-yearly', planInfo.yearly);
    });
}

// Mise à jour des prix en fonction du toggle
function updatePrices() {
    const isYearly = pricingToggle.checked;
    
    priceAmounts.forEach(amount => {
        const monthlyPrice = amount.getAttribute('data-monthly');
        const yearlyPrice = amount.getAttribute('data-yearly');
        const price = isYearly ? yearlyPrice : monthlyPrice;
        amount.textContent = formatPrice(price);
    });
    
    pricePeriods.forEach(period => {
        period.textContent = isYearly ? '/an' : '/mois';
    });
}

// Configuration des événements
function setupEventListeners() {
    // Toggle pricing
    pricingToggle.addEventListener('change', updatePrices);
    
    // Boutons de sélection de forfait
    choosePlanButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            openPlanSelection(plan);
        });
    });
    
    // Fermeture de la modal
    document.querySelector('.close-modal').addEventListener('click', closePlanSelection);
    document.getElementById('cancel-plan').addEventListener('click', closePlanSelection);
    planOverlay.addEventListener('click', function(e) {
        if (e.target === planOverlay) {
            closePlanSelection();
        }
    });
    
    // Changement de mode de facturation dans la modal
    document.querySelectorAll('input[name="billing"]').forEach(radio => {
        radio.addEventListener('change', function() {
            updateModalPrices();
        });
    });
    
    // Confirmation de sélection
    document.getElementById('confirm-plan').addEventListener('click', confirmPlanSelection);
}

// Ouverture de la modal de sélection
function openPlanSelection(plan) {
    const planInfo = planData[plan];
    const isYearly = pricingToggle.checked;
    
    // Mise à jour du titre et des prix
    document.getElementById('selected-plan-title').textContent = planInfo.title;
    
    // Configuration des options de facturation
    document.querySelector(`input[value="${isYearly ? 'yearly' : 'monthly'}"]`).checked = true;
    
    // Mise à jour de l'affichage
    updateModalPrices();
    
    // Mise à jour des caractéristiques
    const featuresList = document.getElementById('plan-features-list');
    featuresList.innerHTML = planInfo.features.map(feature => 
        `<div class="plan-feature-item"><i class="fas fa-check"></i> ${feature}</div>`
    ).join('');
    
    // Affichage de la modal
    planOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fermeture de la modal
function closePlanSelection() {
    planOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Mise à jour des prix dans la modal
function updateModalPrices() {
    const selectedPlan = document.getElementById('selected-plan-title').textContent.toLowerCase();
    const planInfo = planData[selectedPlan];
    const billing = document.querySelector('input[name="billing"]:checked').value;
    const isYearly = billing === 'yearly';
    
    const price = isYearly ? planInfo.yearly : planInfo.monthly;
    
    // Mise à jour des prix affichés en CFA
    document.getElementById('selected-plan-price').textContent = formatPrice(price);
    document.getElementById('selected-plan-currency').textContent = 'FCFA';
    document.getElementById('selected-plan-period').textContent = isYearly ? '/an' : '/mois';
    
    // Mise à jour des options en CFA
    document.getElementById('monthly-price').textContent = `${formatPrice(planInfo.monthly)} FCFA/mois`;
    document.getElementById('yearly-price').textContent = `${formatPrice(planInfo.yearly)} FCFA/an`;
    
    // Calcul et affichage des économies en CFA
    const monthlyCost = planInfo.monthly * 12;
    const yearlyCost = planInfo.yearly;
    const saving = monthlyCost - yearlyCost;
    
    if (isYearly && saving > 0) {
        document.getElementById('plan-saving').textContent = 
            `Économisez ${formatPrice(saving)} FCFA par an (${Math.round((saving/monthlyCost)*100)}%)`;
        document.getElementById('plan-saving').style.display = 'block';
    } else {
        document.getElementById('plan-saving').style.display = 'none';
    }
}

// Confirmation de la sélection
function confirmPlanSelection() {
    const plan = document.getElementById('selected-plan-title').textContent;
    const billing = document.querySelector('input[name="billing"]:checked').value;
    const price = document.getElementById('selected-plan-price').textContent;
    
    alert(`Merci d'avoir choisi le forfait ${plan} (${billing === 'yearly' ? 'annuel' : 'mensuel'}) pour ${price} FCFA !`);
    
    // Ici vous pouvez rediriger vers un formulaire de paiement adapté au Cameroun
    // window.location.href = `/checkout?plan=${plan}&billing=${billing}`;
    
    closePlanSelection();
}

// Gestion de la touche Echap pour fermer la modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && planOverlay.style.display === 'block') {
        closePlanSelection();
    }
});        // Initialiser le compteur du panier
        updateCartCount();