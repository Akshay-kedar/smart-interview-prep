import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-role-selector',
  standalone: true,
  imports: [CommonModule, DropdownModule, ButtonModule, FormsModule,HttpClientModule],
  templateUrl: './role-selector.component.html',
  styleUrl: './role-selector.component.css'
})
export class RoleSelectorComponent {



  roles:any[]=[]
  selectedRole:string=''
  constructor(private http: HttpClient, private router: Router){
    this.http.get<string[]>('http://localhost:3000/api/roles').subscribe(data=>{
      this.roles=data.map(role=>({label:role,value:role}))
    })

  }

  startInterview() {
    window.localStorage.setItem('selectedRole',this.selectedRole);
    this.router.navigate(['/questions'])
    }


}
