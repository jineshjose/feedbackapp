import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'


function Header({text,bgColor,fontWeight}) {
    const headerStyles = {color:bgColor, fontWeight:fontWeight}
  return (
    <header>
        <h1 style={headerStyles}>{text}</h1>
        <div className='desc'>Description</div>
        <nav>
          <NavLink activeClassName="active" to = '/'>Home</NavLink>
          <NavLink activeClassName="active" to = '/about'>About</NavLink>
        </nav>
    </header>
  )
}

Header.defaultProps = {
    text: "feedback UI"
}
Header.type = {
    text: PropTypes.string
}

export default Header


