package com.springboot.projetfinal.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Projet {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private String description;
	private Double don;
	
	public Projet() {}

	public Projet(Long id, String nom, String description, Double don) {
		super();
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.don = don;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getDon() {
		return don;
	}

	public void setDon(Double don) {
		this.don = don;
	}

	@Override
	public String toString() {
		return "Projet [id=" + id + ", nom=" + nom + ", description=" + description + ", don=" + don + "]";
	}
	
	
	
}
