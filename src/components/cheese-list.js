import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';
export class CheeseList extends React.Component {

componentDidMount() {
this.props.dispatch(fetchCheeses());
}

render () {
  const allCheeses = this.props.cheeses.map((cheese, index) =>
  <li key={index} className="cheese-list-cheese">
    {cheese}
  </li>
);

return (
  <div className="cheese-list-wrapper">
    <ul className="cheese-list">
      {allCheeses}
    </ul>
  </div>
);
  }

}

const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);