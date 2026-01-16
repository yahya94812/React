import { HashRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// Home Page Component
function Home() {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <p>Browse our amazing products!</p>
    </div>
  );
}

// Products List Component
function Products() {
  const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Headphones' }
  ];

  return (
    <div>
      <h2>Our Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Individual Product Detail Component
function ProductDetail() {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Product Details - ID: {id}</h2>
      <p>Showing details for product {id}</p>
      <Link to="/products">← Back to Products</Link>
    </div>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav style={{ padding: '20px', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/products" style={{ marginRight: '15px' }}>Products</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

// Main App
function App() {
  return (
    <>
    
    <HashRouter>
      <Navigation />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<div><h2>About Us</h2></div>} />
          <Route path="*" element={<div><h2>404 - Page Not Found</h2></div>} />
        </Routes>
      </div>
    </HashRouter>
    </>
    
  );
}

export default App;