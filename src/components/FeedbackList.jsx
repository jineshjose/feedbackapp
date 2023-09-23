import {motion, AnimatePresence} from 'framer-motion';
import FeedbackItem from "./FeedbackItem";
import FeedbackStat from "./FeedbackStat";
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';
import { useContext } from 'react';
function FeedbackList() {
  
  
  const {feedback,isLoading} = useContext(FeedbackContext)
  
    if(!isLoading && (!feedback || feedback.length === 0)){
        return( "no feedback yet")
    }
  return isLoading ? <Spinner/> : (
    <div>
      <FeedbackStat item={feedback} />
      <AnimatePresence>
      {feedback.map((item)=>(
        <motion.div 
         key = {item.id}
         initial = {{opacity:0}}
         animate = {{opacity:1}}
         exit = {{opacity:0}}
        >
          <FeedbackItem item = {item} key={item.id} />
         
        </motion.div>
      ))}
      
      </AnimatePresence>
      
    </div>
  )
}


export default FeedbackList
