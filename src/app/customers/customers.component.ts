import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CustomersService} from "../shared/customers.service";
import {Customer} from "../shared/customer";
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  constructor(private router:Router, private customersService:CustomersService) { }

  buttonClick_NeuerSchaden(customerID: string){
    this.router.navigate(['/newclaim',customerID]);
  }

  getAllCustomers(){
    console.log("Aufruf getAllCustomers in Komponente")
    this.customersService.getAllCustomers()
      .then(customersFromService => this.customers = customersFromService)
      .catch(x => console.log(x));
  }

  ngOnInit() {
    this.getAllCustomers();
  }
}
