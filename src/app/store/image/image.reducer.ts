import { createReducer, on } from '@ngrx/store';
import { ImageActions } from './image.actions';
import { Pixabay } from 'src/app/interfaces/pixabay.interface';

export const initialState: {
  image: {},
  data: Pixabay[]
} = {
  image: {},
  data: []
};

export const imageReducer = createReducer(
  initialState,
  on(ImageActions.selectImage, (state, { image }) => ({ ...state, image })),
  on(ImageActions.listImage, (state, { data }) => ({ ...state, data }))
);