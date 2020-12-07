import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  get escondeCadastrar() {
    return this.location.path() === '/clientes/lista';
  }

  ngOnInit() {}

  onCadastrarClick() {
    this.router.navigate(['/clientes/cadastrar'])
  }

}
