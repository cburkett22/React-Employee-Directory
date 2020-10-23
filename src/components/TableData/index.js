import React, { Component } from 'react'

class TableData extends Component {
  state = {
    employees: [
    { id: 1, name: 'Corey', phone: '(' + 949 + ') ' + 123 + '-' + 4567, email: 'Corey@email.com', title: 'Font-End Developer', manager: 'Buzz Lightyear', department: 'Engineering' },
    { id: 2, name: 'Armando', phone: '(' + 213 + ') ' + 555 + '-' + 7878, email: 'Armando@email.com', title: 'Software Engineer', manager: 'Mr. Potato Head', department: 'Engineering' },
    { id: 3, name: 'Juliana', phone: '(' + 714 + ') ' + 212 + '-' + 9090, email: 'Juliana@email.com', title: 'Back-End Developer', manager: 'Buzz Lightyear', department: 'Engineering' },
    { id: 4, name: 'Saudamini', phone: '(' + 619 + ') ' + 345 + '-' + 9876, email: 'Saudamini@email.com', title: 'Mobile Developer', manager: 'Woody', department: 'Engineering' }
    ]
  }

 renderTableHeader() {
  let header = Object.keys(this.state.employees[0])
  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>
  })
 }

 renderTableData() {
    return this.state.employees.map((employee, index) => {
      const { id, name, phone, email, title, manager, department } = employee //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>{title}</td>
          <td>{manager}</td>
          <td>{department}</td>
        </tr>
      )
    })
  }

 render() {
    return (
        <tbody>
        <tr>{this.renderTableHeader()}</tr>
        {this.renderTableData()}
        </tbody>
    )
  }
}

export default TableData;