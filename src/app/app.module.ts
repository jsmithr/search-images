import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { ImageFormComponent } from './components/image-form/image-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { imageReducer } from './store/image.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ImageGridComponent,
    ImagePreviewComponent,
    ImageFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ image: imageReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
