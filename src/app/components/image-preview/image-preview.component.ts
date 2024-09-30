import { Component, OnInit, Input, Inject } from '@angular/core';
import { Pixabay } from 'src/app/interfaces/pixabay.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {
  imageObservable$: Observable<Pixabay>;
  image!: Pixabay;
  images!: Pixabay[];

  constructor(private store: Store<{ image: Pixabay }>,
    public dialogRef: MatDialogRef<ImagePreviewComponent>
  ) {
    this.imageObservable$ = store.select('image');
    this.imageObservable$.subscribe((img: any) => {
      this.image = img.image;
    });
  }

  ngOnInit(): void {
  }

  getTags() {
    return this.image?.tags.split(',') || [];
  }

  close() {
    this.dialogRef.close();
  }
}
