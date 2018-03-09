import React from 'react';
import {connect} from 'react-redux';

export function CheeseList (props) {

const allCheeses = props.cheeseList.map((cheese, index) =>
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

const mapStateToProps = state => ({
  cheeses: state.cheeses,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(CheeseList);