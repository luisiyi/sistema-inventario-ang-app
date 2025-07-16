import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductoListaComponent } from "./producto-lista/producto-lista.component";
import { RouterOutlet } from "../../node_modules/@angular/router/index";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterModule]
})
export class AppComponent {
  title = 'sistema-inventario-ang-app';
}
