import React from 'react';

export default function CheeseList (props) {

const cheeses = props.cheeseList.map(cheese =>
  <li className="cheese-list-cheese">
    {cheese}
  </li>
);

return (
  <div className="cheese-list-wrapper">
    <ul className="cheese-list">
      {cheeses}
    </ul>
  </div>
);

}