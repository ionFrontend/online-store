import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section7-stages',
  templateUrl: './section7-stages.component.html',
  styleUrls: ['./section7-stages.component.scss']
})
export class Section7StagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    {number: '1', step: "Harvesting.", info: "The languages differ in their grammar, pronunciation words."},
    {number: '2', step: "Making.", info: "Nam libero tempore, cum soluta nobis est eligendi optio cumque."},
    {number: '3', step: "Quality.", info: "On the other hand, we denounce righteous indignation men."}
  ]

}
