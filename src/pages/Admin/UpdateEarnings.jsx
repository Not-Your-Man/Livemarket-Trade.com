import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const UpdateEarnings = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [earnings, setEarnings] = useState(0);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://livemarket-trade-server.onrender.com/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleEarningsChange = (event) => {
    setEarnings(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://livemarket-trade-server.onrender.com/api/update-earnings", {
        userId: selectedUser,
       earnings: earnings,    
      });
      setSuccessMessage('Earnings updated successful');

    } catch (error) {
      console.error("Error updating earnings:", error);
      setErrorMessage('Error: Earnings update failed');
      // Clear success message
      setSuccessMessage('');
    }
  };

    // Function to handle navigation back
    const handleBack = () => {
        navigate(-1); // Go back to the previous page
      };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto mt-8">
        <div className="absolute top-0 left-0 p-4 text-white">
          <button onClick={handleBack}>&larr;</button>
        </div>
        <h2 className="text-xl font-semibold mb-4">Update Earnings</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="user" className="mb-2">Select User:</label>
          <select
            id="user"
            value={selectedUser}
            onChange={handleUserChange}
            className="p-2 border rounded-md mb-2"
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <label htmlFor="earnings" className="mb-2">Earnings:</label>
          <input
            type="number"
            id="earnings"
            value={earnings}
            onChange={handleEarningsChange}
            className="p-2 border rounded-md mb-2"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
        </form>
         {/* Display success message */}
         {successMessage && <div className="text-green-500">{successMessage}</div>}
        {/* Display error message */}
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default UpdateEarnings;
