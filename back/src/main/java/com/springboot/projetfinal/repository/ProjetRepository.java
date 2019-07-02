package com.springboot.projetfinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.projetfinal.model.Projet;

public interface ProjetRepository extends JpaRepository <Projet, Long> {

}