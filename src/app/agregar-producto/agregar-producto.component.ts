import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

//ng g c agregar-producto --skip-tests
@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [FormsModule], //Two way data binding
  templateUrl: './agregar-producto.component.html'
})
export class AgregarProductoComponent {
  producto: Producto = new Producto();

  private productoServicio = inject(ProductoService);
  private enrutador = inject(Router);

  onSubmit(){
    this.guardarProucto();
  }

  guardarProucto(){
    this.productoServicio.agregarProducto(this.producto).subscribe({
      next: (datos) => {
        this.irListaProductos();
      },
      error: (error: any) => {console.log(error)}
    });
  }

  irListaProductos(){
    this.enrutador.navigate(['/productos']);
  }

}
