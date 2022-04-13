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

  iUsuarioSelecionado:number = -1;
  selecionado:boolean = false;

  usuarioForm = new FormGroup({
    estado: new FormControl(),
    cidade: new FormControl(),
    nome: new FormControl(),
    email: new FormControl(),
    telefone: new FormControl()
  });
  cidadesEstadoSelecionado = [] as Municipio[];

  success:boolean = false;
  successMsg:string = '';
  error:boolean = false;
  errorMsg:string = '';

  constructor(private estadosService:EstadosService, private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.carregarEstados();
    this.carregarUsuarios();
  }

  selecionar = async (i:number) => {
    this.iUsuarioSelecionado = i;

    let usuario = this.usuarios[i];

    this.usuarioForm.get('estado')?.setValue(usuario.estado.id + "~" + usuario.estado.nome);
    this.usuarioForm.get('nome')?.setValue(usuario.nome);
    this.usuarioForm.get('email')?.setValue(usuario.email);
    this.usuarioForm.get('telefone')?.setValue(usuario.telefone);

    await this.updateMunicipios();

    this.usuarioForm.get('cidade')?.setValue(usuario.cidade);
    this.selecionado = true;
  }

  alterar = () => {
    this.resetarAlert();

    let usuario = this.getUserFromForm();
    usuario.id = this.usuarios[this.iUsuarioSelecionado].id;

    if (!this.validarDados(usuario)) return;    
    
    this.usuariosService.alterar(usuario).subscribe(r => this.usuarios[this.iUsuarioSelecionado] = r);
    this.success = true;
    this.successMsg = 'Alterado!';
    this.selecionado = false;
  }

  cadastrar = () => {
    this.resetarAlert();
    
    let usuario = this.getUserFromForm();

    if (!this.validarDados(usuario)) return;
    
    this.usuariosService.cadastrar(usuario).subscribe(u => this.usuarios.push(u));

    this.success = true;
    this.successMsg = 'Cadastrado!';
  }

  remover = () => {
    this.resetarAlert();
    
    this.usuariosService.remover(this.usuarios[this.iUsuarioSelecionado].id).subscribe();
    this.usuarios.splice(this.iUsuarioSelecionado, 1);

    this.success = true;
    this.successMsg = 'Removido!';
    this.selecionado = false;
  }

  getUserFromForm = ():Usuario => {
    let usuario = new Usuario();
    usuario.id = 0;
    usuario.nome = this.usuarioForm.value.nome;
    usuario.telefone = this.usuarioForm.value.telefone;
    usuario.email = this.usuarioForm.value.email;
    usuario.estado = this.usuarioForm.value.estado ? {
      nome: this.usuarioForm.value.estado.split("~")[1],
      id: this.usuarioForm.value.estado.split("~")[0]
    } : {} as Estado;
    usuario.cidade = this.usuarioForm.value.cidade;
    return usuario;
  }

  validarDados = (usuario:Usuario):boolean => {
    if (!usuario.nome) {
      this.error = true;
      this.errorMsg = 'Preencha o nome!';
      return false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(usuario.email)){
      this.error = true;
      this.errorMsg = 'Email inválido!';
      return false;
    }

    if (Object.entries(usuario.estado).length == 0) {
      this.error = true;
      this.errorMsg = 'Selecione um estado!';
      return false;
    }
    if (!usuario.cidade) {
      this.error = true;
      this.errorMsg = 'Selecione uma cidade!';
      return false;
    }

    if (this.usuarios.filter(u => u.nome.toLowerCase() == usuario.nome.toLowerCase()
         && u.id != usuario.id).length > 0) {
      this.error = true;
      this.errorMsg = 'Nome já cadastrado!';
      return false;
    }

    if (!usuario.telefone || usuario.telefone.length < 11) {
      this.error = true;
      this.errorMsg = 'Telefone inválido!';
      return false;
    }
    return true;
  }

  resetarAlert = () => {
    this.success = false;
    this.error = false;
    this.errorMsg = '';
  }

  updateMunicipios = () => {
    return new Promise<void>(resolve => {
      let estadoSelecionado = this.usuarioForm.value.estado.split("~")[0];

      this.estadosService.getMunicipios(estadoSelecionado)
      .subscribe(retorno => {
        this.cidadesEstadoSelecionado = retorno;
        resolve();
      });
    })
  }

  carregarEstados = () => {
    this.estadosService.getEstados()
    .subscribe(retorno => this.estados = retorno); 
  }

  carregarUsuarios = () => {
    this.usuariosService.getAll().subscribe(retorno => this.usuarios = retorno);
  }
}
