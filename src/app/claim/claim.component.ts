import { Component, OnInit } from '@angular/core';
import {Claim} from "../shared/claim";

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  schaden: Claim = new Claim();

  constructor() { }

  ngOnInit() {
  }

}
