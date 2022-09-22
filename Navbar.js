import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 

        <nav className="navbar">
              
            <h1>Featsy</h1>
            <div className="links">
            <Link to="/">Home</Link>
                <Link className="IlmoituksenLuonti" to="/IlmoituksenLuonti">Luo ilmoitus</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;


