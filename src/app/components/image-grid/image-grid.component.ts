import { Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PixabayStore } from 'src/app/interfaces/pixabay-store.interface';
import { Pixabay } from 'src/app/interfaces/pixabay.interface';
import { PixabayService } from 'src/app/services/pixabay.service';
import { ImageActions } from 'src/app/store/image/image.actions';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {
  pixabay$!: Observable<Pixabay[]>;
  data$!: Observable<Pixabay>;
  data: Pixabay[] = [];
  readonly dialog = inject(MatDialog);

  constructor(private pixabayService: PixabayService,
    private store: Store<PixabayStore>) {
    this.pixabay$ = this.store.select('data');
    this.data$ = this.store.select('image');
    this.data$.subscribe((image: any) => {
      this.data = image.data;
    });
  }

  ngOnInit(): void {
  }

  selectImage(img: Pixabay) {
    this.store.dispatch(ImageActions.selectImage({ image: img }));
    this.dialog.open(ImagePreviewComponent);
  }

  getLoading() {
    return this.pixabayService.loading;
  }
}
