import React, { Component } from 'react';
import { connect } from 'react-redux'
import { itemsFetchData } from '../../store/actions/countriesAction'

import api from '../../utils/apiConfig'

class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countries: ''
         }
    }

    componentDidMount() {
        this.props.fetchData(
            `${api.API_ENDPOINT}`
          )
          console.log(this.props)
    }

    render() { 

        


        return ( <div>
            sasas
        </div> );
    }
}
 
const mapStateToProps = state => {
    return {
      countries: state.countries,
      isLoading: state.countriesIsLoading
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchData: url => dispatch(itemsFetchData(url))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Countries)
