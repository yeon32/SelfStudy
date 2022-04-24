import React, { useState, useEffect, Component} from 'react';
import { InputGroup, Container, FormControl, Button, Dropdown, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import styles from './MakeProblem.module.css'
import Footer from './Footer.js';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json())

export default function Test () {
    let url = "http://3.38.227.105:8080/question/create"
    const { data :item , error } = useSWR(url, fetcher); 
    if (error) return "에러발생";
    if(!item) return "로딩중";

  return (
      <div>
       /* {item.map((item, index) => (
              <div key={index}>
              <p> {item.question_id}</p>
              <p> {item.wrong}</p>
              <p> {item.user_id} </p>
              <p> {item.contents} </p>
              <p> {item.answer} </p>
              <p> {item.classification} </p>
              </div>
          ))}
          */

        </div>
  )
      }

      




      /*

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


*/



