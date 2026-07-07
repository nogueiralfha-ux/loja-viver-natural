import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Leaf, 
  ShieldCheck, 
  Zap, 
  Star, 
  Instagram, 
  Facebook, 
  Mail, 
  CheckCircle,
  Trash2,
  Plus,
  Minus,
  Lock,
  CreditCard,
  Truck,
  ClipboardCheck,
  MessageCircle
} from 'lucide-react';

// --- CONFIGURAÇÕES DA LOJA ---
// Para usar sua própria logo, cole o link da imagem entre as aspas abaixo.
// Exemplo: const LOGO_URL = "https://i.ibb.co/sua-logo.png";
const LOGO_URL = "https://i.ibb.co/NnWkBsz6/logo-da-loja-voraxmart.png"; 

// --- MOCK DATA ---
const PRODUCTS = [
  {
    id: 1,
    name: "Condrol Dimalex - 1 Unidade",
    description: "Tratamento básico para 1 mês.",
    originalPrice: 247.00,
    price: 197.00,
    rating: 5,
    category: "Básico",
    imageUrl: "https://i.ibb.co/LDJdpFct/CONDROL-DIMALEX-removebg-preview.png"
  },
  {
    id: 2,
    name: "Condrol Dimalex - 3 Frascos",
    description: "Tratamento intermediário para 3 meses.",
    originalPrice: 741.00,
    price: 591.00,
    rating: 4.9,
    category: "Mais Vendido",
    imageUrl: "https://i.ibb.co/JRn21V8H/3-frascos-removebg-preview.png"
  },
  {
    id: 3,
    name: "Condrol Dimalex - 5 Frascos",
    description: "Tratamento contínuo para 5 meses.",
    originalPrice: 1235.00,
    price: 985.00,
    rating: 5,
    category: "Custo-Benefício",
    imageUrl: "https://i.ibb.co/7JY6MxdF/6-fraascos-removebg-preview.png"
  },
  {
    id: 4,
    name: "Condrol Dimalex - 6 Frascos",
    description: "Tratamento completo para 6 meses.",
    originalPrice: 1482.00,
    price: 1182.00,
    rating: 4.8,
    category: "Avançado",
    imageUrl: "https://i.ibb.co/pvYQsthV/6frascos-removebg-preview-1.png"
  },
  {
    id: 15,
    name: "Condrol Dimalex - Kit 9 Frascos (Pague 7, Leve 9)",
    description: "A maior economia: Tratamento para 9 meses pelo preço de 6!",
    originalPrice: 2233.00,
    price: 1379.00,
    rating: 5,
    category: "Super Promo",
    imageUrl: "https://i.ibb.co/Zz2s3rt3/leve9-frascos.png"
  },
  {
    id: 16,
    name: "E-book: Articulações e Mobilidades",
    description: "Seu guia completo para avaliar, melhorar e proteger suas articulações naturalmente.",
    originalPrice: 29.90,
    price: 17.90,
    rating: 5,
    category: "Produto Digital",
    imageUrl: "https://i.ibb.co/6R5CR7Zn/capa-do-e-book-articul-oes-e-mobilidade.png"
  },
  // --- NOVOS 10 PRODUTOS (ESPAÇOS RESERVADOS) ---
  {
    id: 5,
    name: "Fitoviron - 1 Frasco",
    description: "Fitoviron: energia, disposição e performance masculina com fórmula premium de alta potência em cápsulas veganas.",
    originalPrice: 196.00,
    price: 149.00,
    rating: 5,
    category: "Novidade",
    imageUrl: "https://i.ibb.co/mVy19wyK/fitoviron-removebg-preview.png" 
  },
  {
    id: 6,
    name: "Pró Life Gotas - 1 Frasco de 30 Ml",
    description: "Pró Life Gotas: vitamina D3 líquida com óleo de semente de abóbora para mais saúde e vitalidade diária.",
    originalPrice: 147.00,
    price: 99.90,
    rating: 5,
    category: "Novidade",
    imageUrl: "https://i.ibb.co/nsh2jFsw/pros-life-gotas-removebg-preview.png" 
  },
  {
    id: 7,
    name: "Fitoviron - 3 Frascos ",
    description: "Fitoviron: energia, disposição e performance masculina com fórmula premium de alta potência em cápsulas veganas.",
    originalPrice: 588.00,
    price: 447.00,
    rating: 4.9,
    category: "Novidade",
    imageUrl: "https://i.ibb.co/fVhcpRwF/fitoviron3-frascos.png"
  },
  {
    id: 8,
    name: "Produto Novo 4",
    description: "Descrição breve do seu novo produto.",
    originalPrice: 150.00,
    price: 99.90,
    rating: 5,
    category: "Novidade",
    imageUrl: "https://placehold.co/400x400/f8fafc/cbd5e1?text=Em+Breve"
  },
  {
    id: 9,
    name: "Produto Novo 5",
    description: "Descrição breve do seu novo produto.",
    originalPrice: 150.00,
    price: 99.90,
    rating: 4.8,
    category: "Novidade",
    imageUrl: "https://placehold.co/400x400/f8fafc/cbd5e1?text=Em+Breve"
  },
  {
    id: 10,
    name: "Produto Novo 6",
    description: "Descrição breve do seu novo produto.",
    originalPrice: 150.00,
    price: 99.90,
    rating: 5,
    category: "Novidade",
    imageUrl: "https://placehold.co/400x400/f8fafc/cbd5e1?text=Em+Breve"
  },
  {
    id: 11,
    name: "Produto Novo 7",
    description: "Descrição breve do seu novo produto.",
    originalPrice: 150.00,
    price: 99.90,
    rating: 5,
    category: "Novidade",
    imageUrl: "https://placehold.co/400x400/f8fafc/cbd5e1?text=Em+Breve"
  },
  {
    id: 12,
    name: "Produto Novo 8",
    description: "Descrição breve do seu novo produto.",
    originalPrice: 150.00,
    price: 99.90,
    rating: 4.9,
    category: "Novidade",
    imageUrl: "https://placehold.co/400x400/f8fafc/cbd5e1?text=Em+Breve"
  },
  {
    id: 13,
    name: "Produto Novo 9",
    description: "Descrição breve do seu novo produto.",
    originalPrice: 150.00,
    price: 99.90,
    rating: 5,
    category: "Novidade",
    imageUrl: "https://placehold.co/400x400/f8fafc/cbd5e1?text=Em+Breve"
  },
  {
    id: 14,
    name: "Produto Novo 10",
    description: "Descrição breve do seu novo produto.",
    originalPrice: 150.00,
    price: 99.90,
    rating: 5,
    category: "Novidade",
    imageUrl: "https://placehold.co/400x400/f8fafc/cbd5e1?text=Em+Breve"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutStep, setIsCheckoutStep] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Novos estados para Frete e Formulário
  const [shipping, setShipping] = useState({ cep: '', cost: 0, isCalculated: false });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: ''
  });

  // Calcula totais do carrinho
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Helper to count physical units in the cart
  const checkFreeShippingForCart = (items: any[]) => {
    const totalUnits = items.reduce((acc, item) => {
      if (item.category === "Produto Digital") return acc;
      let baseUnits = 1;
      if (item.id === 2 || item.id === 7) baseUnits = 3;
      else if (item.id === 3) baseUnits = 5;
      else if (item.id === 4) baseUnits = 6;
      else if (item.id === 15) baseUnits = 9;
      else if (item.name.toLowerCase().includes("3 frascos") || item.name.toLowerCase().includes("3 unidades")) baseUnits = 3;
      else if (item.name.toLowerCase().includes("5 frascos") || item.name.toLowerCase().includes("5 unidades")) baseUnits = 5;
      else if (item.name.toLowerCase().includes("6 frascos") || item.name.toLowerCase().includes("6 unidades")) baseUnits = 6;
      else if (item.name.toLowerCase().includes("9 frascos") || item.name.toLowerCase().includes("9 unidades")) baseUnits = 9;
      return acc + (baseUnits * item.quantity);
    }, 0);
    const onlyDigital = items.length > 0 && items.every(item => item.category === "Produto Digital");
    return onlyDigital || totalUnits >= 3;
  };

  // Lógica para verificar Frete Grátis (3 ou mais unidades físicas no total, ou apenas itens digitais)
  const qualifiesForFreeShipping = checkFreeShippingForCart(cartItems);

  const finalTotal = cartTotal + (qualifiesForFreeShipping ? 0 : shipping.cost);

  // Função para adicionar ao carrinho real
  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      let newCart;
      if (existing) {
        newCart = prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        newCart = [...prev, { ...product, quantity: 1 }];
      }

      // Recalcula o frete se já estiver calculado
      if (shipping.isCalculated) {
        const free = checkFreeShippingForCart(newCart);
        setShipping(s => ({ ...s, cost: free ? 0 : 25.50 }));
      }

      return newCart;
    });
    
    setNotification(`${product.name} adicionado ao carrinho!`);
    setIsCartOpen(true); // Abre o carrinho automaticamente
    setIsCheckoutStep(false);
    
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => {
      const newCart = prev.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      // Recalcula o frete se já estiver calculado
      if (shipping.isCalculated) {
        const free = checkFreeShippingForCart(newCart);
        setShipping(s => ({ ...s, cost: free ? 0 : 25.50 }));
      }

      return newCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => {
      const newCart = prev.filter(item => item.id !== id);
      
      // Recalcula o frete se já estiver calculado
      if (shipping.isCalculated) {
        const free = checkFreeShippingForCart(newCart);
        setShipping(s => ({ ...s, cost: free ? 0 : 25.50 }));
      }
      
      return newCart;
    });
    if (cartItems.length === 1) setIsCheckoutStep(false);
  };

  const handleCalculateShipping = () => {
    if (shipping.cep.length >= 8) {
      const cost = qualifiesForFreeShipping ? 0 : 25.50;
      setShipping({ ...shipping, cost: cost, isCalculated: true });
    } else {
      setNotification("Por favor, digite um CEP válido.");
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      // Se alterou o CEP no formulário do checkout e tem pelo menos 8 dígitos, calcula o frete automaticamente
      if (name === 'cep' && value.replace(/\D/g, '').length >= 8) {
        setShipping(s => ({
          ...s,
          cep: value,
          cost: qualifiesForFreeShipping ? 0 : 25.50,
          isCalculated: true
        }));
      }
      return updated;
    });
  };

  const handleFinalizeCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Constrói a mensagem formatada para o WhatsApp
    let message = `*NOVO PEDIDO - VORAXMART*%0A%0A`;
    message += `*DADOS DO CLIENTE*%0A`;
    message += `Nome: ${formData.name}%0A`;
    message += `E-mail: ${formData.email}%0A`;
    message += `CPF: ${formData.cpf}%0A`;
    message += `WhatsApp: ${formData.phone}%0A`;
    message += `Endereço: ${formData.address} (CEP: ${formData.cep})%0A%0A`;
    
    message += `*RESUMO DO PEDIDO*%0A`;
    cartItems.forEach(item => {
      message += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}%0A`;
    });
    
    message += `%0A*Subtotal:* R$ ${cartTotal.toFixed(2)}%0A`;
    message += `*Frete:* R$ ${shipping.cost.toFixed(2)}%0A`;
    message += `*TOTAL A PAGAR:* R$ ${finalTotal.toFixed(2)}%0A%0A`;
    message += `Aguardando link de pagamento (Mercado Pago / PIX)!`;

    // Número de WhatsApp da Loja
    const numeroLoja = "5516997327255"; 
    const whatsappUrl = `https://wa.me/${numeroLoja}?text=${message}`;
    
    // Abre o WhatsApp com os dados do cliente
    window.open(whatsappUrl, '_blank');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Constrói a mensagem formatada para o WhatsApp
    let message = `*NOVO LEAD - NEWSLETTER*%0A%0A`;
    message += `Um novo cliente se inscreveu para receber o desconto de 15% e novidades!%0A`;
    message += `*E-mail:* ${newsletterEmail}%0A%0A`;
    message += `(Dica: Salve este e-mail na sua planilha de contatos para futuras campanhas).`;

    const numeroLoja = "5516997327255"; 
    const whatsappUrl = `https://wa.me/${numeroLoja}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    setNotification("Inscrição realizada com sucesso!");
    setNewsletterEmail(''); 
    
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleEmailClick = () => {
    const textArea = document.createElement("textarea");
    textArea.value = "suporte@voraxmart.shop";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setNotification("E-mail copiado! (Abra a sua aplicação de e-mail e cole)");
      setTimeout(() => setNotification(null), 4000);
    } catch (err) {
      console.error("Erro ao copiar", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- NOTIFICAÇÃO FLUTUANTE --- */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-bounce">
          <CheckCircle size={20} />
          <span className="font-medium">{notification}</span>
        </div>
      )}

      {/* --- HEADER --- */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              {LOGO_URL ? (
                <img src={LOGO_URL} alt="Voraxmart Logo" className="h-16 w-auto object-contain drop-shadow-sm" />
              ) : (
                <>
                  <div className="bg-green-600 p-2 rounded-lg">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-extrabold text-green-800 tracking-tight">VORAXMART</h1>
                    <p className="text-xs text-green-600 font-medium hidden sm:block">voraxmart.shop/lojaoficial</p>
                  </div>
                </>
              )}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Home</a>
              <a href="#produtos" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Produtos</a>
              <a href="#beneficios" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Por que Natural?</a>
              <a href="#contato" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Contato</a>
            </nav>

            {/* Cart & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-slate-600 hover:text-green-600 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-green-500 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <button 
                className="md:hidden p-2 text-slate-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded-md">Home</a>
              <a href="#produtos" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded-md">Produtos</a>
              <a href="#beneficios" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded-md">Por que Natural?</a>
              <a href="#contato" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded-md">Contato</a>
            </div>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section id="home" className="w-full bg-slate-50 pb-12 pt-0.5">
        <div className="w-full shadow-md overflow-hidden">
          <img 
            src="https://i.ibb.co/fVCps95L/capa-facebook.png" 
            alt="Voraxmart - O melhor da natureza para você" 
            className="w-full h-auto max-h-[600px] object-cover object-center" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#produtos" className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 text-center text-lg w-full sm:w-auto">
            Ver Produtos
          </a>
          <a href="#beneficios" className="px-8 py-4 bg-white border-2 border-green-600 text-green-700 hover:bg-green-50 font-bold rounded-xl transition-colors text-center text-lg w-full sm:w-auto">
            Conhecer a Voraxmart
          </a>
        </div>
      </section>

      {/* --- QUIZ SECTION --- */}
      <section className="py-12 bg-green-50 border-y border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-100 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <ClipboardCheck className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-3xl font-black text-slate-800 mb-4 leading-tight">
                Como está a saúde das suas articulações?
              </h3>
              <p className="text-slate-600 text-lg mb-8">
                Descubra em menos de 2 minutos o nível de desgaste das suas articulações e como está a sua mobilidade atual através do nosso quiz exclusivo.
              </p>
              <a 
                href="https://voraxmart.shop/descubrasuamobilidade/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-green-600 hover:bg-green-500 text-white font-black rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 hover:shadow-green-200"
              >
                <span>Fazer Teste de Mobilidade</span>
                <Plus size={20} />
              </a>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-inner border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" 
                  alt="Saúde e Mobilidade" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-green-50 animate-pulse">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 p-2 rounded-full">
                    <CheckCircle className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Resultado</p>
                    <p className="text-sm font-black text-slate-800">Imediato</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Por que escolher a Voraxmart?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Acreditamos que o corpo humano funciona melhor quando nutrido com ingredientes puros, vindos diretamente da natureza.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-green-600 h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">100% Naturais</h4>
              <p className="text-slate-600">Sem corantes, conservantes ou adoçantes artificiais. Apenas o que o seu corpo precisa.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-blue-600 h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">Alta Absorção</h4>
              <p className="text-slate-600">Fórmulas bio-disponíveis desenvolvidas por especialistas para garantir resultados rápidos.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-amber-600 h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">Qualidade Garantida</h4>
              <p className="text-slate-600">Produtos testados em laboratório com matéria-prima certificada e rastreável.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Como Funciona o Processo de Compra</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Compra simples, rápida e 100% segura. Os seus dados são enviados diretamente para a separação do pedido via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Linha conectora (visível apenas em desktop) */}
            <div className="hidden md:block absolute top-10 left-12 right-12 h-1 bg-green-50 z-0"></div>

            {[
              { icon: <Plus className="w-8 h-8" />, title: "Escolher produto", desc: "Navegue e selecione o tratamento ideal." },
              { icon: <ShoppingCart className="w-8 h-8" />, title: "Adicionar ao carrinho", desc: "Confira seus itens e o frete grátis." },
              { icon: <ClipboardCheck className="w-8 h-8" />, title: "Preencher dados", desc: "Informe seu endereço para entrega." },
              { icon: <MessageCircle className="w-8 h-8" />, title: "Pagar via WhatsApp/PIX", desc: "Finalize direto com nosso suporte." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="bg-white border-4 border-green-500 text-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:bg-green-600 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2 group-hover:rotate-3">
                  {step.icon}
                  <span className="absolute -top-3 -left-3 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                    {idx + 1}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 px-4">{step.desc}</p>
                
                {idx < 3 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="w-1 h-8 bg-green-100 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCTS SECTION --- */}
      <section id="produtos" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">Destaques da Loja</h3>
              <p className="text-slate-600">Os suplementos favoritos dos nossos clientes.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group" id={`product-${product.id}`}>
                
                {/* Imagem do Produto */}
                <div className="bg-slate-100 w-full h-56 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 p-4">
                   <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain drop-shadow-md" referrerPolicy="no-referrer" />
                   <span className="absolute top-2 right-2 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-green-700 shadow-sm border border-green-100">
                     {product.category}
                   </span>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
                    ))}
                    <span className="text-xs text-slate-500 ml-1">({product.rating})</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-800 mb-2 leading-tight">{product.name}</h4>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">{product.description}</p>
                </div>

                <div className="mt-auto">
                  <div className="mb-4">
                    <span className="text-sm text-slate-400 line-through block">
                      De R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-2xl font-black text-green-700 block">
                      Por R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-slate-900 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-colors flex justify-center items-center space-x-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="py-20 bg-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Junte-se à Comunidade Da Voraxmart</h3>
          <p className="text-green-100 mb-8">Receba dicas de saúde, nutrição e ganhe 15% de desconto na sua primeira compra!</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="O seu melhor e-mail" 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="px-6 py-4 rounded-xl w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-green-400 text-slate-800 bg-white"
              required
            />
            <button type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl transition-colors cursor-pointer">
              Inscrever-se
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contato" className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-extrabold text-white tracking-tight">VORAXMART</h2>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              A sua loja oficial de suplementos naturais. A nossa missão é proporcionar saúde e bem-estar através de produtos puros e de alta qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/voraxmartoficial/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Siga-nos no Instagram"><Instagram className="h-6 w-6" /></a>
              <a href="https://www.facebook.com/profile.php?id=61588921717806" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Siga-nos no Facebook"><Facebook className="h-6 w-6" /></a>
              <button onClick={handleEmailClick} className="text-slate-400 hover:text-white transition-colors cursor-pointer" title="Copiar e-mail"><Mail className="h-6 w-6" /></button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#produtos" className="hover:text-green-400 transition-colors">Produtos</a></li>
              <li><a href="#beneficios" className="hover:text-green-400 transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contato & Legal</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-400">WhatsApp:</span>{' '}
                <a href="https://wa.me/5516997327255" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 font-medium transition-colors">
                  (16) 99732-7255
                </a>
              </li>
              <li>
                <span className="text-slate-400">Email:</span>{' '}
                <button 
                  onClick={handleEmailClick}
                  className="text-green-500 hover:text-green-400 font-medium transition-colors cursor-pointer"
                >
                  suporte@voraxmart.shop
                </button>
              </li>
              <li><a href="https://voraxmart.shop/termos-de-servico/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors mt-2 inline-block">Termos de Serviço</a></li>
              <li><a href="https://voraxmart.shop/politicas-de-privacidade/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Políticas de Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Voraxmart Loja Oficial. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 text-slate-500">https://voraxmart.shop/lojaoficial</p>
        </div>
      </footer>

      {/* --- CARRINHO / CHECKOUT DRAWER --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Fundo escuro (Overlay) */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          ></div>

          {/* Painel Lateral */}
          <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
            
            {/* Header do Carrinho */}
            <div className="flex flex-col border-b border-slate-100 bg-slate-50">
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center space-x-2">
                  {isCheckoutStep ? <Lock className="text-green-600 h-5 w-5" /> : <ShoppingCart className="text-green-600 h-5 w-5" />}
                  <h2 className="text-lg font-bold text-slate-800">
                    {isCheckoutStep ? "Checkout Seguro" : "O seu Carrinho"}
                  </h2>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Aviso de Frete Grátis */}
              {cartItems.length > 0 && !isCheckoutStep && (
                <div className={`px-5 py-2 text-center text-xs font-bold transition-colors ${qualifiesForFreeShipping ? 'bg-green-100 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                  {qualifiesForFreeShipping ? (
                    <div className="flex items-center justify-center space-x-1">
                      <Truck size={14} />
                      <span>PARABÉNS! VOCÊ GANHOU FRETE GRÁTIS!</span>
                    </div>
                  ) : (
                    <span>ADICIONE 3 OU MAIS FRASCOS PARA GANHAR FRETE GRÁTIS</span>
                  )}
                </div>
              )}
            </div>

            {/* Conteúdo do Carrinho */}
            <div className="flex-1 overflow-y-auto p-5">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-slate-400">
                  <ShoppingCart className="h-16 w-16 opacity-20" />
                  <p className="text-lg">O seu carrinho está vazio.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-green-600 font-semibold hover:underline cursor-pointer"
                  >
                    Continuar a comprar
                  </button>
                </div>
              ) : (
                <>
                  {!isCheckoutStep ? (
                    /* Lista de Produtos no Carrinho */
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex space-x-4 border border-slate-100 p-3 rounded-xl" id={`cart-item-${item.id}`}>
                          <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{item.name}</h4>
                              <p className="text-green-600 font-black text-sm">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              {/* Controle de Quantidade */}
                              <div className="flex items-center space-x-3 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
                                <button onClick={() => updateQuantity(item.id, -1)} className="text-slate-500 hover:text-slate-800 cursor-pointer"><Minus className="h-3 w-3" /></button>
                                <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="text-slate-500 hover:text-slate-800 cursor-pointer"><Plus className="h-3 w-3" /></button>
                              </div>
                              <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 p-1 cursor-pointer">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Formulário de Checkout Real */
                    <div className="space-y-4">
                      <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg flex space-x-3 items-start mb-6">
                        <ShieldCheck className="text-blue-600 h-5 w-5 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-blue-800">Ambiente 100% seguro. Os seus dados serão enviados para a separação do pedido.</p>
                      </div>
                      
                      <form id="checkout-form" onSubmit={handleFinalizeCheckout} className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">Nome Completo</label>
                          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white" placeholder="João da Silva" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">E-mail</label>
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white" placeholder="joao@email.com" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 mb-1">CPF</label>
                            <input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} required className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white" placeholder="000.000.000-00" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-600 mb-1">WhatsApp</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white" placeholder="(00) 00000-0000" />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-1">
                            <label className="block text-xs font-bold text-slate-600 mb-1">CEP</label>
                            <input type="text" name="cep" value={formData.cep} onChange={handleInputChange} required className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white" placeholder="00000-000" />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-xs font-bold text-slate-600 mb-1">Endereço Completo</label>
                            <input type="text" name="address" value={formData.address} onChange={handleInputChange} required className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white" placeholder="Rua, Número, Bairro" />
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer do Carrinho (Totais e Botão) */}
            {cartItems.length > 0 && (
              <div className="border-t border-slate-200 p-5 bg-white space-y-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                
                {/* Calculadora de Frete */}
                {!isCheckoutStep && (
                  <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <Truck className="h-5 w-5 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Calcular CEP" 
                      className="bg-transparent outline-none text-sm w-full"
                      value={shipping.cep}
                      onChange={(e) => setShipping({...shipping, cep: e.target.value})}
                    />
                    <button 
                      onClick={handleCalculateShipping}
                      className="text-xs font-bold text-green-600 hover:text-green-700 whitespace-nowrap px-2 cursor-pointer"
                    >
                      OK
                    </button>
                  </div>
                )}

                <div className="flex justify-between text-slate-600 text-sm">
                  <span>Subtotal</span>
                  <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-slate-600 text-sm">
                  <span>Frete</span>
                  <span className={shipping.cost === 0 ? "text-green-600 font-semibold" : "text-slate-800"}>
                    {shipping.isCalculated ? `R$ ${shipping.cost.toFixed(2).replace('.', ',')}` : "A calcular"}
                  </span>
                </div>
                <div className="flex justify-between text-slate-900 font-black text-xl border-t border-slate-100 pt-3">
                  <span>Total</span>
                  <span className="text-green-700">R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
                </div>

                {!isCheckoutStep ? (
                  <button 
                    onClick={() => setIsCheckoutStep(true)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-lg cursor-pointer"
                  >
                    <span>Finalizar Compra</span>
                    <Lock className="h-4 w-4" />
                  </button>
                ) : (
                  <div className="space-y-3">
                    <button 
                      type="submit"
                      form="checkout-form"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-colors shadow-lg cursor-pointer"
                    >
                      <CreditCard className="h-5 w-5" />
                      <span>Pagar Agora</span>
                    </button>
                    <button 
                      onClick={() => setIsCheckoutStep(false)}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-3 rounded-xl transition-colors cursor-pointer"
                    >
                      Voltar ao Carrinho
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- BOTÃO FLUTUANTE WHATSAPP --- */}
      <a 
        href="https://wa.me/5516997327255?text=Olá,%20estou%20no%20site%20da%20Voraxmart%20e%20gostaria%20de%20tirar%20uma%20dúvida!" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl transition-transform transform hover:scale-110 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Dúvidas? Fale connosco!
        </span>
      </a>

    </div>
  );
}
