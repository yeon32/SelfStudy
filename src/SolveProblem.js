import React, { useState, useEffect, Component} from 'react';
import { InputGroup, Container, FormControl, Button, Dropdown, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import styles from './SolveProblem.module.css'
import Footer from './Footer.js';
import axios from 'axios';
import useSWR from 'swr';


function SolveProblem () {
    return (
    
    <>
    <Header />
    <div className={styles.text}>문제 풀기!</div>

    <div className={styles.section}>
    <div className={styles.content}>
    <label>✔정답</label>
            <div>
                <input type="text" size={90}  name="solve" placeholder="정답 작성하기" className={styles.hight} />
            </div>

    </div>
    </div>

     <Footer />    
    
    
    </>

    );
}

export default SolveProblem
