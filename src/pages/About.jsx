import Card from "../components/shared/Card"
import { Link } from "react-router-dom"


function About() {
  return (
    <Card>
        <h2>This is the 'about' heading</h2>
        <p>This is about the app: Its a feedback app for products and services</p>
        <Link to="/">Go to Home page</Link>
    </Card>
  )
}

export default About
