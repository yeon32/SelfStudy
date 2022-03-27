import React from 'react';
import { InputGroup, Container, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import styles from './MainPage.module.css'
import Footer from './Footer.js';



function MainPage() {
    return (
      <><div>
        <Header />
        <div className={styles.text}>00님, 문제를 내주세요!</div>
         
      </div><Container>
          <div>
            <InputGroup size="lg" className={styles.filebutton}>
              <FormControl
                placeholder="폴더 이름 작성하기"
                aria-label="폴더 이름 작성하기"
                aria-describedby="basic-addon2" />
              <Button variant="info" id="button-addon2">
                폴더 생성
              </Button>
            </InputGroup>
          </div>
        </Container>
        <Footer/></>                       
                                   
     
    );    
           
  }
      
  export default MainPage;