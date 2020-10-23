import React, { Component } from 'react';
import TableData from '../TableData/index';
import "./style.css";

class Table extends Component {
 render() {
    return (
      <div>
        <table id='table'>
          <TableData />
        </table>
      </div>
    )
  }
}

export default Table;