import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStudents, deleteStudent } from '../services/api';
import './styles.css';

const DashboardPage = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (err) {
      setError('Failed to fetch students');
      console.error('Error fetching students:', err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAdd = () => {
    navigate('/student/add');
  };

  const handleEdit = (id) => {
    navigate(`/student/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      await fetchStudents(); // Refresh the list
    } catch (err) {
      setError('Failed to delete student');
      console.error('Error deleting student:', err);
    }
  };

  return (
    <div className="container">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Students List</h2>
        <button
          onClick={handleAdd}
          className="btn btn-success"
        >
          Add Student
        </button>
      </div>
      <div className="table-container">
        {error && <div className="error-message">{error}</div>}
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>
                  <button
                    onClick={() => handleEdit(student.id)}
                    className="btn btn-primary"
                    style={{ marginRight: '8px' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
