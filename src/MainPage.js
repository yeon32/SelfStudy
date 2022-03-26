import React from 'react';
import { InputGroup, Container, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import styles from './MainPage.module.css'



function MainPage() {
    return (
      <><div>
        <Header />
        <h1> 00님,문제를 내주세요!</h1>
      </div><Container>
          <div>
            <InputGroup size="lg" className={styles.filebutton}>
              <FormControl
                placeholder="파일 이름 작성하기"
                aria-label="파일 이름 작성하기"
                aria-describedby="basic-addon2" />
              <Button variant="primary" id="button-addon2">
                파일 생성
              </Button>
            </InputGroup>
          </div>
        </Container></>
     
      
      
                             
                              
                                   
     
    );    
           
  }
      
  export default MainPage;