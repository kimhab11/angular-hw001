import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() content_list!:any;

  @Output() 
  selected = new EventEmitter();

  constructor() { }
  ngOnInit(): void {

  }

  selectSubject(data:any){
      this.selected.emit(data);
  }
    
}
