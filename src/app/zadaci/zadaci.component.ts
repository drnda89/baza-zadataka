import { Component, OnInit, DoCheck } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../item';


@Component({
  selector: 'app-zadaci',
  templateUrl: './zadaci.component.html',
  styleUrls: ['./zadaci.component.css']
})
export class ZadaciComponent implements OnInit,DoCheck {
  model: Item;
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  timeLeft: number = 0;
  interval;

  kreiranje;

  constructor(public podaci: SharedService, private afs:AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('zadaci');
    this.items = this.itemsCollection.valueChanges();
    this.model = {
      title: '',
      content: '',
      published: new Date
    }
    this.podaci.data.emit(this.interval);
   }


  ngOnInit() {
 
  }

  ngDoCheck(){
    if(this.model.title === '' || this.model.content === '') {
      this.kreiranje = true;
    } else {
      this.kreiranje = false;

    }
  }
  
  brojac() {
    this.interval = setInterval(() => {
      this.timeLeft++;
  },1000)
  }

  
  send(inp, txt) {
    this.podaci.data.emit(this.model.title + ' '+ this.model.content);
    this.itemsCollection.add(this.model);
    clearInterval(this.interval);
    inp.value = '';
    txt.value = '';
  }



}
