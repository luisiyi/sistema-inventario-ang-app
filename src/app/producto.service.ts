import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})

//ng g s producto --skip-tests
export class ProductoService {

  private urlBase = "http://localhost:8080/inventario-app/productos";
  private clienteHttp = inject(HttpClient);

  obtenerProductosLista(): Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(this.urlBase)
  }

}
