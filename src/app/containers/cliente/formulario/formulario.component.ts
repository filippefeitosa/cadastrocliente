import { ClienteService } from './../../../shared/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import states from '../../../shared/utils/states';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  clienteForm: FormGroup;
  ufs = states;
  clienteEncontrado = false;

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private clienteService: ClienteService,
      private route: ActivatedRoute,
      private location: Location,
      private modalService: NgbModal) {

    this.clienteForm = fb.group({
      id: [''],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      localidade: ['', Validators.required],
      uf: ['', Validators.required],
    })
  }

  get isTelaCadastrar() {
    return this.location.path() === '/clientes/cadastrar';
  }

  getControl(controlName: string) {
    return this.clienteForm.get(controlName);
  }

  ngOnInit() {
    if (!this.isTelaCadastrar) {
      this.route.params.subscribe(({id}) => {
        const cliente = this.clienteService.getClienteByID(+id);
        if (cliente) {
          this.clienteForm.patchValue(cliente);
          this.clienteEncontrado = true;
        }
      })
    }
  }

  goBack() {
    this.router.navigate(['/'])
  }

  onSalvar() {
    if (this.clienteForm.get('id').value) {
      this.clienteService.atualizar(this.clienteForm.value)
    } else {
      const id = Math.floor(Math.random() * 10000 + 1);
      this.clienteForm.get('id').patchValue(id);
      this.clienteService.salvar(this.clienteForm.value)
    }
    this.router.navigate(['/'])
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 'salvar') {
        this.onSalvar();
      }
    }, (reason) => { });
  }

}
