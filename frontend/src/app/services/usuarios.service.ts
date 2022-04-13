import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  cadastrar(u:Usuario):Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:3000/usuarios', u);
  }

  alterar(u:Usuario):Observable<Usuario> {
    return this.http.put<Usuario>(`http://localhost:3000/usuarios/${u.id}`, u);
  }

  remover(id:number):Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/usuarios/${id}`);
  }

  getAll():Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios');
  }
}
