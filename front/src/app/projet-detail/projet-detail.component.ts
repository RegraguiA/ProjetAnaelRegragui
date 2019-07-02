import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../services/projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../models/projet';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.css']
})
export class ProjetDetailComponent implements OnInit {
  projetId: number;
  pro: Projet;
  projetForm: FormGroup;


  constructor(
      private ps: ProjetService,
      private router: ActivatedRoute,
      private route: Router,
      private fb: FormBuilder
    ) { }

  ngOnInit() 
    {
      this.initProjetForm();
      this.router.paramMap
        .subscribe(res => 
          {
          this.projetId = +res.get('id');

          this.findById(this.projetId);
          
          })
    }
    findById(pid: number)
      {this.ps.findById(pid)
        .subscribe(res =>
          {
            this.pro = res;
          })
        
      }
    
    test(event:any){
      //console.log("hello"+event.target.value);
      //console.log("le projet a "+this.pro.don+" de dons");
      // this.pro.don += +event.target.value;
     
      
      let valeurDuDon = +event.target.value;
      this.pro.don = this.pro.don + valeurDuDon;
      this.ps.save(this.pro).subscribe(
        res => {
          console.log("fini"); 
        }
      );
      console.log("le projet a "+this.pro.don+" de dons");
      
    }

    initProjetForm()
    {
      this.projetForm = this.fb.group
      ({
        nom: [''], description: [''], don: [''], contrePartie:[''], Date: ['']
      });
    }
}
