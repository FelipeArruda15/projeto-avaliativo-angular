import { Component, OnInit } from '@angular/core';
import { Estado } from '../models/Estado';
import { EstadosService } from '../services/estados.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Municipio } from '../models/Municipio';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-pg-cadastrar',
  templateUrl: './pg-cadastrar.component.html',
  styleUrls: ['./pg-cadastrar.component.css']
})
export class PgCadastrarComponent implements OnInit {
  usuarios = [] as Usuario[];
  estados = [] as Estado[];

  usuarioForm = new FormGroup({
    estadoSelecionado: new FormControl(),
    municipioSelecionado: new FormControl(),
    nomeUsuario: new FormControl(),
    emailUsuario: new FormControl(),
    telUsuario: new FormControl()
  });
  cidadesEstadoSelecionado = [] as Municipio[];

  success:boolean = false;
  error:boolean = false;
  errorMsg:string = '';

  constructor(private estadosService:EstadosService, private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.carregarEstados();
  }

  cadastrar = () => {
    let email = this.usuarioForm.value.emailUsuario;
    let telefone = this.usuarioForm.value.telUsuario;

    this.resetarAlert();

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      this.error = true;
      this.errorMsg = 'Email inválido!';
      return;
    }

    if (telefone.length < 11) {
      this.error = true;
      this.errorMsg = 'Telefone inválido!';
      return;
    }

    let usuario = new Usuario();
    usuario.id = 0;
    usuario.nome = this.usuarioForm.value.nomeUsuario;
    usuario.telefone = telefone;
    usuario.email = email;
    usuario.estado = this.usuarioForm.value.estadoSelecionado.split("~")[1];
    usuario.cidade = this.usuarioForm.value.municipioSelecionado;
    
    this.usuariosService.cadastrar(usuario).subscribe(r => console.log(r));

    this.success = true;
  }

  resetarAlert = () => {
    this.success = false;
    this.error = false;
    this.errorMsg = '';
  }

  updateMunicipios = () => {
    let estadoSelecionado = this.usuarioForm.value.estadoSelecionado.split("~")[0];

    this.estadosService.getMunicipios(estadoSelecionado)
    .subscribe(retorno => this.cidadesEstadoSelecionado = retorno);
  }

  carregarEstados = () => {
    this.estadosService.getEstados()
    .subscribe(retorno => this.estados = retorno); 
  }
}
