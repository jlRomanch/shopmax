import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mode = 'signin';

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openSearchModal(content) {
    this.modalService.open(content, { centered: true });
  }

  openLoginModal(content) {
    this.mode = 'signin'
    this.modalService.open(content, { centered: true, backdropClass: 'login-backdrop' });
  }

}
