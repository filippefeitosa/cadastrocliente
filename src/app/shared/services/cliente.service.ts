import { Injectable } from "@angular/core";
import { Cliente } from './../models/cliente.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private _clientes = new BehaviorSubject<Cliente[]>([]);
  clientes$ = this._clientes.asObservable();

  constructor() {
    const clientes = JSON.parse(localStorage.getItem('clientes'));
    if (clientes) {
      this._clientes.next(clientes);
    }
  }

  private atualizarLocalStorage(clientes: Cliente[]) {
    localStorage.setItem('clientes', JSON.stringify(clientes));
    this._clientes.next(clientes);
  }

  getClienteByID(id: number) {
    const clientes = [...this._clientes.getValue()];
    return clientes.find(cliente => +cliente.id === id);
  }

  salvar(cliente: Cliente) {
    const clientes = [...this._clientes.getValue()];
    clientes.push(cliente);
    this.atualizarLocalStorage(clientes);
  }

  atualizar(cliente: Cliente) {
    const clientes = [...this._clientes.getValue()];
    const index = clientes.findIndex(c => +c.id === +cliente.id);
    clientes[index] = cliente;
    this.atualizarLocalStorage(clientes);
  }

  excluir(id: string) {
    const clientes = [...this._clientes.getValue()];
    const index = clientes.findIndex(c => +c.id === +id);
    clientes.splice(index, 1);
    this.atualizarLocalStorage(clientes);
  }



}
