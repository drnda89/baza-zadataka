import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-zadaci',
  templateUrl: './zadaci.component.html',
  styleUrls: ['./zadaci.component.css']
})
export class ZadaciComponent implements OnInit {

  constructor(public podaci: SharedService) {
   }

  ngOnInit() {
  }

  send(naslov, opis) {
    this.podaci.data.emit(naslov.value +' '+ opis.value);
  }

}
