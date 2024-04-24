import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Users from './users'; // Import the Users component

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data from the backend when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  return <Users users={users} />;
};

export default UsersPage;
