import {Link} from "react-router-dom";
import { useEffect } from "react";

export default function Header() {

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials:'include',
    }).then(response => {
      response.json().then(userInfo => {

      });
    });
  }, []);

    return(
        <header>
        <Link to="/" className="logo">My Blog</Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    );
}