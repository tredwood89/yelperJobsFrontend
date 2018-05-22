import React from 'react'
import { connect } from 'react-redux'
import { fetchBusiness } from '../actionreducer/actions/action'
import { Query } from "react-apollo";
import gql from "graphql-tag";




class YelperContainer extends React.Component {

  // componentDidMount(){
  //   //this.props.fetchBusiness()
  //
  //   <Query
  //     query={gql`
  //      {
  //        rates(currency: "USD") {
  //          currency
  //          rate
  //        }
  //      }
  //    `}
  //   >
  //   {
  //     ({ loading, error, data }) => {
  //
  //       if (loading) return <p>Loading...</p>;
  //       if (error) return <p>Error :(</p>;
  //
  //       return data.rates.map(({ currency, rate }) => (
  //         <div key={currency}>
  //           <p>{`${currency}: ${rate}`}</p>
  //         </div>
  //       ));
  //     }
  //   }
  // </Query>
  // }

  render(){

    return(
      <div>
         <Query
        query={gql`
         {
           rates(currency: "USD") {
             currency
             rate
           }
         }
       `}
      >
      {
        ({ loading, error, data }) => {

          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.rates.map(({ currency, rate }) => (
            <div key={currency}>
              <p>{`${currency}: ${rate}`}</p>
            </div>
          ));
        }
      }
    </Query>

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
