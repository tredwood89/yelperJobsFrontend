import React from 'react'
import { connect } from 'react-redux'
import { fetchBusiness } from '../actionreducer/actions/action'



class YelperContainer extends React.Component {

  componentDidMpunt(){
    this.props.fetchBusiness()
  }

  render(){

    return(
      <div>
        YELPERJOBS
      </div>
    )
  }

}


const mapStateToProps = (state) => {

  return (
    {
      helloState: state.hello
    }
  )
}


export default connect ( mapStateToProps, { fetchBusiness } )(YelperContainer);
