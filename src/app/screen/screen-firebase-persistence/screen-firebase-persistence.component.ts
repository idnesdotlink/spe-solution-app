import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'screen-firebase-persistence',
  templateUrl: './screen-firebase-persistence.component.html',
  styleUrls: ['./screen-firebase-persistence.component.scss'],
  providers: []
})
export class ScreenFirebasePersistenceComponent implements OnInit {

  constructor(private af: AngularFirestore) { }

  ngOnInit() {
  }

  persistence() {

  }

}
