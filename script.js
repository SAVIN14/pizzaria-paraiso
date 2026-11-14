/**
 * PIZZARIA E DOCERIA PARAÍSO
 * Cardápio Digital Completo e Funcional
 * São João da Canabrava - PI
 * Telefone / WhatsApp: (89) 98819-4395
 */

// ==================================================
// 1. DADOS DO CARDÁPIO (EXATOS E COMPLETOS)
// ==================================================

const CATEGORIES = [
  { id: 'pizzas', name: 'Pizzas Especiais', icon: 'fa-solid fa-pizza-slice' },
  { id: 'pasteis', name: 'Pastéis', icon: 'fa-solid fa-cookie-bite' },
  { id: 'petiscos', name: 'Petiscos', icon: 'fa-solid fa-drumstick-bite' },
  { id: 'bordas', name: 'Bordas', icon: 'fa-solid fa-ring' },
  { id: 'adicionais', name: 'Adicionais', icon: 'fa-solid fa-plus-circle' }
];

// Opções de bordas para seleção direta nas pizzas
const BORDAS_OPTIONS = [
  { id: 'sem_borda', name: 'Sem Borda Recheada', price: 0.00 },
  { id: 'catupiry', name: 'Catupiry', price: 7.00 },
  { id: 'requeijao', name: 'Requeijão', price: 7.00 },
  { id: 'cheddar', name: 'Cheddar', price: 7.00 },
  { id: 'cream_cheese', name: 'Cream Cheese', price: 10.00 },
  { id: 'frango_catupiry', name: 'Frango Catupiry', price: 10.00 },
  { id: 'calabresa_catupiry', name: 'Calabresa e Catupiry', price: 10.00 },
  { id: 'moda_casa', name: 'Moda da Casa', price: 10.00 }
];

const PRODUCTS = [
  // ==================== PIZZAS ESPECIAIS ====================
  {
    id: 'piz-01',
    categoryId: 'pizzas',
    name: 'Pizza Calabresa',
    desc: 'Calabresa, mussarela, milho.',
    prices: { P: 30.00, G: 45.00 },
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    badge: 'Tradicional'
  },
  {
    id: 'piz-02',
    categoryId: 'pizzas',
    name: 'Pizza Bacon',
    desc: 'Molho de tomate, mussarela, bacon e orégano.',
    prices: { P: 30.00, G: 45.00 },
    image: 'pbacon.jpg',
    type: 'pizza'
  },
  {
    id: 'piz-03',
    categoryId: 'pizzas',
    name: 'Pizza 3 Queijos',
    desc: 'Mussarela, requeijão, cheddar.',
    prices: { P: 30.00, G: 45.00 },
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    type: 'pizza'
  },
  {
    id: 'piz-04',
    categoryId: 'pizzas',
    name: 'Pizza Espanhola',
    desc: 'Presunto, mussarela, calabresa e cebola.',
    prices: { P: 30.00, G: 45.00 },
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    type: 'pizza'
  },
  {
    id: 'piz-05',
    categoryId: 'pizzas',
    name: 'Pizza Pizza da Casa',
    desc: 'Molho de tomate, mussarela, frango, calabresa moída, cebola, pimentão, milho, orégano.',
    prices: { P: 35.00, G: 48.00 },
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    badge: 'Especial da Casa'
  },
  {
    id: 'piz-06',
    categoryId: 'pizzas',
    name: 'Pizza Portuguesa',
    desc: 'Mussarela, frango, presunto, milho, ovo, orégano.',
    prices: { P: 35.00, G: 48.00 },
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80',
    type: 'pizza'
  },
  {
    id: 'piz-07',
    categoryId: 'pizzas',
    name: 'Pizza Frango',
    desc: 'Mussarela, frango, milho, orégano.',
    prices: { P: 30.00, G: 45.00 },
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80',
    type: 'pizza'
  },
  {
    id: 'piz-08',
    categoryId: 'pizzas',
    name: 'Pizza Mussarela',
    desc: 'Molho de tomate, mussarela e orégano.',
    prices: { P: 30.00, G: 45.00 },
    image: 'logo.jpg',
    type: 'pizza'
  },
  {
    id: 'piz-09',
    categoryId: 'pizzas',
    name: 'Pizza Frango e Catupiry',
    desc: 'Mussarela, frango, milho, orégano e catupiry.',
    prices: { P: 35.00, G: 48.00 },
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    badge: 'Campeã de Vendas'
  },
  {
    id: 'piz-10',
    categoryId: 'pizzas',
    name: 'Pizza Mistura Quente',
    desc: 'Molho, frango, bacon, carne, calabresa, mussarela, cebola, geleia de pimenta e orégano.',
    prices: { P: 35.00, G: 50.00 },
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    badge: 'Apimentada'
  },
  {
    id: 'piz-11',
    categoryId: 'pizzas',
    name: 'Pizza Carne de Sol Especial',
    desc: 'Carne, mussarela, azeitona, catupiry, milho.',
    prices: { P: 35.00, G: 50.00 },
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    badge: 'Premium'
  },
  {
    id: 'piz-12',
    categoryId: 'pizzas',
    name: 'Pizza Carne de Sol',
    desc: 'Carne, mussarela, cebola.',
    prices: { P: 35.00, G: 48.00 },
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=600&q=80',
    type: 'pizza'
  },
  {
    id: 'piz-13',
    categoryId: 'pizzas',
    name: 'Pizza Nordestina Premium',
    desc: 'Molho de tomate, mussarela, carne de sol, cream cheese, barbecue e orégano.',
    prices: { P: 35.00, G: 50.00 },
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    badge: 'Gourmet'
  },
  {
    id: 'piz-14',
    categoryId: 'pizzas',
    name: 'Pizza 4 Estação',
    desc: 'Presunto, frango, milho, calabresa.',
    prices: { P: 30.00, G: 45.00 },
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80',
    type: 'pizza'
  },
  {
    id: 'piz-15',
    categoryId: 'pizzas',
    name: 'Pizza Mexicana',
    desc: 'Calabresa, mussarela, milho, orégano, pimentão, cebola e pimenta calabresa.',
    prices: { P: 35.00, G: 48.00 },
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80',
    type: 'pizza'
  },
  {
    id: 'piz-16',
    categoryId: 'pizzas',
    name: 'Pizza Frango com Bacon',
    desc: 'Frango, mussarela, bacon, milho e orégano.',
    prices: { P: 35.00, G: 48.00 },
    image: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?auto=format&fit=crop&w=600&q=80',
    type: 'pizza'
  },
  {
    id: 'piz-17',
    categoryId: 'pizzas',
    name: 'Pizza Calabresa Especial',
    desc: 'Calabresa, mussarela, milho, bacon e geleia de pimenta.',
    prices: { P: 35.00, G: 48.00 },
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=600&q=80',
    type: 'pizza',
    badge: 'Exclusiva'
  },

  // ==================== PASTÉIS ====================
  {
    id: 'pas-01',
    categoryId: 'pasteis',
    name: 'Pastel de Carne de Sol',
    desc: 'Massa crocante e sequinha recheada com suculenta carne de sol desfiada e temperada.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pas-02',
    categoryId: 'pasteis',
    name: 'Pastel de Queijo',
    desc: 'Massa artesanal frita na hora com recheio abundante de queijo derretido.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1554998171-89445e31c52b?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pas-03',
    categoryId: 'pasteis',
    name: 'Pastel de Calabresa',
    desc: 'Massa dourada recheada com saborosa calabresa moída e temperada no ponto ideal.',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pas-04',
    categoryId: 'pasteis',
    name: 'Pastel de Frango',
    desc: 'Peito de frango desfiado artesanalmente, com tempero especial da casa.',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pas-05',
    categoryId: 'pasteis',
    name: 'Pastel de Frango e Catupiry',
    desc: 'Combinação clássica de frango desfiado com o toque cremoso do catupiry.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pas-06',
    categoryId: 'pasteis',
    name: 'Pastel de Presunto e Queijo',
    desc: 'Tradicional recheio farto de presunto nobre e queijo derretido.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pas-07',
    categoryId: 'pasteis',
    name: 'Pastel de Carne de Sol / Queijo',
    desc: 'Carne de sol desfiada combinada com o irresistível sabor do queijo mussarela.',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pas-08',
    categoryId: 'pasteis',
    name: 'Pastéis Completão',
    desc: 'Frango, queijo, milho, presunto, catupiry, calabresa, azeitona, carne, orégano.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    type: 'simple',
    badge: 'Mais Pedido'
  },
  {
    id: 'pas-09',
    categoryId: 'pasteis',
    name: 'Pastel de Frango com Queijo',
    desc: 'Frango desfiado suculento com generosa camada de queijo derretido.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pas-10',
    categoryId: 'pasteis',
    name: 'Pastel de Carne de Sol e Catupiry',
    desc: 'Carne de sol bem temperada finalizada com catupiry super cremoso.',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pas-11',
    categoryId: 'pasteis',
    name: 'Pastel de Calabresa / Queijo',
    desc: 'Calabresa fatiada e dourada com queijo mussarela derretido.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pas-12',
    categoryId: 'pasteis',
    name: 'Pastel de Carne / Cream Cheese',
    desc: 'Carne moída selecionada com um toque aveludado de legítimo cream cheese.',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },

  // ==================== PETISCOS ====================
  {
    id: 'pet-01',
    categoryId: 'petiscos',
    name: 'Carne e Batata',
    desc: 'Porção generosa de carne bovina acebolada acompanhada de batata frita bem crocante.',
    price: 40.00,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pet-02',
    categoryId: 'petiscos',
    name: 'Batata',
    desc: 'Porção de batata frita dourada, crocante por fora e macia por dentro.',
    price: 20.00,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pet-03',
    categoryId: 'petiscos',
    name: 'Batata Bacon e Cheddar',
    desc: 'Batatas fritas cobertas com farta calda de cheddar cremoso e cubos de bacon crocantes.',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80',
    type: 'simple',
    badge: 'Favorito'
  },
  {
    id: 'pet-04',
    categoryId: 'petiscos',
    name: 'Mini Pastéis',
    desc: 'Porção de mini pastéis sortidos crocantes, perfeitos para petiscar em família ou com amigos.',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pet-05',
    categoryId: 'petiscos',
    name: 'Calabresa e Batata',
    desc: 'Calabresa fatiada e acebolada na chapa servida com batata frita crocante.',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pet-06',
    categoryId: 'petiscos',
    name: 'Tulipa de Frango',
    desc: 'Tulipas de frango (meio da asa) bem temperadas, douradas e suculentas.',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'pet-07',
    categoryId: 'petiscos',
    name: 'Misto (Calabresa, Frango, Carne e Batata)',
    desc: 'Tábua completa e farta reunindo calabresa, pedaços de frango, carne e batata frita.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    type: 'simple',
    badge: 'Completo'
  },

  // ==================== BORDAS ====================
  {
    id: 'bor-01',
    categoryId: 'bordas',
    name: 'Borda de Catupiry',
    desc: 'Borda recheada com legítimo e cremoso Catupiry.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'bor-02',
    categoryId: 'bordas',
    name: 'Borda de Requeijão',
    desc: 'Borda farta com requeijão cremoso especial.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'bor-03',
    categoryId: 'bordas',
    name: 'Borda de Cheddar',
    desc: 'Borda super recheada com cheddar aveludado e marcante.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'bor-04',
    categoryId: 'bordas',
    name: 'Borda de Cream Cheese',
    desc: 'Borda nobre recheada com autêntico cream cheese.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'bor-05',
    categoryId: 'bordas',
    name: 'Borda de Frango Catupiry',
    desc: 'Combinação espetacular de frango desfiado temperado e catupiry na borda.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'bor-06',
    categoryId: 'bordas',
    name: 'Borda de Calabresa e Catupiry',
    desc: 'Borda recheada com calabresa moída bem sequinha e catupiry.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'bor-07',
    categoryId: 'bordas',
    name: 'Borda Moda da Casa',
    desc: 'Recheio exclusivo e farto da nossa cozinha para a sua pizza ficar inesquecível.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80',
    type: 'simple',
    badge: 'Especial'
  },

  // ==================== ADICIONAIS ====================
  {
    id: 'adi-01',
    categoryId: 'adicionais',
    name: 'Geleia de Pimenta',
    desc: 'Toque agridoce e picante perfeito para acompanhar pizzas e salgados.',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1589135233689-d562f79b69b5?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'adi-02',
    categoryId: 'adicionais',
    name: 'Cheme Chees',
    desc: 'Porção adicional de creme de queijo para enriquecer ainda mais seu prato.',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'adi-03',
    categoryId: 'adicionais',
    name: 'Bacon',
    desc: 'Dose extra de bacon fatiado em cubos crocantes e dourados.',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1528607929212-2636ec44253e?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  },
  {
    id: 'adi-04',
    categoryId: 'adicionais',
    name: 'Ovo',
    desc: 'Adicional de ovo cozido fatiado para pizzas ou petiscos.',
    price: 1.00,
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80',
    type: 'simple'
  }
];

// Delivery Fees by locality
const DELIVERY_FEES = {
  'Canabrava': 2.00,
  'Aparecida': 5.00,
  'Coabe': 4.00,
  'Currais': 3.00,
  'São Luís': 5.00
};

// ==================================================
// 2. ESTADO DA APLICAÇÃO (STATE)
// ==================================================

const state = {
  cart: [], // items: { cartItemId, productId, name, size, bordaName, bordaPrice, unitPrice, quantity, image }
  modality: 'delivery', // 'delivery' | 'retirada' | 'local'
  selectedLocality: 'Canabrava',
  deliveryFee: 2.00,
  paymentMethod: 'PIX',
  cashGiven: 0.00,
  searchTerm: '',
  pizzaSizes: {}, // productId -> 'P' or 'G' (default 'P')
  pizzaBordas: {} // productId -> bordaId (default 'sem_borda')
};

// Formatting utility
function formatMoney(amount) {
  return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ==================================================
// 3. INICIALIZAÇÃO DO SISTEMA
// ==================================================

document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  renderCategoriesNav();
  renderMenu();
  setupEventListeners();
  updateCartUI();
});

// Loading screen ultra rápido e minimalista (650ms)
function initLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
  }, 650);
}

// ==================================================
// 4. RENDERIZAÇÃO DAS CATEGORIAS
// ==================================================

function renderCategoriesNav() {
  const container = document.getElementById('categories-list');
  container.innerHTML = CATEGORIES.map((cat, index) => `
    <li>
      <button type="button" class="category-tab-btn ${index === 0 ? 'active' : ''}" data-cat-id="${cat.id}">
        <i class="${cat.icon}"></i>
        <span>${cat.name}</span>
      </button>
    </li>
  `).join('');

  // Category tab click event
  container.querySelectorAll('.category-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const catId = btn.getAttribute('data-cat-id');
      const targetSection = document.getElementById(`section-${catId}`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ==================================================
// 5. RENDERIZAÇÃO DO CARDÁPIO & PRODUTOS
// ==================================================

function renderMenu() {
  const container = document.getElementById('menu-sections-container');
  const term = state.searchTerm.toLowerCase().trim();

  let html = '';

  CATEGORIES.forEach(cat => {
    const productsInCat = PRODUCTS.filter(p => {
      const matchesCategory = p.categoryId === cat.id;
      if (!term) return matchesCategory;
      const matchesSearch = p.name.toLowerCase().includes(term) || (p.desc && p.desc.toLowerCase().includes(term));
      return matchesCategory && matchesSearch;
    });

    if (productsInCat.length === 0) return;

    html += `
      <section class="category-section" id="section-${cat.id}">
        <div class="category-header">
          <h2 class="category-title">
            <i class="${cat.icon}"></i>
            <span>${cat.name}</span>
          </h2>
          <span class="category-count">${productsInCat.length} ${productsInCat.length === 1 ? 'item' : 'itens'}</span>
        </div>
        <div class="products-grid">
          ${productsInCat.map(product => renderProductCard(product)).join('')}
        </div>
      </section>
    `;
  });

  if (html === '') {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 15px; color: var(--color-gold);"></i>
        <h3 style="font-size: 1.2rem; color: var(--color-text-dark); margin-bottom: 6px;">Nenhum produto encontrado</h3>
        <p>Não encontramos nenhum item correspondente a "<strong>${state.searchTerm}</strong>".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = html;
  attachProductCardEvents();
}

// Helper to calculate pizza price with selected size and border
function getPizzaComputedPrice(product, size, bordaId) {
  const basePrice = product.prices[size] || product.prices.P;
  const borda = BORDAS_OPTIONS.find(b => b.id === bordaId) || BORDAS_OPTIONS[0];
  return basePrice + (borda.price || 0);
}

// Render individual product card
function renderProductCard(product) {
  const isPizza = product.type === 'pizza';
  const selectedSize = state.pizzaSizes[product.id] || 'P';
  const selectedBordaId = state.pizzaBordas[product.id] || 'sem_borda';
  
  let currentPrice = 0;
  if (isPizza) {
    currentPrice = getPizzaComputedPrice(product, selectedSize, selectedBordaId);
  } else if (product.type === 'simple') {
    currentPrice = product.price;
  }

  return `
    <article class="product-card" id="card-${product.id}">
      <div class="product-image-container">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="product-image" 
          loading="lazy"
          onerror="this.onerror=null; this.src='assets/img/logo.jpg';"
        >
        ${product.badge ? `<span class="product-badge"><i class="fa-solid fa-star"></i> ${product.badge}</span>` : ''}
      </div>

      <div class="product-card-body">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.desc || ''}</p>

        ${isPizza ? `
          <!-- Tamanho da Pizza -->
          <div class="pizza-size-selector" data-product-id="${product.id}">
            <button type="button" class="pizza-size-btn ${selectedSize === 'P' ? 'active' : ''}" data-size="P">
              P <span class="fatias">6 fatias • ${formatMoney(product.prices.P)}</span>
            </button>
            <button type="button" class="pizza-size-btn ${selectedSize === 'G' ? 'active' : ''}" data-size="G">
              G <span class="fatias">8 fatias • ${formatMoney(product.prices.G)}</span>
            </button>
          </div>

          <!-- Borda Recheada da Pizza -->
          <div class="pizza-border-box">
            <label for="borda-select-${product.id}" class="pizza-border-label">
              <i class="fa-solid fa-ring text-gold"></i> Borda Recheada:
            </label>
            <div class="border-select-wrapper">
              <select id="borda-select-${product.id}" class="pizza-border-select" data-product-id="${product.id}">
                ${BORDAS_OPTIONS.map(b => `
                  <option value="${b.id}" ${b.id === selectedBordaId ? 'selected' : ''}>
                    ${b.name} ${b.price > 0 ? `(+ ${formatMoney(b.price)})` : '(Padrão)'}
                  </option>
                `).join('')}
              </select>
              <i class="fa-solid fa-chevron-down select-arrow"></i>
            </div>
          </div>
        ` : ''}

        <div class="product-footer-row">
          <div class="product-price-box">
            <span class="product-price-label">${isPizza ? `Total (${selectedSize})` : 'Preço'}</span>
            <span class="product-price-val" id="price-val-${product.id}">
              ${formatMoney(currentPrice)}
            </span>
          </div>

          <div class="product-actions-group">
            <div class="qty-control" id="qty-wrapper-${product.id}">
              <button type="button" class="btn-qty btn-qty-minus" data-product-id="${product.id}" aria-label="Diminuir">-</button>
              <span class="qty-number" id="qty-val-${product.id}">1</span>
              <button type="button" class="btn-qty btn-qty-plus" data-product-id="${product.id}" aria-label="Aumentar">+</button>
            </div>
            <button type="button" class="btn-add-to-cart" data-product-id="${product.id}">
              <i class="fa-solid fa-bag-shopping"></i> Adicionar
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

// Attach interactive events to product cards
function attachProductCardEvents() {
  // Pizza Size Selector Buttons
  document.querySelectorAll('.pizza-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.pizza-size-selector');
      const productId = parent.getAttribute('data-product-id');
      const chosenSize = btn.getAttribute('data-size');

      // Update state
      state.pizzaSizes[productId] = chosenSize;

      // Update UI buttons
      parent.querySelectorAll('.pizza-size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update price display
      const product = PRODUCTS.find(p => p.id === productId);
      if (product && product.prices) {
        const bordaId = state.pizzaBordas[productId] || 'sem_borda';
        const totalPrice = getPizzaComputedPrice(product, chosenSize, bordaId);
        const priceElement = document.getElementById(`price-val-${productId}`);
        const priceLabel = document.querySelector(`#card-${productId} .product-price-label`);
        if (priceElement) priceElement.innerText = formatMoney(totalPrice);
        if (priceLabel) priceLabel.innerText = `Total (${chosenSize})`;
      }
    });
  });

  // Pizza Border Selector Dropdown
  document.querySelectorAll('.pizza-border-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const productId = sel.getAttribute('data-product-id');
      const chosenBordaId = sel.value;

      state.pizzaBordas[productId] = chosenBordaId;

      const product = PRODUCTS.find(p => p.id === productId);
      if (product && product.prices) {
        const size = state.pizzaSizes[productId] || 'P';
        const totalPrice = getPizzaComputedPrice(product, size, chosenBordaId);
        const priceElement = document.getElementById(`price-val-${productId}`);
        if (priceElement) priceElement.innerText = formatMoney(totalPrice);
      }
    });
  });

  // Quantity Minus
  document.querySelectorAll('.btn-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-product-id');
      const display = document.getElementById(`qty-val-${pid}`);
      let val = parseInt(display.innerText, 10);
      if (val > 1) {
        display.innerText = val - 1;
      }
    });
  });

  // Quantity Plus
  document.querySelectorAll('.btn-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-product-id');
      const display = document.getElementById(`qty-val-${pid}`);
      let val = parseInt(display.innerText, 10);
      display.innerText = val + 1;
    });
  });

  // Add to Cart Button
  document.querySelectorAll('.btn-add-to-cart:not(.btn-custom-action)').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-product-id');
      const product = PRODUCTS.find(p => p.id === pid);
      if (!product) return;

      const qtyDisplay = document.getElementById(`qty-val-${pid}`);
      const qty = parseInt(qtyDisplay ? qtyDisplay.innerText : '1', 10);

      let size = null;
      let bordaName = null;
      let bordaPrice = 0;
      let unitPrice = product.price;

      if (product.type === 'pizza') {
        size = state.pizzaSizes[pid] || 'P';
        const bordaId = state.pizzaBordas[pid] || 'sem_borda';
        const bordaObj = BORDAS_OPTIONS.find(b => b.id === bordaId) || BORDAS_OPTIONS[0];
        
        if (bordaObj.id !== 'sem_borda') {
          bordaName = bordaObj.name;
          bordaPrice = bordaObj.price;
        }
        unitPrice = product.prices[size] + bordaPrice;
      }

      addItemToCart(product, size, bordaName, bordaPrice, unitPrice, qty);

      // Reset card quantity counter to 1
      if (qtyDisplay) qtyDisplay.innerText = '1';

      // Visual feedback
      showToast(`${product.name} adicionado ao pedido!`);
      triggerBadgeAnimation();
    });
  });
}

// ==================================================
// 6. GERENCIAMENTO DO CARRINHO (CART ACTIONS)
// ==================================================

function addItemToCart(product, size, bordaName, bordaPrice, unitPrice, quantity) {
  // Item unique cart key (distinguishes pizza with size and selected border)
  const borderSlug = bordaName ? bordaName.replace(/\s+/g, '_').toLowerCase() : 'noborder';
  const cartItemId = size ? `${product.id}_${size}_${borderSlug}` : product.id;

  const existingIndex = state.cart.findIndex(item => item.cartItemId === cartItemId);

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      cartItemId,
      productId: product.id,
      name: product.name,
      size: size,
      bordaName: bordaName,
      bordaPrice: bordaPrice,
      unitPrice: unitPrice,
      quantity: quantity,
      image: product.image
    });
  }

  updateCartUI();
}

function updateCartItemQuantity(cartItemId, delta) {
  const itemIndex = state.cart.findIndex(item => item.cartItemId === cartItemId);
  if (itemIndex === -1) return;

  state.cart[itemIndex].quantity += delta;

  if (state.cart[itemIndex].quantity <= 0) {
    state.cart.splice(itemIndex, 1);
  }

  updateCartUI();
}

function removeCartItem(cartItemId) {
  state.cart = state.cart.filter(item => item.cartItemId !== cartItemId);
  updateCartUI();
}

// Cart Subtotal & Total
function getCartSubtotal() {
  return state.cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
}

function getCartTotal() {
  return getCartSubtotal() + state.deliveryFee;
}

function getTotalItemsCount() {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Update all cart badges, drawer lists and totals
function updateCartUI() {
  const totalCount = getTotalItemsCount();
  const subtotal = getCartSubtotal();
  const total = getCartTotal();

  // Header badges
  const badge = document.getElementById('cart-badge-count');
  const headerVal = document.getElementById('cart-header-val');
  if (badge) badge.innerText = totalCount;
  if (headerVal) headerVal.innerText = formatMoney(subtotal);

  // Mobile floating bar
  const mobileCount = document.getElementById('mobile-cart-count');
  const mobileTotal = document.getElementById('mobile-cart-total');
  const mobileBar = document.getElementById('mobile-floating-cart');
  if (mobileCount) mobileCount.innerText = totalCount;
  if (mobileTotal) mobileTotal.innerText = formatMoney(total);
  if (mobileBar) {
    if (totalCount > 0) {
      mobileBar.style.display = 'block';
    } else {
      mobileBar.style.display = 'none';
    }
  }

  // Cart Drawer
  const emptyView = document.getElementById('cart-empty');
  const filledView = document.getElementById('cart-filled');
  const itemsContainer = document.getElementById('cart-items-list');

  if (state.cart.length === 0) {
    if (emptyView) emptyView.style.display = 'flex';
    if (filledView) filledView.style.display = 'none';
  } else {
    if (emptyView) emptyView.style.display = 'none';
    if (filledView) filledView.style.display = 'flex';

    if (itemsContainer) {
      itemsContainer.innerHTML = state.cart.map(item => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src='assets/img/logo.jpg';">
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            ${item.size ? `
              <span class="cart-item-sub">
                Tamanho: ${item.size} (${item.size === 'P' ? '6 fatias' : '8 fatias'})
                ${item.bordaName ? `<br><strong style="color: var(--color-red);">Borda: ${item.bordaName} (+${formatMoney(item.bordaPrice)})</strong>` : ''}
              </span>
            ` : ''}
            <div class="cart-item-price">${formatMoney(item.unitPrice * item.quantity)}</div>
          </div>
          <div class="cart-item-controls">
            <div class="qty-control">
              <button type="button" class="btn-qty" onclick="updateCartItemQuantity('${item.cartItemId}', -1)">-</button>
              <span class="qty-number">${item.quantity}</span>
              <button type="button" class="btn-qty" onclick="updateCartItemQuantity('${item.cartItemId}', 1)">+</button>
            </div>
            <button type="button" class="btn-remove-item" onclick="removeCartItem('${item.cartItemId}')" title="Remover item">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      `).join('');
    }
  }

  // Summary lines
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryDelivery = document.getElementById('summary-delivery');
  const summaryTotal = document.getElementById('summary-total');

  if (summarySubtotal) summarySubtotal.innerText = formatMoney(subtotal);
  if (summaryDelivery) summaryDelivery.innerText = state.deliveryFee > 0 ? formatMoney(state.deliveryFee) : 'Grátis (R$ 0,00)';
  if (summaryTotal) summaryTotal.innerText = formatMoney(total);

  // Recalculate Cash Change in checkout modal if open
  validateCashPayment();
}

function triggerBadgeAnimation() {
  const badge = document.getElementById('cart-badge-count');
  if (badge) {
    badge.classList.remove('bump');
    void badge.offsetWidth; // retrigger
    badge.classList.add('bump');
  }
}

// Toast notification
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-green"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);
}

// ==================================================
// 7. GESTÃO DE MODALIDADE E TAXA DE ENTREGA
// ==================================================

function handleModalityChange(newModality) {
  state.modality = newModality;

  const localityBox = document.getElementById('locality-selector-box');
  const localitySelect = document.getElementById('locality-select');
  const freeBadge = document.getElementById('modality-free-badge');
  const freeText = document.getElementById('modality-free-text');

  if (newModality === 'delivery') {
    localityBox.style.display = 'block';
    freeBadge.style.display = 'none';

    // apply fee of chosen locality or default
    const selected = localitySelect.value || 'Canabrava';
    state.selectedLocality = selected;
    state.deliveryFee = DELIVERY_FEES[selected] || 2.00;
  } else if (newModality === 'retirada') {
    localityBox.style.display = 'none';
    freeBadge.style.display = 'flex';
    freeText.innerText = 'Retirar no local • Sem taxa de entrega (R$ 0,00)';
    state.deliveryFee = 0.00;
    state.selectedLocality = 'Retirada no Balcão';
  } else if (newModality === 'local') {
    localityBox.style.display = 'none';
    freeBadge.style.display = 'flex';
    freeText.innerText = 'Consumir no local • Sem taxa de entrega (R$ 0,00)';
    state.deliveryFee = 0.00;
    state.selectedLocality = 'Consumo no Local';
  }

  updateCartUI();
}

function handleLocalityChange(val) {
  state.selectedLocality = val;
  state.deliveryFee = DELIVERY_FEES[val] || 0.00;
  updateCartUI();
}

// ==================================================
// 8. CHECKOUT & FINALIZAÇÃO
// ==================================================

function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Adicione ao menos um item ao carrinho primeiro.');
    return;
  }

  // If modality is delivery, check if locality is selected
  if (state.modality === 'delivery' && !state.selectedLocality) {
    alert('Por favor, selecione sua localidade para calcular a taxa de entrega antes de prosseguir.');
    return;
  }

  // Close cart drawer
  closeCartDrawer();

  // Populate mini order summary in checkout
  const miniList = document.getElementById('checkout-mini-items');
  const miniSub = document.getElementById('checkout-subtotal');
  const miniDel = document.getElementById('checkout-delivery');
  const miniTot = document.getElementById('checkout-total');
  const modalityBadge = document.getElementById('checkout-modality-badge');

  if (miniList) {
    miniList.innerHTML = state.cart.map(item => `
      <div>
        ${item.quantity}x ${item.name} ${item.size ? `(${item.size})` : ''} 
        ${item.bordaName ? `<span style="color: var(--color-red);">[Borda: ${item.bordaName}]</span>` : ''} 
        - <strong>${formatMoney(item.unitPrice * item.quantity)}</strong>
      </div>
    `).join('');
  }

  const sub = getCartSubtotal();
  const tot = getCartTotal();

  if (miniSub) miniSub.innerText = formatMoney(sub);
  if (miniDel) miniDel.innerText = state.deliveryFee > 0 ? formatMoney(state.deliveryFee) : 'R$ 0,00';
  if (miniTot) miniTot.innerText = formatMoney(tot);

  // Modality display inside checkout
  const addressGroup = document.getElementById('address-fields-group');
  const dineinGroup = document.getElementById('dinein-fields-group');
  const pickupGroup = document.getElementById('pickup-fields-group');
  const selectedLocalityInput = document.getElementById('checkout-selected-locality');

  if (modalityBadge) {
    if (state.modality === 'delivery') modalityBadge.innerText = 'Entrega em Casa';
    else if (state.modality === 'retirada') modalityBadge.innerText = 'Retirar no Balcão';
    else modalityBadge.innerText = 'Consumir no Local';
  }

  if (state.modality === 'delivery') {
    addressGroup.style.display = 'block';
    dineinGroup.style.display = 'none';
    pickupGroup.style.display = 'none';
    if (selectedLocalityInput) selectedLocalityInput.value = `${state.selectedLocality} (Taxa: ${formatMoney(state.deliveryFee)})`;
  } else if (state.modality === 'local') {
    addressGroup.style.display = 'none';
    dineinGroup.style.display = 'block';
    pickupGroup.style.display = 'none';
  } else if (state.modality === 'retirada') {
    addressGroup.style.display = 'none';
    dineinGroup.style.display = 'none';
    pickupGroup.style.display = 'block';
  }

  // Render cash payment quick suggestions
  renderCashSuggestions(tot);

  // Open modal
  const modal = document.getElementById('checkout-modal-backdrop');
  if (modal) modal.classList.add('active');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal-backdrop');
  if (modal) modal.classList.remove('active');
}

// Cash suggestions buttons
function renderCashSuggestions(total) {
  const container = document.getElementById('cash-suggestions');
  if (!container) return;

  const suggestions = new Set();
  suggestions.add(Math.ceil(total));
  if (total < 50) suggestions.add(50);
  if (total < 100) suggestions.add(100);
  if (total < 150) suggestions.add(150);
  if (total < 200) suggestions.add(200);

  container.innerHTML = Array.from(suggestions).map(val => `
    <button type="button" class="btn-suggestion" onclick="setCashGiven(${val})">
      R$ ${val.toFixed(2)}
    </button>
  `).join('');
}

function setCashGiven(amount) {
  const input = document.getElementById('cash-given');
  if (input) {
    input.value = amount;
    state.cashGiven = amount;
    validateCashPayment();
  }
}

// Real-time calculation of change with verification
function validateCashPayment() {
  if (state.paymentMethod !== 'Dinheiro') return true;

  const total = getCartTotal();
  const input = document.getElementById('cash-given');
  const cashVal = parseFloat(input ? input.value : 0) || 0;
  state.cashGiven = cashVal;

  const display = document.getElementById('change-result-display');
  if (!display) return true;

  if (cashVal === 0) {
    display.className = 'change-result-display';
    display.style.display = 'none';
    return false;
  }

  if (cashVal < total) {
    const diff = total - cashVal;
    display.className = 'change-result-display insufficient';
    display.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Valor insuficiente para este pedido. (Faltam ${formatMoney(diff)})`;
    return false;
  } else {
    const troco = cashVal - total;
    display.className = 'change-result-display valid';
    display.innerHTML = `<i class="fa-solid fa-check-circle"></i> <strong>Troco: ${formatMoney(troco)}</strong>`;
    return true;
  }
}

// ==================================================
// 9. ENVIO PARA O WHATSAPP
// ==================================================

function submitOrderToWhatsApp() {
  const errorBanner = document.getElementById('checkout-error-banner');
  const errorMsg = document.getElementById('checkout-error-msg');

  // Customer Name Validation
  const customerName = document.getElementById('customer-name').value.trim();
  if (!customerName) {
    showCheckoutError('Por favor, informe seu nome completo.');
    return;
  }

  // Address validation if delivery
  let deliveryStreet = '';
  let deliveryReference = '';
  if (state.modality === 'delivery') {
    deliveryStreet = document.getElementById('delivery-street').value.trim();
    deliveryReference = document.getElementById('delivery-reference').value.trim();
    if (!deliveryStreet) {
      showCheckoutError('Por favor, informe a rua e o número para entrega.');
      return;
    }
  }

  // Table number validation if consuming on spot
  let tableNumber = '';
  if (state.modality === 'local') {
    tableNumber = document.getElementById('table-number').value.trim();
    if (!tableNumber) {
      showCheckoutError('Por favor, informe o número da mesa ou sua identificação.');
      return;
    }
  }

  // Cash payment validation
  if (state.paymentMethod === 'Dinheiro') {
    const total = getCartTotal();
    if (!state.cashGiven || state.cashGiven < total) {
      showCheckoutError('O valor informado em dinheiro é insuficiente para este pedido.');
      return;
    }
  }

  // Optional fields
  const customerPhone = document.getElementById('customer-phone').value.trim();
  const orderNotes = document.getElementById('order-notes').value.trim();

  // Hide errors
  if (errorBanner) errorBanner.style.display = 'none';

  // Build WhatsApp Message
  let message = `Olá! Gostaria de fazer um pedido na Pizzaria e Doceria Paraíso.\n\n`;
  message += `PEDIDO:\n\n`;

  state.cart.forEach(item => {
    let icon = '🍴';
    if (item.name.toLowerCase().includes('pizza')) icon = '🍕';
    else if (item.name.toLowerCase().includes('pastel')) icon = '🥟';
    else if (item.name.toLowerCase().includes('batata')) icon = '🍟';
    else if (item.name.toLowerCase().includes('tulipa') || item.name.toLowerCase().includes('frango')) icon = '🍗';
    else if (item.name.toLowerCase().includes('borda')) icon = '🧀';

    message += `${icon} ${item.name}\n`;
    if (item.size) {
      message += `Tamanho: ${item.size}\n`;
    }
    if (item.bordaName) {
      message += `Borda: ${item.bordaName} (+${formatMoney(item.bordaPrice)})\n`;
    }
    message += `Quantidade: ${item.quantity}\n`;
    message += `Valor: ${formatMoney(item.unitPrice * item.quantity)}\n\n`;
  });

  message += `------------------------\n\n`;
  message += `Subtotal: ${formatMoney(getCartSubtotal())}\n`;
  
  if (state.modality === 'delivery') {
    message += `Delivery (${state.selectedLocality}): ${formatMoney(state.deliveryFee)}\n\n`;
  } else if (state.modality === 'retirada') {
    message += `Modalidade: Retirar no Local (Sem taxa)\n\n`;
  } else {
    message += `Modalidade: Consumir no Local (Sem taxa)\n\n`;
  }

  message += `TOTAL: ${formatMoney(getCartTotal())}\n\n`;
  message += `Forma de pagamento: ${state.paymentMethod}\n`;

  if (state.paymentMethod === 'Dinheiro') {
    const troco = state.cashGiven - getCartTotal();
    message += `Valor pago: ${formatMoney(state.cashGiven)}\n`;
    message += `Troco: ${formatMoney(troco)}\n`;
  }

  message += `\nCliente: ${customerName}\n`;
  if (customerPhone) {
    message += `Contato: ${customerPhone}\n`;
  }

  if (state.modality === 'delivery') {
    message += `\nEndereço:\n${deliveryStreet} - ${state.selectedLocality}`;
    if (deliveryReference) message += `\nReferência: ${deliveryReference}`;
    message += `\nSão João da Canabrava - PI\n`;
  } else if (state.modality === 'local') {
    message += `\nMesa / Local: ${tableNumber}\n`;
  } else {
    message += `\nRetirada no Balcão (Av. João Bitonio)\n`;
  }

  if (orderNotes) {
    message += `\nObservações:\n${orderNotes}\n`;
  }

  // Target WhatsApp Number: (89) 98819-4395 -> 5589988194395
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/5589988194395?text=${encodedText}`;

  // Open WhatsApp in new tab / app
  window.open(whatsappUrl, '_blank');

  // Close checkout modal & show confirmation
  closeCheckoutModal();
  showToast('Pedido preparado com sucesso! Enviando para o WhatsApp...');
}

function showCheckoutError(msg) {
  const errorBanner = document.getElementById('checkout-error-banner');
  const errorMsg = document.getElementById('checkout-error-msg');
  if (errorBanner && errorMsg) {
    errorMsg.innerText = msg;
    errorBanner.style.display = 'flex';
  }
}

// Drawer Controls
function openCartDrawer() {
  document.getElementById('cart-drawer-backdrop').classList.add('active');
  document.getElementById('cart-drawer').classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-backdrop').classList.remove('active');
  document.getElementById('cart-drawer').classList.remove('active');
}

// ==================================================
// 10. CONFIGURAÇÃO DE LISTENERS & EVENTOS
// ==================================================

function setupEventListeners() {
  // Cart open/close triggers
  document.getElementById('btn-open-cart-header').addEventListener('click', openCartDrawer);
  document.getElementById('btn-open-mobile-cart').addEventListener('click', openCartDrawer);
  document.getElementById('btn-close-cart').addEventListener('click', closeCartDrawer);
  document.getElementById('cart-drawer-backdrop').addEventListener('click', closeCartDrawer);

  const backToMenuBtn = document.getElementById('btn-back-to-menu');
  if (backToMenuBtn) backToMenuBtn.addEventListener('click', closeCartDrawer);

  // Modality pills
  document.querySelectorAll('.modality-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modality-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      handleModalityChange(btn.getAttribute('data-modality'));
    });
  });

  // Locality dropdown
  const localitySelect = document.getElementById('locality-select');
  if (localitySelect) {
    localitySelect.addEventListener('change', (e) => {
      handleLocalityChange(e.target.value);
    });
  }

  // Search input & clear button
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchTerm = e.target.value;
      if (state.searchTerm) {
        clearSearchBtn.style.display = 'block';
      } else {
        clearSearchBtn.style.display = 'none';
      }
      renderMenu();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchTerm = '';
      clearSearchBtn.style.display = 'none';
      renderMenu();
    });
  }

  // Proceed to checkout button
  const btnProceed = document.getElementById('btn-proceed-checkout');
  if (btnProceed) {
    btnProceed.addEventListener('click', openCheckoutModal);
  }

  // Close Checkout Modal
  const btnCloseCheckout = document.getElementById('btn-close-checkout');
  if (btnCloseCheckout) {
    btnCloseCheckout.addEventListener('click', closeCheckoutModal);
  }

  const modalBackdrop = document.getElementById('checkout-modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeCheckoutModal();
      }
    });
  }

  // Payment radio selection
  document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.paymentMethod = e.target.value;
      const cashSection = document.getElementById('cash-payment-section');
      if (state.paymentMethod === 'Dinheiro') {
        cashSection.style.display = 'block';
        validateCashPayment();
      } else {
        cashSection.style.display = 'none';
      }
    });
  });

  // Cash input change
  const cashInput = document.getElementById('cash-given');
  if (cashInput) {
    cashInput.addEventListener('input', () => {
      validateCashPayment();
    });
  }

  // WhatsApp submit button
  const btnSubmitWhatsapp = document.getElementById('btn-submit-whatsapp');
  if (btnSubmitWhatsapp) {
    btnSubmitWhatsapp.addEventListener('click', submitOrderToWhatsApp);
  }
}

// Global functions for inline HTML handlers
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeCartItem = removeCartItem;
window.setCashGiven = setCashGiven;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
