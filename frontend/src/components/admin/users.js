import React from 'react';
import { Table } from 'react-bootstrap';

const Users = ({ users }) => {
  return (
    <div className="container mt-5">
      <h2>Registered Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Degree</th>
            <th>College</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{new Date(user.dob).toLocaleDateString()}</td>
              <td>{user.gender}</td>
              <td>{user.degree}</td>
              <td>{user.college}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
