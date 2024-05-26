package com.projectpeerfinder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projectpeerfinder.model.ProjectDetails;
import com.projectpeerfinder.model.UserRequestDetails;

@Repository
public interface UserRequestDetailsRepository extends JpaRepository<UserRequestDetails, Long> {


}
