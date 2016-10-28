import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {StartpageComponent} from './startpage/startpage.component';
import {CustomersComponent} from './customers/customers.component';
import {SingleCustomerComponent} from './single-customer/single-customer.component';
import {DefaultComponent} from './default/default.component';
import {SummaryComponent} from './summary/summary.component';
import {ClaimComponent} from './claim/claim.component';
import {RouterModule} from "@angular/router";
import {CustomersService} from "./shared/customers.service";
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import {Customer} from "./shared/customer";
import { TeaserDirective } from './shared/teaser.directive';
import { DiePipePipe } from './shared/die-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    CustomersComponent,
    SingleCustomerComponent,
    DefaultComponent,
    SummaryComponent,
    ClaimComponent,
    CustomerDetailComponent,
    TeaserDirective,
    DiePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
      {
        path: '',
        component: StartpageComponent
      }, {
        path: 'customers',
        component: CustomersComponent
      },
      {
        path: 'customers/:customerid',
        component: SingleCustomerComponent
      }
      ,
      {
        path: 'newclaim/:customerid',
        component: ClaimComponent
      }
      ,
      {
        path: 'customers/:customerid/claims/:claimid',
        component: SummaryComponent
      }
      ,
      {
        path: '**',
        component: DefaultComponent
      }
    ])
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
