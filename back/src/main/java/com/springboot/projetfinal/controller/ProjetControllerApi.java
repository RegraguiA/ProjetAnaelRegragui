package com.springboot.projetfinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.springboot.projetfinal.model.Projet;
import com.springboot.projetfinal.services.ProjetService;



@Controller
@RequestMapping(value = "/api/projet")

public class ProjetControllerApi {

	@Autowired
	private ProjetService projetService;
	
	
	@GetMapping(value = "/{projetId}")
	public Projet findById(@PathVariable("projetId")Long id) {
		return projetService.findById(id);
	}
	
	@GetMapping(value = "")
	public List<Projet> findAll(){
		return projetService.findAll();
	}
	
	
	@PostMapping(value = "")
	public Projet save(@RequestBody Projet projet) {
		return projetService.save(projet);
	}
	
	@GetMapping(value = "/{id}/delete")
	public Projet deleteById(@PathVariable("id")Long id) {
		return projetService.deleteById(id);
		
	}
	
}
