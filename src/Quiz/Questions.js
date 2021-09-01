import "bootstrap/dist/css/bootstrap.min.css";
import Answer from "./Answer"
function Questions (props){
    return (
        <>
        <div className="text-left">
            <strong>{props.ques.question}</strong>            
        </div>
        <Answer wrong={props.ques.incorrect_answers} right={props.ques.correct_answer}/>
        </>
        )
}
export default Questions;