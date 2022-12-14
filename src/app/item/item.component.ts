import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/model/item';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnChanges,  OnInit {

  @Input() item: Item;
  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}