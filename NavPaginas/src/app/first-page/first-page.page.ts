import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonButton, RouterModule,IonTitle,MenuComponent],
})
export class FirstPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
