import React, { useState, useEffect } from 'react';
@import './styles/Global.css';
@import './styles/Form.css';
@import './styles/Page.css';
@import './src/components/Header.css';
@import './src/components/Footer.css';
@import './src/components/Login.css';
@import './src/components/Products.css';
@import './src/components/About.css';

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setIsAuthenticated(true);
      setCurrentUser(user);
      setCurrentPage('products');
    } else {
      setIsAuthenticated(false);
      setCurrentUser(null);
      setCurrentPage('about');
    }
  }, []);

  const navigateTo = (page) => {
    const protectedPages = ['products'];
    if (protectedPages.includes(page) && !isAuthenticated) {
      setCurrentPage('login');
      alert('Please log in to view this page.');
    } else {
      setCurrentPage(page);
    }
  };

  const handleLoginSuccess = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
    setCurrentPage('about');
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCurrentPage('about');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onLoginSuccess={handleLoginSuccess} navigateTo={navigateTo} />;
      case 'signup':
        return <Signup navigateTo={navigateTo} />;
      case 'products':
        return <Products currentUser={currentUser} />;
      case 'about':
        return <About navigateTo={navigateTo} />;
      case 'contact':
        return <Contact />;
      default:
        return <About navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="app-container">
      <Header navigateTo={navigateTo} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;



