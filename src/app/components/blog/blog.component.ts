import { AfterViewChecked, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HighlightService } from 'src/app/services/highlight.service';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit, AfterViewChecked {

  constructor(private router: Router, private route: ActivatedRoute, private highlightService: HighlightService) {
  }

  ngOnInit() { }

  ngAfterViewChecked(): void {
    this.highlightService.highlightAll();
  }
}
