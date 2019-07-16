import { NgModule } from '@angular/core';
import { NgxRatingComponent } from './ngx-rating.component';
import { NgxRatingPipe } from './ngx-rating.pipe';



@NgModule({
  declarations: [NgxRatingComponent, NgxRatingPipe],
  imports: [
  ],
  exports: [NgxRatingComponent]
})
export class NgxRatingModule { }
