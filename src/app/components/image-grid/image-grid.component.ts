import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pixabay } from 'src/app/interfaces/pixabay.interface';
import { ImageActions } from 'src/app/store/image.actions';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {
  @Input() data: Pixabay[] = [];

  constructor(private store: Store<{ image: Pixabay }>) {
  }

  ngOnInit(): void {
  }

  selectImage(img: Pixabay) {
    this.store.dispatch(ImageActions.saveImage({ image: img }));
  }

}
