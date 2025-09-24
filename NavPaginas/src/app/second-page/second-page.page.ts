import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle,IonToolbar, IonButtons,IonContent, IonButton, RouterModule,MenuComponent],
})
export class SecondPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
