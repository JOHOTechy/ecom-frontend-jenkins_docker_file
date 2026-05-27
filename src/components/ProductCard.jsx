import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="product-card glass-card" id={`product-card-${product.id}`}>
      {/* Image */}
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} className="product-card__image" loading="lazy" />
        {product.badge && (
          <span className={`badge ${product.badge === 'New' ? 'badge-primary' : product.badge === 'Hot' ? 'badge-accent' : 'badge-success'} product-card__badge`}>
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="product-card__discount">-{discount}%</span>
        )}
        <div className="product-card__overlay">
          <button
            className="btn btn-primary product-card__add-btn"
            onClick={() => addToCart(product)}
            id={`add-to-cart-${product.id}`}
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="product-card__info">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        {/* Rating */}
        <div className="product-card__rating">
          <Star size={14} fill="#fdcb6e" stroke="#fdcb6e" />
          <span className="product-card__rating-value">{product.rating}</span>
          <span className="product-card__rating-count">({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="product-card__price-row">
          <span className="product-card__price">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="product-card__original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Colors */}
        <div className="product-card__colors">
          {product.colors.map((color, idx) => (
            <span
              key={idx}
              className="product-card__color-dot"
              style={{ background: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
