import axios from "axios";
import { React, useEffect } from "react";

const  QuestionList = () => {
    useEffect(() => {
               axios.get('http://3.38.227.105:8081/').then(response => {
                   console.log(response)
               });
    },[]);

};

export default QuestionList;