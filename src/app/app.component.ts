import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { fromEvent } from 'rxjs';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showScrollTop = false;

  constructor(private pageScroll: PageScrollService) { }

  ngOnInit(): void {
    AOS.init({
      // offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      // delay: 100,
    });

    fromEvent(window, 'scroll').subscribe(e => {
      this.showScrollTop = window.scrollY > 853;
    });
  }

  scrollTop() {
    this.pageScroll.scroll({
      document: document,
      scrollTarget: 'html',
      duration: 500
    })
  }
}
