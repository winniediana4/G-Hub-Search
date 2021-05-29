import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Gitdata } from '../git-data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  user: Gitdata[];
  particlesJS:any;

  constructor(private service: MyServiceService) { }

  getSearchedUser(searchTerm){
    this.service.searchMyUser)searchTerm.then(
      (success)+>{

        this.user = this.service .user;
        console.log(this.user)
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getSearchedUser('winniediana4');
    let particlesJS;
    particlesJS.load('particles-js', 'particles.json', null);
  }

}
