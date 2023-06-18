import { Component } from '@angular/core';
import { ShapeService } from './services/shape.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userList: any[] = [];

  constructor(private shapeSvc: ShapeService) { }



}
