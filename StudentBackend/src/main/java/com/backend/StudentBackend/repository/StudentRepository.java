package com.backend.StudentBackend.repository;

import com.backend.StudentBackend.model.Student;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StudentRepository {
    private final JdbcTemplate jdbcTemplate;

    public StudentRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Student> studentRowMapper = (rs, rowNum) -> {
        Student student = new Student();
        student.setId(rs.getLong("id"));
        student.setName(rs.getString("name"));
        student.setEmail(rs.getString("email"));
        student.setCourse(rs.getString("course"));
        return student;
    };

    public List<Student> findAll() {
        String sql = "SELECT * FROM students";
        return jdbcTemplate.query(sql, studentRowMapper);
    }

    public Student findById(Long id) {
        String sql = "SELECT * FROM students WHERE id = ?";
        try {
            return jdbcTemplate.queryForObject(sql, studentRowMapper, id);
        } catch (Exception e) {
            return null;
        }
    }

    public void save(Student student) {
        String sql = "INSERT INTO students (name, email, course) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, student.getName(), student.getEmail(), student.getCourse());
    }

    public void update(Long id, Student student) {
        String sql = "UPDATE students SET name = ?, email = ?, course = ? WHERE id = ?";
        jdbcTemplate.update(sql, student.getName(), student.getEmail(), student.getCourse(), id);
    }

    public void delete(Long id) {
        String sql = "DELETE FROM students WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }
} 