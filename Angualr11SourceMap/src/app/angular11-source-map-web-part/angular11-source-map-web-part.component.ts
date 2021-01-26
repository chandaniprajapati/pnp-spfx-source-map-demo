import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-angular11-source-map-web-part',
  templateUrl: './angular11-source-map-web-part.component.html',
  styleUrls: ['./angular11-source-map-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class Angular11SourceMapWebPartComponent implements OnInit {

  @Input() description: string;
  @Input() count = 0;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.count += 2;
    console.log("Increment =>", this.count);
  }

  decrement() {
    this.count -= 2;
    console.log("Decrement =>", this.count);
  }
}
