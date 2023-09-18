import PropTypes from 'prop-types'
function Button({type,version,children,isDisabled}) {
  return (
    <>
      <button type = {type} className = {`btn btn-${version}`} disabled = {isDisabled}>
        {children}
      </button>
    </>
  )
}
Button.defaultProps = {
    type:'submit',
    version:'secondary',
    isDisabled:false,
}
Button.propTypes = {
    type:PropTypes.string.isRequired,
    version:PropTypes.string,
    children:PropTypes.node.isRequired,
    isDisabled:PropTypes.bool,
}

export default Button
