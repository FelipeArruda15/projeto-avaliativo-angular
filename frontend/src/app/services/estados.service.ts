import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../models/Estado';
import { Municipio } from '../models/Municipio';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private http:HttpClient) { }

  getEstados():Observable<Estado[]> {
    return this.http.get<Estado[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");
  }

  getMunicipios(uf:string):Observable<Municipio[]> {   
    return this.http.get<Municipio[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
  }
}
