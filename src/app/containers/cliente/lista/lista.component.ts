import { ClienteService } from './../../../shared/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  clientes$: Observable<Cliente[]>;

  constructor(private clienteService: ClienteService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.clientes$ = this.clienteService.clientes$;
  }

  open(content, cliente: Cliente) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 'excluir') {
        this.onExcluir(cliente);
      }
    }, (reason) => { });
  }

  onEditar(cliente: Cliente) {
    this.router.navigate([`/clientes/editar/${cliente.id}`])
  }

  onExcluir(cliente: Cliente) {
    this.clienteService.excluir(cliente.id);
  }

}
