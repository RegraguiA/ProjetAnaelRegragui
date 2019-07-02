import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjetService } from '../services/projet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-projet',
  templateUrl: './nouveau-projet.component.html',
  styleUrls: ['./nouveau-projet.component.css']
})
export class NouveauProjetComponent implements OnInit {
  projetId: number;
  NouvPro: Projet;
  NouvProEditForm: FormGroup
  projetForm: FormGroup;
  projetService: any;


  constructor(
    private ps: ProjetService,
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
  this.initProjetForm();
  }

  initProjetForm(){
    this.projetForm = this.fb.group({
      nom: '',
      description: '',
      don: 0.0,
      contrePartie: '',
      date: Date.now(),
      url: ''
    })
    
  }

  saveProjet(){
    console.log("a", this.projetForm.value);
    this.ps.save(this.projetForm.value).subscribe(res => {
      this.initProjetForm();
      this.route.navigate(['/projet']);
    }
      )
  }
 
}