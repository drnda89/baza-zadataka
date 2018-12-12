import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-lista-zadataka',
  templateUrl: './lista-zadataka.component.html',
  styleUrls: ['./lista-zadataka.component.css']
})
export class ListaZadatakaComponent implements OnInit {
  zadaci: Observable<any>;
  prikaz;
  constructor(db: AngularFirestore, podaci: SharedService) {
    this.zadaci = db.collection('zadaci').valueChanges();
    podaci.data.subscribe(vrednost => this.prikaz = vrednost)
   }

  ngOnInit() {
    
  }



}
