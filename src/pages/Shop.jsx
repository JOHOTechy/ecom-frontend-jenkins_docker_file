import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Grid3X3, LayoutList } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Shop.css';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const activeCategory = searchParams.get('category') || 'all';

  const handleCategoryChange = (catId) => {
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <main className="shop-page">
      {/* Header */}
      <section className="shop-header" id="shop-header">
        <div className="container">
          <h1 className="shop-header__title">
            {activeCategory === 'all'
              ? 'All Products'
              : categories.find((c) => c.id === activeCategory)?.name || 'Products'}
          </h1>
          <p className="shop-header__subtitle">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </section>

      <div className="container shop-layout">
        {/* Sidebar Filters */}
        <aside className="shop-sidebar" id="shop-sidebar">
          <div className="shop-sidebar__section">
            <h3 className="shop-sidebar__heading">
              <SlidersHorizontal size={16} />
              Categories
            </h3>
            <div className="shop-sidebar__categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`shop-sidebar__cat-btn ${activeCategory === cat.id ? 'shop-sidebar__cat-btn--active' : ''}`}
                  onClick={() => handleCategoryChange(cat.id)}
                  id={`filter-${cat.id}`}
                >
                  <span className="shop-sidebar__cat-icon">{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className="shop-sidebar__cat-count">
                    {cat.id === 'all'
                      ? products.length
                      : products.filter((p) => p.category === cat.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="shop-main">
          {/* Toolbar */}
          <div className="shop-toolbar" id="shop-toolbar">
            <div className="shop-toolbar__sort">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                className="shop-toolbar__select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
            <div className="shop-toolbar__view">
              <button
                className={`btn-icon ${viewMode === 'grid' ? 'btn-icon--active' : ''}`}
                onClick={() => setViewMode('grid')}
                id="view-grid"
                aria-label="Grid view"
              >
                <Grid3X3 size={16} />
              </button>
              <button
                className={`btn-icon ${viewMode === 'list' ? 'btn-icon--active' : ''}`}
                onClick={() => setViewMode('list')}
                id="view-list"
                aria-label="List view"
              >
                <LayoutList size={16} />
              </button>
            </div>
          </div>

          {/* Products */}
          <div className={`products-grid ${viewMode === 'list' ? 'products-grid--list' : ''}`} id="products-container">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="shop-empty">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
