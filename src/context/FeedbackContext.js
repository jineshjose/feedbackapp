import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(
        [
            {
                id:1,
                text: 'this is trxt from context',
                rating: 9,
            },
            {
                id:2,
                text: 'this is trxt from context2',
                rating: 7,
            }
        ]
    )

    const [feedbackEdit, setFeedbackEdit] = useState(
        {
            item:{},
            edit:false,
        }
    )
//-- Delete Feedback --//
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure want to delete?')){
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
        
    }
//-- Add Feedback --//
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        
        
    }
//-- Edit feedback --//
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    //-- Update feedback --//

    const updateFeedback = (id,updItem) => {
        setFeedback( feedback.map( (item) => item.id === id ? {
            ...item, ...updItem
        } : item ))
    }


    return (
        <FeedbackContext.Provider 
        value={
            {  
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback
            }
        }>
            {children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext