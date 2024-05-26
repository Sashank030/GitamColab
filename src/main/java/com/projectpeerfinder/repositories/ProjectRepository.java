package com.projectpeerfinder.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.projectpeerfinder.model.ProjectDetails;


@Repository
public interface ProjectRepository extends JpaRepository<ProjectDetails, Long> {
	public static final String FIND_PROJECTS = "SELECT project_name from project_details";

	@Query(value = FIND_PROJECTS, nativeQuery = true)
	public List<String> findProjects();

}
