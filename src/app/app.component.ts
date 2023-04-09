import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stringInterpolation';

  dynamic:string="Nirmit";

  myMethod(){
    return "My Name is " + this.dynamic;
  }

  appstatus:boolean = true;

  status1:string = "Online"
  status2:string = "Offline"
}
