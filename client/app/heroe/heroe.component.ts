import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'aff-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.less']
})
export class HeroeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submited');
  }

}
