package com.student.Students.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstname;

    @Column(nullable = false)
    private String lastname;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String yearStudy;

    @Column(nullable = false)
    private String courseName;

    @Column(nullable = false)
    private String reason;


    public Student() {
    }


    public Student(String firstname, String lastname, String email, String yearStudy, String courseName, String reason) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.yearStudy = yearStudy;
        this.courseName = courseName;
        this.reason = reason;
    }

}
