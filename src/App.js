
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from "./pages/About";
import Post from "./post/Post";
import { FeedbackProvider  } from "./context/FeedbackContext";


function App(){   
    
    
    
    return (
        <FeedbackProvider>
            <Router>
                <Header text="Hellow world" bgColor = 'blue' fontWeight='bold'/>
                <Routes>
                
                <Route exact path="/" element = {
                    <>
                        <FeedbackForm/>        
                        <FeedbackList/>            
                    </>

                } />
                
                
                    <Route path="/about" element= {<About/>}/>
                        
                    
                    <Route path = '/post/:id/:name/' element = {<Post/>} />
                </Routes>
                
                    
            </Router>
    </FeedbackProvider>
    )

}
export default App;