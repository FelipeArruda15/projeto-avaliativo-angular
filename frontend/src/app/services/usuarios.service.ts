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
}
