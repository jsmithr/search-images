import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PixabayStore } from 'src/app/interfaces/pixabay-store.interface';
import { Pixabay } from 'src/app/interfaces/pixabay.interface';
import { PixabayService } from 'src/app/services/pixabay.service';
import { ImageActions } from 'src/app/store/image/image.actions';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  imageForm: FormGroup = new FormGroup({
    q: new FormControl(''),
    category: new FormControl(''),
  });
  count: number = 0;
  categoryList = [
    { code: 'science', label: 'Ciencia' },
    { code: 'education', label: 'Educación' },
    { code: 'people', label: 'Personas' },
    { code: 'feelings', label: 'Sentimientos' },
    { code: 'computer', label: 'Computadores' },
    { code: 'buildings', label: 'Edicios' },
  ];

  constructor(private pixabayService: PixabayService, private store: Store<PixabayStore>) {
    this.findImages();
  }

  ngOnInit(): void {
  }

  findImages() {
    this.pixabayService.loading = true;
    let params = this.imageForm?.getRawValue();
    this.pixabayService.get(params).subscribe(({ hits }) => {

      setTimeout(() => {
        this.store.dispatch(ImageActions.listImage({ data: hits }));
        this.pixabayService.loading = false;
      }, 2000);
    });
  }

  getLoading() {
    return this.pixabayService.loading;
  }
}
