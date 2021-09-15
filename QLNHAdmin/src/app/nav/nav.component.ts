import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public items: MenuItem[] = [];
  title ="Quản lý nhà hàng - Admin"

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Nhà hàng',
        icon: 'pi pi-fw pi-home',
        command: () => this.router.navigate(['/restaurant'])
      },
      {
        label: 'Quyền',
        icon: 'pi pi-fw pi-user-edit',
        command: () => this.router.navigate(['/role'])
      },
      {
        label: 'Tình Trạng',
        icon: 'pi pi-fw pi-flag',
        command: () => this.router.navigate(['/role'])
      },
      {
        label: 'Khu Vực',
        icon: 'pi pi-fw pi-share-alt',
        command: () => this.router.navigate(['/role'])
      },
      {
        label: 'Đơn vị',
        icon: 'pi pi-fw pi-filter',
        command: () => this.router.navigate(['/role'])
      },
      {
        label: 'Thể loại',
        icon: 'pi pi-fw pi-list',
        command: () => this.router.navigate(['/role'])
      },
      {
        label: 'Nhân sự',
        icon: 'pi pi-fw pi-user-edit',
        command: () => this.router.navigate(['/role'])
      },
      {
        label: 'Bàn ăn',
        icon: 'pi pi-fw pi-table',
        command: () => this.router.navigate(['/role'])
      },
      {
        label: 'Thức ăn',
        icon: 'pi pi-fw pi-calendar',
        command: () => this.router.navigate(['/role'])
      },
      {
        label: 'Log out',
        icon: 'pi pi-fw pi-sign-out',
        command: () => this.router.navigate(['/role'])
      },
    ];
  }
}
