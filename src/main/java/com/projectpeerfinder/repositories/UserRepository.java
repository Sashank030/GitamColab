package com.projectpeerfinder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projectpeerfinder.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
