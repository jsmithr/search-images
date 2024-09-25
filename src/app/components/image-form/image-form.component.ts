import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pixabay } from 'src/app/interfaces/pixabay.interface';
import { PixabayService } from 'src/app/services/pixabay.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  data: Pixabay[] = [];
  loading: boolean = false;
  imageForm: FormGroup = new FormGroup({
    q: new FormControl(''),
    category: new FormControl(''),
  });
  // params: { q: string, category: string } = { q: "", category: "" };
  categoryList = [
    { code: 'science', label: 'Ciencia' },
    { code: 'education', label: 'Educación' },
    { code: 'people', label: 'Personas' },
    { code: 'feelings', label: 'Sentimientos' },
    { code: 'computer', label: 'Computadores' },
    { code: 'buildings', label: 'Edicios' },
  ]

  constructor(private pixabayService: PixabayService) {
    this.findImages();
  }

  ngOnInit(): void {
  }

  findImages() {
    this.loading = true;
    let params = this.imageForm?.getRawValue();
    this.pixabayService.get().subscribe(({ hits }) => {
      this.data = hits;
      this.loading = false;
    });
  }
}
