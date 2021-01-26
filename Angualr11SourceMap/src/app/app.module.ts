import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { Angular11SourceMapWebPartComponent } from './angular11-source-map-web-part/angular11-source-map-web-part.component';

@NgModule({
  declarations: [
    Angular11SourceMapWebPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [Angular11SourceMapWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(Angular11SourceMapWebPartComponent, { injector: this.injector });
    customElements.define('app-angular11-source-map-web-part', el);
  }
}
