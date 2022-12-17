import { Component, OnInit, Input } from '@angular/core';
import { Pixabay } from 'src/app/interfaces/pixabay.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {
  imageObservable$: Observable<Pixabay>;
  image!: Pixabay;

  constructor(private store: Store<{ image: Pixabay }>) {
    this.imageObservable$ = store.select('image');
    this.imageObservable$.subscribe((img: any) => {
      this.image = img.image;
      console.log("🚀 ~ file: image-preview.component.ts:19 ~ ImagePreviewComponent ~ constructor ~ this.image", this.image)
    });
  }

  ngOnInit(): void {
  }

}
