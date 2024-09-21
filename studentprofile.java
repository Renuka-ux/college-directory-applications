package com.college.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "student_profile")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentProfile {
    @Id
    private Long userId;

    private String photo;
    
    @ManyToOne
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;

    private String year;
}
