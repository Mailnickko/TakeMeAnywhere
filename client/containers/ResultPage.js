import React from 'react';
import ReactDOM from 'react-dom';
import ResultPageEntry from '../pages/Result/ResultPageEntry.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import resultSelector from '../actions/index';
// import session from '..actions/requestHandler';

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.onResultClick = this.onResultClick;
  }

  onResultClick() {
    console.log("Omg you clicked", arguments);
  }

  // componentWillMount() {
  //   session();
  // }
  render() {
    return (
      <div>
        {this.props.results.map((result, i) =>
          <ResultPageEntry
            onClick={this.onResultClick.bind(this)}
            key={i}
            result={result} />
        )}
      </div>
    )
  }
}


//moodData will now be available as props in MoodPage class
function mapStateToProps(state) {
  console.log(state)
  return {
    results: state.results
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({resultSelector: resultSelector}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);