import { createActionGroup, props } from '@ngrx/store';
import { Pixabay } from '../../interfaces/pixabay.interface';

export const ImageActions = createActionGroup({
  source: 'Image',
  events: {
    'Select Image': props<{ image: Pixabay }>(),
    'List Image': props<{ data: Pixabay[] }>(),
  },
});