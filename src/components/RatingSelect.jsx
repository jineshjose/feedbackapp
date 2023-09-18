import {useState, useContext, useEffect} from "react";
import FeedbackContext from "../context/FeedbackContext";
function RatingSelect({select}) {

    const{feedbackEdit} = useContext(FeedbackContext)
    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    },[feedbackEdit])
    
    const[selected, setSelected] = useState(5)
    let handleChange = (e)=>{
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
  return (
    <div>
      <ul className="rating-selector">
        <li>
            <input type="radio" name="rating" id=""  value="1"  onChange={handleChange} checked={selected === 1} />
        </li>
        <li>
            <input type="radio" name="rating" id=""  value="2" onChange={handleChange} checked={selected === 2}/>
        </li>
        <li>
            <input type="radio" name="rating" id="" value="3"  onChange={handleChange} checked={selected === 3}/>
        </li>
        <li>
            <input type="radio" name="rating" id=""  value="4" onChange={handleChange} checked={selected === 4}/>
        </li>
        <li>
            <input type="radio" name="rating" id=""  value="5" onChange={handleChange} checked={selected === 5}/>
        </li>
        <li>
            <input type="radio" name="rating" id=""  value="6" onChange={handleChange} checked={selected === 6}/>
        </li>
        <li>
            <input type="radio" name="rating" id="" value="7"  onChange={handleChange} checked={selected === 7}/>
        </li>
        <li>
            <input type="radio" name="rating" id=""  value="8" onChange={handleChange} checked={selected === 8}/>
        </li>
        <li>
            <input type="radio" name="rating" id="" value="9"  onChange={handleChange} checked={selected === 9}/>
        </li>
        <li>
            <input type="radio" name="rating" id=""  value="10" onChange={handleChange} checked={selected === 10}/>
        </li>
      </ul>
    </div>
  )
}

export default RatingSelect
