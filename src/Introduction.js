import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container} from 'react-bootstrap';

import Introduction_image from "./images/Introduction_image.png";
import styles from "./Introduction.module.css";
import Header from "./Header.js";



function Introduction() {
    return (
     <><div>
        <Header />
      </div>
      <div className={styles.Introduction_image}>
      <img
            src={Introduction_image} />
      </div>
      </>



          );

        }


        export default Introduction;