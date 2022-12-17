import { Component, OnInit } from '@angular/core';
import { Pixabay } from 'src/app/interfaces/pixabay.interface';
import { PixabayService } from 'src/app/services/pixabay.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  data: Pixabay[] = [];
  params: { q: string, category: string } = { q: "", category: "" };

  constructor(private pixabayService: PixabayService) {
    this.findImages();
  }

  ngOnInit(): void {
  }

  findImages() {
    this.pixabayService.get(this.params).subscribe(({ hits }) => {
      this.data = hits;
    });
  }
}
