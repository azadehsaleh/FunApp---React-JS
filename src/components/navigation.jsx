import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import 'bootstrap/dist/css/bootstrap.css';

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0 , transform:'translateX(-100%)'},
    enter: { opacity: 1 , transform:'translateX(0%)' },
    leave: { opacity: 0 , transform:'translateX(-100%)'},
  });

  const maskTransitions = useTransition(showMenu, {
    from: {opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });


  return (
    <nav className="text-light bg-dark p-3">
      <span className="h3">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {maskTransitions(
        (styles, item) => item && 
        <animated.div style={styles}
        className="bg-black bg-opacity-75 position-fixed top-0 start-0 w-100 h-100"
        onClick={() => setShowMenu(!showMenu)}
        >
         </animated.div>
      )}

      {menuTransitions(
        (styles, item) => item && 
        <animated.div style={styles}
        className="menu position-fixed top-0 start-0 bg-white text-dark w-75 h-100 shadow p-3 mb-5 bg-white"
        >
        <span className="fw-bold">The Menu</span>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a href="/home" className=" text-decoration-none">Home</a>
              </li>
            <li className="list-group-item">
            <a href="/weather" className=" text-decoration-none">Weather</a>
            </li>
            <li className="list-group-item">
            <a href="/movieslist" className=" text-decoration-none">Movies</a>
            </li>
            <li className="list-group-item">
            <a href="/restaurants" className=" text-decoration-none">Restaurants</a>
            </li>
            <li className="list-group-item">
            <a href="/favourite" className=" text-decoration-none">My Favourites</a>
            </li>
            <li className="list-group-item">
            <a href="/login" className=" text-decoration-none">Login</a>
            </li>
        </ul>
         
         </animated.div>
      )}
    </nav>
  );
}

export default Navigation;
