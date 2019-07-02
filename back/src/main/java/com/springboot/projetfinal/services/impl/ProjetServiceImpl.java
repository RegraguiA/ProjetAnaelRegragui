package com.springboot.projetfinal.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.projetfinal.model.Projet;
import com.springboot.projetfinal.repository.ProjetRepository;
import com.springboot.projetfinal.services.ProjetService;




	@Service
	public class ProjetServiceImpl implements ProjetService {
	
		
	@Autowired
	private ProjetRepository projetRepository;
	

	
	@Override
	public List<Projet> findAll() 
		{
		return projetRepository.findAll();
		}

	
	@Override
	public Projet findById(Long id) 
		{	
		return projetRepository.findById(id).get();
		}

	
	@Override
	public Projet save(Projet projet) 
		{
		return projetRepository.save(projet);
		}

	
	public Projet deleteById(Long id) 
		{
		Projet temp = findById(id);
		projetRepository.deleteById(id);
		return temp;
		}

}
