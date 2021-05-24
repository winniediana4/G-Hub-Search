import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchTerm!: string;
  @Output() searchEmitter = new EventEmitter<any>();

  constructor() { }

  emitUser(){
  this.searchEmitter.emit(this.searchTerm);
  }

  ngOnInit(): void {
  }

}
