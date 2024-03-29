import { Component, OnInit } from '@angular/core';
import {OrderDetailsService} from '../../services/order-details.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private service : OrderDetailsService) { }
  foodData : any;
  ngOnInit(): void {
   this.foodData= this.service.foodDetails;
  }

}
