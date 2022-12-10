import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ImageComponent } from './image/image.component';
import { BottomComponent } from './bottom/bottom.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    IntroductionComponent,
    ImageComponent,
    BottomComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports:[TopComponent,
          IntroductionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
