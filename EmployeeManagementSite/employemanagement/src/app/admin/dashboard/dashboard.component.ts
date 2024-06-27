import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user: any;
  constructor() {

  }
  ngOnInit(): void {
    const data = sessionStorage.getItem("credential");
    if(data){
      this.user= JSON.parse(data); 
    }
    
  }
}
