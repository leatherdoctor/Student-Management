import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudent, createStudent, updateStudent } from '../services/api';
import './styles.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: ''
  });
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  useEffect(() => {
    const fetchStudent = async () => {
      if (isEditing) {
        try {
          const data = await getStudent(id);
          setFormData(data);
        } catch (err) {
          setError('Failed to fetch student details');
          console.error('Error fetching student:', err);
        }
      }
    };
    fetchStudent();
  }, [isEditing, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isEditing) {
        await updateStudent(id, formData);
      } else {
        await createStudent(formData);
      }
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to save student');
      console.error('Error saving student:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{isEditing ? 'Edit' : 'Add'} Student</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Course:</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-primary"
          >
            {isEditing ? 'Update' : 'Add'} Student
          </button>
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
