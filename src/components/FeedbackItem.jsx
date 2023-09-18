
import Card from "./shared/Card";
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from "../context/FeedbackContext";
import {useContext} from 'react';



function FeedbackItem({item}) {

  const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
  
    
  return (
    
    <div>
      <Card>
        <button className="close" onClick = {()=>deleteFeedback(item.id)}>
          <FaTimes color='purple'/>
        </button>
        <button className="edit-feed" onClick = {()=>editFeedback(item)}>
          <FaEdit color='purple'/>
        </button>
        <div className="feedback-text">          
            {item.text}
        </div>
        <div className="feedback-rating">
            {item.rating}
        </div>
      </Card>
    </div>
  )
}
FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
