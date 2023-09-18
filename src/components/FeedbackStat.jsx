import PropTypes from 'prop-types'
function FeedbackStat({item}) {
    let avgRating = item.reduce((total,curr)=>{
        return total+curr.rating
    },0)
    avgRating = (avgRating/item.length).toFixed(1).replace(/[.,]0$/,'')   
  return (
    <div>
      <div className="feedback-stat">
        <h4>Total : {item.length}</h4>
        <h4>Avg Rating: {isNaN(avgRating)? 0: avgRating}</h4>
      </div>
    </div>
  )
}
FeedbackStat.propTypes = {
    item:PropTypes.array.isRequired,
}
export default FeedbackStat

