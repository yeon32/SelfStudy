import React, { useState, useEffect, Component} from 'react';
import { InputGroup, Container, FormControl, Button, Dropdown, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import styles from './MakeProblem.module.css'
import Footer from './Footer.js';
import axios from 'axios';
import useSWR from 'swr';


function SolveProblem () {
    return (
<p>문제풀이 페이지</p>
    );
}

export default SolveProblem
