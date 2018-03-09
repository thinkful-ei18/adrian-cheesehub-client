import React from 'react';
import {connect} from 'react-redux';

export class CheeseList extends React.Component {

render () {


  const allCheeses = this.props.cheeses.map((cheese, index) =>
  <li key={index} className="cheese-list-cheese">
    {cheese}
  </li>
);

console.log(this.props.cheeses);

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