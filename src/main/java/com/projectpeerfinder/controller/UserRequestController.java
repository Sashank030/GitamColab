package com.projectpeerfinder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.projectpeerfinder.model.ProjectDetails;
import com.projectpeerfinder.model.UserRequestDetails;
import com.projectpeerfinder.repositories.ProjectRepository;
import com.projectpeerfinder.repositories.UserRequestDetailsRepository;


@Controller
public class UserRequestController {
    
	@Autowired
	UserRequestDetailsRepository userRequestDetailsRepository;
	
	@GetMapping("/userRequestDetails")
	public String getUserRequestDetailsPage(@ModelAttribute("userRequestDetails") UserRequestDetails userRequestDetails) {
		return "userRequestDetails";
	}
	
	@PostMapping("/userRequestDetails")
	public String saveUserRequestDetails(@ModelAttribute("userRequestDetails") UserRequestDetails userRequestDetails, Model model) {
		userRequestDetailsRepository.save(userRequestDetails);
		model.addAttribute("message", "New project is created successfully");
		return "userRequestDetails";
	}
	
	@GetMapping("/userRequestDetailsUpdation")
	public String getUserRequestDetailsUpdationPage(@ModelAttribute("userRequestDetails") UserRequestDetails userRequestDetails) {
		return "userRequestDetailsUpdation";
	}

	@PostMapping("/userRequestDetailsUpdation")
	public String updateUserRequestDetails(@ModelAttribute("userRequestDetails") UserRequestDetails userRequestDetails, Model model) {
		userRequestDetailsRepository.save(userRequestDetails);
		model.addAttribute("message", "New project is created successfully");
		return "userRequestDetailsUpdation";
	}
	
	@GetMapping("/userRequestDetailsList")
	public String UserRequestDetailsPage(Model model) {
		List<UserRequestDetails> listOfUserRequestDetails = userRequestDetailsRepository.findAll();
		model.addAttribute("userRequestDetails", listOfUserRequestDetails);
		return "userRequestDetailsList";
	}

	@GetMapping("/userRequestDetailsListForUpdation")
	public String UserRequestDetailsForUpdation(Model model) {
		List<UserRequestDetails> listOfUserRequestDetails = userRequestDetailsRepository.findAll();
		model.addAttribute("userRequestDetails", listOfUserRequestDetails);
		return "userRequestDetailsListForUpdation";
	}
	

	
}
