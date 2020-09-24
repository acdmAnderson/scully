import { AfterViewChecked, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { HighlightService } from 'src/app/services/highlight.service';

declare var ng: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class AboutComponent implements OnInit, AfterViewChecked {

  constructor(private router: Router, private route: ActivatedRoute, private highlightService: HighlightService) {
  }

  ngOnInit() { }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }
}
