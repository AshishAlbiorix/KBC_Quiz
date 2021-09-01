import "bootstrap/dist/css/bootstrap.min.css";

function Questions (props){
    return (
        <>
        <div className="text-left">
            <strong>{props.ques.question}</strong>            
        </div>
        </>
        )
}
export default Questions;