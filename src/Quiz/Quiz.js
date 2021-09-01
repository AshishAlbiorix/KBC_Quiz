import React, { useState, useEffect } from "react";
import axios from "axios";
import Timer from "./Timer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import Questions from "./Questions";
import Answer from "./Answer"
function Quiz() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=10`)
      .then((item) => {
        setData(item.data.results);
      })
      .catch((error) => {
        console.warn("Something Went Wrong ", Error);
      });
  }, []);

  const nextStep = () => {
    setCount((prevCount) => prevCount + 1);
  };
  function getDemoData(datas){
    if(datas != ''){
      data.map((item, index) => 
        datas == item.correct_answer ? console.log("Right Answer") : console.log('Wrong Answer')
      );
    }
  }
  return (
    <div className="container">
      <h1>
        Quiz
        <Timer />
      </h1>
      {data.map((item, index) => {
        
        const answer_in = item.incorrect_answers;
        const answer = answer_in.concat(item.correct_answer);
        return (
          <div className="que-block tab" key={index}>
            {
              count == index ?
              <>
              <Questions ques={item} />
              <Answer alert={getDemoData} wrong={item.incorrect_answers} right={item.correct_answer}/>
              </>
            : null}
          </div>
        );
      })}
      {count > 8 ? (
        <div>
          <Button type="submit">submit</Button>
        </div>
      ) : (
        <div>
          <Button type="button" onClick={nextStep}>
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
export default Quiz;
