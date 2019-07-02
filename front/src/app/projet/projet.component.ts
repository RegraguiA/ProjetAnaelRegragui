import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../services/projet.service';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Projet} from '../models/projet';



@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  projetForm: FormGroup;
  projet: Projet[];

  constructor(
    private fb: FormBuilder,
    private projetService: ProjetService) {}
    private route: Router


  ngOnInit() 
    {
      this.initProjetForm();
      this.findAll();
    }

  initProjetForm()
    {
      this.projetForm = this.fb.group
      ({
        nom: [''], description: [''], don: [''], contrePartie:[''], Date: ['']
      });
    }

  save()
    {
    console.log('Projet form values: ', this.projetForm.value);
    this.projetService.save(this.projetForm.value).subscribe(res => {
        console.log('Nouveau Projet: ', res);
        this.initProjetForm();
        this.findAll();
        this.route.navigate(['projet']);
        });
    }

  findAll()
    {
      return this.projetService.findAll()
      .subscribe(res =>{console.log('Resultat: ', res);this.projet = res});
    }

  delete(id: number)
    {
    this.projetService.delete(id)
    .subscribe( res => {console.log("deleted projet: ", res);this.findAll()});
    }     

}
