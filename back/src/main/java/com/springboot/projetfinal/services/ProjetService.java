package com.springboot.projetfinal.services;

import java.util.List;

import com.springboot.projetfinal.model.Projet;


public interface ProjetService {

	public List<Projet> findAll();
	
	public Projet findById(Long id);
	
	public Projet save(Projet projet);
	
	public Projet deleteById(Long id);
	
}
