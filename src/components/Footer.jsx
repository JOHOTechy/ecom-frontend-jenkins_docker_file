import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">◆</span>
              <span className="footer__logo-text">ShopVerse</span>
            </Link>
            <p className="footer__tagline">
              Premium products, curated for you. Experience shopping reimagined with cutting-edge design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop All</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer__col">
            <h4 className="footer__heading">Categories</h4>
            <ul className="footer__list">
              <li><Link to="/shop?category=electronics">Electronics</Link></li>
              <li><Link to="/shop?category=fashion">Fashion</Link></li>
              <li><Link to="/shop?category=accessories">Accessories</Link></li>
              <li><Link to="/shop?category=home">Home & Living</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__col">
            <h4 className="footer__heading">Stay Updated</h4>
            <p className="footer__newsletter-text">Subscribe for exclusive deals and early drops.</p>
            <div className="footer__newsletter">
              <input type="email" placeholder="your@email.com" className="footer__input" id="newsletter-email" />
              <button className="btn btn-primary" id="newsletter-subscribe">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} ShopVerse. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
