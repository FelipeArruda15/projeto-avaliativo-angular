import { Component, OnInit } from '@angular/core';
import { Estado } from '../models/Estado';
import { EstadosService } from '../services/estados.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pg-cadastrar',
  templateUrl: './pg-cadastrar.component.html',
  styleUrls: ['./pg-cadastrar.component.css']
})
export class PgCadastrarComponent implements OnInit {

  estados = [] as Estado[];

  usuarioForm = new FormGroup({
    estadoSelecionado: new FormControl(),
    municipioSelecionado: new FormControl()
  });

  cidadesEstadoSelecionado = [] as any[];

  constructor(private servico:EstadosService) { }

  ngOnInit(): void {
    this.carregarEstados();
  }

  cadastrar = () => {

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
