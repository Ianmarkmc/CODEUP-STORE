import React from 'react';
import './Header.css';

function Header({ navigateTo, isAuthenticated, handleLogout }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">CODE UP</h1>
        <nav>
          <ul className="header-nav-list">
            {!isAuthenticated && (
              <>
                <li>
                  <button
                    onClick={() => navigateTo('login')}
                    className="header-nav-button"
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('signup')}
                    className="header-nav-button"
                  >
                    Signup
                  </button>
                </li>
              </>
            )}
            {isAuthenticated && (
              <>
                <li>
                  <button
                    onClick={() => navigateTo('about')}
                    className="header-nav-button"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('products')}
                    className="header-nav-button"
                  >
                    IT Services
                  </button>
                </li>
              </>
            )}
            <li>
              <button
                onClick={() => navigateTo('contact')}
                className="header-nav-button"
              >
                Contact Us
              </button>
            </li>
            {isAuthenticated && (
              <li>
                <button
                  onClick={handleLogout}
                  className="header-logout-button"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

