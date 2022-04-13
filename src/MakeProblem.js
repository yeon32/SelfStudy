import React from 'react';
import { InputGroup, Container, FormControl, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import styles from './MakeProblem.module.css'
import Footer from './Footer.js';
import Users from './Users.js';


function MakeProblem () {
    return (
        <>
        <div className={styles.bgcolor}>
        <Header />

        <div className={styles.text}>문제 출제하기!</div>

        <Dropdown>
        <div className={styles.dropdown}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
         Category
        </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
      </div>
      </Dropdown>

      <div className={styles.content}>
            <label>✔문제</label>
            <div>
                <input type="textarea" size={90} name="problem" placeholder="문제 작성하기"  className={styles.hight} />

            </div>
            <label>✔정답</label>
            <div>
                <input type="text" size={90}  name="solve" placeholder="정답 작성하기" className={styles.hight} />
            </div>
            <Users></Users>
        </div>
        
     <div className={styles.makebutton}>
      <Button variant="primary" size="lg">
        문제 만들기
      </Button>
     </div> 


     </div> 

     <Footer />         
        </>

    );
}


export default MakeProblem;