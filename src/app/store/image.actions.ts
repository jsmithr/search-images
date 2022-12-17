import { createAction, createActionGroup, props } from '@ngrx/store';
import { Pixabay } from '../interfaces/pixabay.interface';

export const ImageActions = createActionGroup({
  source: 'Image',
  events: {
    'Save Image': props<{ image: Pixabay }>(),
  },
});