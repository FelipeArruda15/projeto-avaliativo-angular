import { Component, OnInit } from '@angular/core';
import { Estado } from '../models/Estado';
import { EstadosService } from '../services/estados.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Municipio } from '../models/Municipio';

@Component({
  selector: 'app-pg-cadastrar',
  templateUrl: './pg-cadastrar.component.html',
  styleUrls: ['./pg-cadastrar.component.css']
})
export class PgCadastrarComponent implements OnInit {

  estados = [] as Estado[];

  usuarioForm = new FormGroup({
    estadoSelecionado: new FormControl(),
    municipioSelecionado: new FormControl(),
    nomeUsuario: new FormControl(),
    emailUsuario: new FormControl(),
    telUsuario: new FormControl()
  });

  cidadesEstadoSelecionado = [] as Municipio[];

  constructor(private servico:EstadosService) { }

  ngOnInit(): void {
    this.carregarEstados();
  }

  cadastrar = () => {
    for (let c of this.usuarioForm.value.emailUsuario) {
      if ("[!#$%^&*()+-=[]{};':\"\\|,<>?]/".includes(c)) {
        alert("EMAIL INVÁLIDO!")
        return;
      }
    }
    
  }

  updateMunicipios = () => {
    this.servico.getMunicipios(this.usuarioForm.value.estadoSelecionado)
    .subscribe(retorno => this.cidadesEstadoSelecionado = retorno);
  }

  carregarEstados = () => {
    this.servico.getEstados()
    .subscribe(retorno => this.estados = retorno); 
  }
}
