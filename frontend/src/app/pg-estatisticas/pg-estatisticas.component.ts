import { Component, OnInit } from '@angular/core';
import { Estado } from '../models/Estado';
import { Usuario } from '../models/Usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-pg-estatisticas',
  templateUrl: './pg-estatisticas.component.html',
  styleUrls: ['./pg-estatisticas.component.css']
})
export class PgEstatisticasComponent implements OnInit {
  estados:Estado[] = [];
  quantidadePessoasEstados:Map<number, number> = new Map();

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.carregarEstadosCadastrados();
  }

  getEstados = ():Promise<Usuario[]> => {
    return new Promise(resolve => {
      this.usuariosService.getAll().subscribe(retorno => resolve(retorno));
    })
  }

  carregarEstadosCadastrados = async () => {
    let usuarios = await this.getEstados();

    for (let u of usuarios) {
      if (!this.estados.find(e => e.id == u.estado.id)) {
        this.estados.push(u.estado);
        this.quantidadePessoasEstados.set(u.estado.id, 1);
      } else {
        let pessoasNoEstado:any = this.quantidadePessoasEstados.get(u.estado.id);
        
        this.quantidadePessoasEstados.set(u.estado.id, pessoasNoEstado + 1);
      }
    }
  }
}
