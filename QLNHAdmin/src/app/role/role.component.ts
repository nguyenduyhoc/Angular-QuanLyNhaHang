import { Component, OnInit } from '@angular/core';
import { Role } from 'src/models/Role';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  roles: Role[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllRoles().subscribe((data) => {
      this.roles = data
      console.log(this.roles)
    });
   
  }
}
