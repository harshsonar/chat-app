import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    
  }

  result: boolean = false;
  username: string = ""; 

  logout() {

    this.result = window.confirm("Are you sure you want to logout?");

    if (this.result) {
      this.authService.firebaseLogout();
    }
  }
}
