import React, { Component } from 'react'
import { connect } from 'react-redux'
import { countriesFetchData } from '../../store/actions/countriesAction'


class Countries extends Component {
  state = {}

    componentDidMount() {
      this.props.fetchData('https://restcountries.eu/rest/v2')
      console.log(this.props)
    }

    render() { 

      const countries = this.props.countries.countries ? this.props.countries.countries : []
      
      console.log(countries)

        return ( 
          countries.map(country => <div key={country.alpha2Code}>
            {country.name}
          </div>)
         );
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
      fetchData: url => dispatch(countriesFetchData(url))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Countries)
