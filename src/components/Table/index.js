import React, { Component } from 'react';
import TableData from '../TableData/index';
import "./style.css";

class Table extends Component {
 render() {
    return (
      <table id='table'>
        <TableData />
      </table>
    )
  }
}

export default Table;