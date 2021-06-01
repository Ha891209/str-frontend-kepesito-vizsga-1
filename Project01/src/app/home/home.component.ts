import { Component, OnInit } from '@angular/core';
import { Contributor } from '../model/user';
import { UserService } from '../service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users?: Contributor[];

  constructor(
    private userservice: UserService
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(): void {
    this.userservice.getUser().subscribe((apiResponse: Contributor[]) => {
      this.users = apiResponse;

      console.log(this.users)


    })
  }

}
