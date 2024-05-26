package com.projectpeerfinder.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ProjectDetails {
      
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String projectName;
	private String description;
	private String adminId;
	private String requiredPeople;
	private String skills;
	private String ece;
	private String csc;
	private String mech;
	private String civil;
	private String it;
	private String chemical;
	private Date startDate;
	private Date endDate;
	
	public ProjectDetails() {}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAdminId() {
		return adminId;
	}

	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}

	public String getRequiredPeople() {
		return requiredPeople;
	}

	public void setRequiredPeople(String requiredPeople) {
		this.requiredPeople = requiredPeople;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public String getEce() {
		return ece;
	}

	public void setEce(String ece) {
		this.ece = ece;
	}

	public String getCsc() {
		return csc;
	}

	public void setCsc(String csc) {
		this.csc = csc;
	}

	public String getMech() {
		return mech;
	}

	public void setMech(String mech) {
		this.mech = mech;
	}

	public String getCivil() {
		return civil;
	}

	public void setCivil(String civil) {
		this.civil = civil;
	}

	public String getIt() {
		return it;
	}

	public void setIt(String it) {
		this.it = it;
	}

	public String getChemical() {
		return chemical;
	}

	public void setChemical(String chemical) {
		this.chemical = chemical;
	}
		
	
}
