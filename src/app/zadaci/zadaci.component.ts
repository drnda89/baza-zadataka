import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../item';


@Component({
  selector: 'app-zadaci',
  templateUrl: './zadaci.component.html',
  styleUrls: ['./zadaci.component.css']
})
export class ZadaciComponent implements OnInit {
  model: Item;
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(public podaci: SharedService, private afs:AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('zadaci');
    this.items = this.itemsCollection.valueChanges();
    this.model = {
      title: '',
      content: '',
      published: new Date,
      
    }
   }

  ngOnInit() {
  }

  send() {
    this.podaci.data.emit(this.model.title + ' '+ this.model.content);
    this.itemsCollection.add(this.model);
  }

}
