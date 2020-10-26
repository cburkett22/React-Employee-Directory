import React from 'react';
import { MDBDataTable } from 'mdbreact';

const TableData = () => {
  const employees = {
    columns: [
      { label: 'Name', field: 'name', sort: 'asc', width: 150 },
      { label: 'Position', field: 'position', sort: 'asc', width: 270 },
      { label: 'Email', field: 'email', sort: 'asc', width: 270 },
      { label: 'Phone', field: 'phone', sort: 'asc', width: 250 },
      { label: 'Manager', field: 'manager', sort: 'asc', width: 150 },
      { label: 'Department', field: 'department', sort: 'asc', width: 150 },
      { label: 'Salary', field: 'salary', sort: 'asc', width: 100 }
    ],
    rows: [
      { name: 'Tiger Nixon', position: 'System Architect', email: 'tnixon@email.com', phone: '949-123-4567', manager: 'Buzz Lightyear', department: 'Engineering', salary: '$120,000' },
      { name: 'Garrett Winters', position: 'Accountant', email: 'gwinters@email.com', phone: '213-238-3965', manager: 'Woody Allen', department: 'Accounting', salary: '$95,000' },
      { name: 'Ashton Cox', position: 'Junior System Architect', email: 'acox@email.com', phone: '213-295-7834', manager: 'Buzz Lightyear', department: 'Engineering', salary: '$75,000' },
      { name: 'Cedric Kelly', position: 'Senior Software Engineer', email: 'ckelly@email.com', phone: '714-673-9089', manager: 'Mr. Potato-Head', department: 'Engineering', salary: '$160,000' },
      { name: 'Airi Satou', position: 'Assistant Accountant', email: 'asatou@email.com', phone: '949-902-4894', manager: 'Garrett Winters', department: 'Accounting', salary: '$45,000' },
      { name: 'Brielle Williamson', position: 'Integration Specialist', email: 'bwilliamson@email.com', phone: '213-111-5437', manager: 'Little-Bo-Peep', department: 'Engineering', salary: '$120,000' },
      { name: 'Herrod Chandler', position: 'Inside Sales Rep', email: 'hchandler@email.com', phone: '949-928-5812', manager: 'Slinky Dog', department: 'Sales', salary: '$50,000' },
      { name: 'Rhona Davidson', position: 'Software Engineer', email: 'rdavidson@email.com', phone: '949-073-7834', manager: 'Cedric Kelly', department: 'Engineering', salary: '$95,000' },
      { name: 'Colleen Hurst', position: 'Front-End Developer', email: 'churst@email.com', phone: '213-946-0221', manager: 'Sonya Frost', department: 'Web Development', salary: '$90,000' },
      { name: 'Sonya Frost', position: 'Senior Full-Stack Developer', email: 'sfrost@email.com', phone: '714-567-8235', manager: 'Jarod Wheeler', department: 'Web Development', salary: '$150,000' },
      { name: 'Jena Gaines', position: 'Sales Executive', email: 'jgaines@gmail.com', phone: '949-219-1137', manager: 'Shrek', department: 'Sales', salary: '$65,000' },
      { name: 'Charde Marshall', position: 'System Architect', email: 'cmarshall@email.com', phone: '949-287-7254', manager: 'Buzz Lightyear', department: 'Engineering', salary: '$120,000' },
      { name: 'Jonas Alexander', position: 'Accountant', email: 'jalexander@email.com', phone: '213-275-9112', manager: 'Woody Allen', department: 'Accounting', salary: '$95,000' },
      { name: 'Dai Rios', position: 'Junior System Architect', email: 'drios@email.com', phone: '213-555-7763', manager: 'Buzz Lightyear', department: 'Engineering', salary: '$75,000' },
      { name: 'Donna Snider', position: 'Software Engineer', email: 'dsnider@email.com', phone: '714-987-3478', manager: 'Cedric Kelly', department: 'Engineering', salary: '$100,000' },
      { name: 'Gavin Cortez', position: 'HR Manager', email: 'gcortez@email.com', phone: '949-894-7373', manager: 'Fiona', department: 'HR', salary: '$80,000' },
      { name: 'Tatyana Fitzpatrick', position: 'HR Assistant', email: 'tfitzpatrick@email.com', phone: '213-836-1289', manager: 'Gavin Cortez', department: 'HR', salary: '$50,000' },
      { name: 'Haley Kennedy', position: 'Inside Sales Rep', email: 'hkennedy@email.com', phone: '949-773-9032', manager: 'Slinky Dog', department: 'Sales', salary: '$50,000' },
      { name: 'Michael Bruce', position: 'Software Engineer', email: 'mbruce@email.com', phone: '949-989-8075', manager: 'Cedric Kelly', department: 'Engineering', salary: '$95,000' },
      { name: 'Michael Silva', position: 'Front-End Developer', email: 'msilva@email.com', phone: '213-876-3343', manager: 'Sonya Frost', department: 'Web Development', salary: '$90,000' },
      { name: 'Paul Byrd', position: 'Back-End Developer', email: 'sfrost@email.com', phone: '714-687-2155', manager: 'Sonya Frost', department: 'Web Development', salary: '$135,000' },
      { name: 'Prescott Bartlett', position: 'Sales Executive', email: 'pbarlett@gmail.com', phone: '949-343-6653', manager: 'Shrek', department: 'Sales', salary: '$65,000' }
    ]
  };

  return (
    <MDBDataTable
      striped
      hover
      bordered
      small
      data={employees}
    />
  );
}

export default TableData;