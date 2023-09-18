import PropTypes from 'prop-types'
function Card({children,reverse}) {
    
  return (
    <div className= {`feedbackcont card ` } style={{backgroundColor: reverse ? 'rgba(0,0,0,0.8)':'#fff', color: reverse? 'white':'black'}}>
      {children}
    </div>
  )
}
Card.defaultProps = {reverse:true,}
Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card
