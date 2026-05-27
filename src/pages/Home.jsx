import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Truck, RotateCcw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Home.css';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const trendingProducts = products.filter((p) => p.badge === 'Hot' || p.badge === 'Trending');

  const features = [
    { icon: <Truck size={28} />, title: 'Free Shipping', desc: 'On orders over $100' },
    { icon: <Shield size={28} />, title: 'Secure Payment', desc: '256-bit SSL encryption' },
    { icon: <RotateCcw size={28} />, title: 'Easy Returns', desc: '30-day return policy' },
    { icon: <Zap size={28} />, title: 'Fast Delivery', desc: '2-3 business days' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="hero" id="hero-section">
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />
        <div className="hero__bg-orb hero__bg-orb--3" />
        <div className="container hero__content">
          <div className="hero__text animate-fade-in-up">
            <span className="badge badge-primary hero__badge">✨ New Collection 2026</span>
            <h1 className="hero__title">
              Discover the <br />
              <span className="hero__title-accent">Future of Shopping</span>
            </h1>
            <p className="hero__subtitle">
              Curated premium products from world-class brands. Elevate your lifestyle with our handpicked selection of
              electronics, fashion, and home essentials.
            </p>
            <div className="hero__actions">
              <Link to="/shop" className="btn btn-primary btn-lg" id="hero-shop-now">
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg" id="hero-learn-more">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero__visual animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="hero__card-stack">
              {featuredProducts.slice(0, 3).map((product, idx) => (
                <div
                  key={product.id}
                  className="hero__floating-card"
                  style={{
                    '--offset': `${idx * 30}px`,
                    '--rotate': `${(idx - 1) * 5}deg`,
                    animationDelay: `${idx * 0.3}s`,
                  }}
                >
                  <img src={product.image} alt={product.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="features-bar" id="features-section">
        <div className="container">
          <div className="features-bar__grid">
            {features.map((feat, i) => (
              <div className="features-bar__item" key={i}>
                <div className="features-bar__icon">{feat.icon}</div>
                <div>
                  <h4 className="features-bar__title">{feat.title}</h4>
                  <p className="features-bar__desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section" id="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Explore our carefully curated collections</p>
          <div className="categories-grid">
            {categories.filter((c) => c.id !== 'all').map((cat) => (
              <Link
                to={`/shop?category=${cat.id}`}
                key={cat.id}
                className="category-card glass-card"
                id={`category-${cat.id}`}
              >
                <span className="category-card__icon">{cat.icon}</span>
                <h3 className="category-card__name">{cat.name}</h3>
                <span className="category-card__count">
                  {products.filter((p) => p.category === cat.id).length} Products
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" id="featured-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">Our top picks for you this season</p>
            </div>
            <Link to="/shop" className="btn btn-secondary" id="view-all-btn">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="promo-banner" id="promo-section">
        <div className="container">
          <div className="promo-banner__inner glass-card">
            <div className="promo-banner__content">
              <span className="badge badge-accent">Limited Offer</span>
              <h2 className="promo-banner__title">
                Up to <span className="promo-banner__highlight">50% Off</span>
              </h2>
              <p className="promo-banner__desc">
                Grab our best-selling electronics before the sale ends. Premium quality at unbeatable prices.
              </p>
              <Link to="/shop" className="btn btn-accent btn-lg" id="promo-shop-btn">
                Shop the Sale <ArrowRight size={18} />
              </Link>
            </div>
            <div className="promo-banner__visual">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop" alt="Sale products" />
            </div>
          </div>
        </div>
      </section>

      {/* Trending */}
      {trendingProducts.length > 0 && (
        <section className="section" id="trending-section">
          <div className="container">
            <h2 className="section-title">Trending Now</h2>
            <p className="section-subtitle">What everyone's adding to their cart</p>
            <div className="products-grid">
              {trendingProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
