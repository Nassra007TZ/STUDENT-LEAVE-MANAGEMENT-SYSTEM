package com.student.Students.Repository;

import com.student.Students.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface studentrepository extends JpaRepository<Student, Long> {
    List<Student> findByFirstnameContainingIgnoreCaseAndCourseNameContainingIgnoreCase(String firstname, String courseName);
}
