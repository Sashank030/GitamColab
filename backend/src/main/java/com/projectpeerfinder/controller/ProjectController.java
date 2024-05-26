package com.projectpeerfinder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.projectpeerfinder.model.ProjectDetails;
import com.projectpeerfinder.repositories.ProjectRepository;


@Controller
public class ProjectController {
    
	@Autowired
	ProjectRepository projectRepository;
	
	@GetMapping("/projectProposal")
	public String getProjectProposalPage(@ModelAttribute("projectDetails") ProjectDetails projectDetails) {
		return "projectProposal";
	}
	
	@PostMapping("/projectProposal")
	public String saveProject(@ModelAttribute("projectDetails") ProjectDetails projectDetails, Model model) {
		projectRepository.save(projectDetails);
		model.addAttribute("message", "New project is created successfully");
		return "projectProposal";
	}
	
	@GetMapping("/projectsList")
	public String projectsPage(Model model) {
		List<ProjectDetails> listOfProjects = projectRepository.findAll();
		model.addAttribute("projectDetails", listOfProjects);
		return "projectsList";
	}
	
	@GetMapping("/projectNames")
	public String projectNames(Model model) {
		List<String> listOfProjects = projectRepository.findProjects();
		model.addAttribute("projectNames", listOfProjects);
		return "projectNames";
	}
}
