import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { Projet } from '../models/projet';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  projet: Projet[];

  constructor(private token: TokenStorageService, private projetService: ProjetService) { }

  ngOnInit() {
    this.findAll();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

  findAll()
    {
      console.log("test")
      
      return this.projetService.findAll()
      .subscribe(res =>{console.log('Resultat: ', res);this.projet = res});
    }

}
