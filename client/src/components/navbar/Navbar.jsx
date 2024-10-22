import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const nav = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span
            className="logo"
            style={{
              fontSize: '32px', // You can adjust this size for a bigger header
              fontWeight: 'bold',
              textTransform: 'uppercase', // Makes the text all uppercase
              letterSpacing: '2px', // Adds spacing between letters for a better look
            }}
          >
            lamabooking
          </span>
        </Link>

        {user ? (
          <div className="navItems">
            <span>{user.username}</span>
            <button
              className="navButton"
              onClick={() => {
                dispatch({ type: 'LOGOUT' });
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={() => nav('/register')}>
              Register
            </button>
            <button className="navButton" onClick={() => nav('/login')}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
