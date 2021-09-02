import React, { useState, useEffect } from "react";
import axios from "axios";
import Questions from "./Questions";
import Answer from "./Answer"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
function Quiz(){
    const [getQuestion,setGetQuestion] = useState([]);
    const [ans,setAns] = useState([]);
    const [count, setCount] = useState(0);
    function getData(){
        axios.get(`https://opentdb.com/api.php?amount=1`)
        .then((response)=>{
            setGetQuestion(response.data.results[0])
            if(response.data.results[0].incorrect_answers != ''){
                setAns(response.data.results[0].incorrect_answers.concat(response.data.results[0].correct_answer))
            }
        }).catch((error)=>{
            console.log("Something Went Wrong",error)
        });
        
    }
    useEffect(()=>{
        getData()
    },[])
    function getDemoData(data){
        console.log(data)
    }
    return (
    <div className="container">
        <div className="que-block tab">
            { count }
            <Questions questions={getQuestion.question}/>
            <Answer ans={ans} alert={getDemoData}/>
            <Button onClick={getData} >Next</Button>
        </div>
    </div>
    )
} export default Quiz;