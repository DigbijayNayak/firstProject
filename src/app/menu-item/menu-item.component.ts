import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItemsChild: Array<string> = [];
  @Output() menuItemName = new EventEmitter<string>();


  constructor() { }
  menuClicked(menuName: string){
    console.log("menu clicked is ", menuName);
    this.menuItemName.emit(menuName);
  }
  ngOnChanges(){
    console.log("Changes have occured", this.menuItemsChild);
  }

  ngOnInit(): void {
  }

}
