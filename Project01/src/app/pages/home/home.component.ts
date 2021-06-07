import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userCards: Observable<User[]> = this.userservice.getAllUsers();
  startItem: number = 0;
  endItem: number = 12;



  constructor(
    private userservice: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.userCards.subscribe(
      data => { },
      error => this.toastr.error(error.message, 'Error', { timeOut: 10000 })
    );
  }

  onScroll() {
    this.endItem += 4;
  }

}


