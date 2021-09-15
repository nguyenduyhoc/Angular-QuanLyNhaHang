import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Restaurant } from 'src/models/Restaurant';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  public restaurants: Restaurant[] = [];
  public restaurantDialog: boolean = false;
  private newRestaurant: Restaurant = {
    id: 0,
    name: '',
    description: '',
    phone: '',
    address: '',
    created: new Date(),
    updated: new Date(),
    deleted: false,
  };
  public restaurant: Restaurant = Object.assign({}, this.newRestaurant);
  public submitted = true;
  public loading = true;

  constructor(
    private dataService: DataService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  private loadRestaurant(): void {
    this.loading = true;
    this.dataService.getAllRestaurants().subscribe((data) => {
      console.log(data);
      this.loading = false;
      this.restaurants = data;
    });
  }

  ngOnInit(): void {
    this.loadRestaurant();
  }
 

  public openNew(): void {
    this.restaurant = Object.assign({}, this.newRestaurant);
    this.restaurantDialog = true;
  }

  public hideDialog(cancel = true, success = true): void {
    this.restaurantDialog = false;
    if (cancel) {
      this.messageService.add({
        severity: 'info',
        summary: 'Hủy',
        detail: 'Đổi ý, không thêm nữa',
        life: 3000,
      });
    } else if (success) {
      this.messageService.add({
        severity: 'success',
        summary: 'Thành công',
        detail: 'Thêm thành công',
        life: 3000,
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Lỗi',
        detail: 'Thêm nhà hàng bị lỗi',
        life: 3000,
      });
    }
  }

  public saveRestaurant(): void {
    if (this.restaurant.id === 0) {
      this.dataService.postRestaurant(this.restaurant).subscribe(
        (data) => {
          this.loadRestaurant();
          this.hideDialog(false, true);
        },
        (error) => {
          console.log(error);
          this.hideDialog(false, false);
        }
      );
    } else {
      this.dataService.putRestaurant(this.restaurant).subscribe(
        (data) => {
          this.loadRestaurant();
          this.hideDialog(false, true);
        },
        (error) => {
          console.log(error);
          this.hideDialog(false, false);
        }
      );
    }
  }
  public editRestaurant(restaurant: Restaurant):void {
    this.restaurant = { ...restaurant, updated: new Date() };
    this.restaurantDialog = true;
  }

  public deleteRestaurant(restaurant: Restaurant):void {
    this.confirmationService.confirm({
      message: 'Are you sure want to delete ' + restaurant.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        restaurant.deleted = true;
        this.dataService.putRestaurant(restaurant).subscribe((data) => {
          this.loadRestaurant();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: `${restaurant.name} deleted `,
            life: 3000,
          });
        });
 
      },
    });
  }
}
