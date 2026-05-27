import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div className={`cart-backdrop ${isOpen ? 'cart-backdrop--open' : ''}`} onClick={closeCart} />

      {/* Drawer */}
      <aside className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`} id="cart-drawer">
        {/* Header */}
        <div className="cart-drawer__header">
          <div className="cart-drawer__title">
            <ShoppingBag size={20} />
            <h2>Your Cart</h2>
            <span className="badge badge-primary">{totalItems}</span>
          </div>
          <button className="btn-icon" onClick={closeCart} id="cart-close-btn" aria-label="Close Cart">
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <ShoppingBag size={48} strokeWidth={1} />
            <p>Your cart is empty</p>
            <button className="btn btn-primary" onClick={closeCart}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {items.map((item) => (
                <div className="cart-item" key={item.id} id={`cart-item-${item.id}`}>
                  <img src={item.image} alt={item.name} className="cart-item__image" />
                  <div className="cart-item__details">
                    <h4 className="cart-item__name">{item.name}</h4>
                    <span className="cart-item__price">${item.price.toFixed(2)}</span>
                    <div className="cart-item__controls">
                      <button
                        className="cart-item__qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="cart-item__qty">{item.quantity}</span>
                      <button
                        className="cart-item__qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        className="cart-item__remove"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="cart-drawer__footer">
              <div className="cart-drawer__summary">
                <div className="cart-drawer__summary-row">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="cart-drawer__summary-row">
                  <span>Shipping</span>
                  <span className="cart-drawer__free">Free</span>
                </div>
                <div className="cart-drawer__summary-row cart-drawer__total">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button className="btn btn-accent btn-lg cart-drawer__checkout" id="checkout-btn">
                Checkout — ${totalPrice.toFixed(2)}
              </button>
              <button className="btn btn-secondary cart-drawer__clear" onClick={clearCart} id="clear-cart-btn">
                Clear Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
