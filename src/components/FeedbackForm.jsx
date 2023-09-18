
import {useState, useContext, useEffect} from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackForm() {
    const[rating, setRating] = useState('')
    const{addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext) 
 
    const[text, setText] = useState('')
    const handleTextchange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Your message is short')
            
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)        
    }
    const[message, setMessage] = useState('')
    const[btnDisabled, setBtnDisabled] = useState(true)
    const handleSubmit = (e) => {        
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else{
                addFeedback(newFeedback);
            }
            
            setText('')
            
        }
    }

    //-- Edit --//
    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])
    
  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
            <h5>How would you rate our service?</h5>
            <RatingSelect select  = {(rating)=>{setRating(rating) }} />
        <div className="input-group">
            <input type="text" placeholder="Enter your review" onChange={handleTextchange} value={text}/>
            <Button isDisabled = {btnDisabled}>Send</Button>
        </div>
        {message && <div className="msg"> {message} </div>}
        </form>
      </Card>
    </div>
  )
}

export default FeedbackForm
