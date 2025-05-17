import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css';
import nics_2 from "../../assets/nics_2.png";

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>
        <img src={nics_2} alt="" />
      </div>
      <ul className='nav-menu'>
        {/* Use Link component for routing */}
        <li className='nav-contact'>
          <Link to={"header"}>Quick Link <span>→</span></Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
