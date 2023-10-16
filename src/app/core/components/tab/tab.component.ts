import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
}) 
export class TabComponent {

   constructor (private router:Router){
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        console.log("EVENTO", event)
        switch (event.urlAfterRedirects)
        {
          case "/":
            this.seleccionado = [true, false, false];
            break;
          case "/contactprofile":
            this.seleccionado = [false, true, false];
            break;
          case "/addcontact":
            this.seleccionado = [false, false, true];
            break;
          default:
           this.seleccionado = [false, false, false];
           break;
        }
      }
    }
    )
   }

   seleccionado = [false, false, false];


  navegar(direccion:string){
    //cambiar o navegar entre las pagina
    this.router.navigate([direccion])
    console.log(direccion)
  }

}
