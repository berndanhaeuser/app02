import { Injectable } from '@angular/core';
import {Customer} from "./customer";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomersService {

  constructor(private http:Http) { }

  getAllCustomers(): Promise<Customer[]> {
    console.log("Jetzt in getAllCustomers in Service")
    let path: string= 'assets/customers.json';
    return this.http.get(path)
      .toPromise()
      .then(response => response.json().data as Customer[])
      .catch(function () {
        console.log("Hat NICHT!!!!! geklappt bei " + path);
      });
  }
}
