import { createReducer, on } from '@ngrx/store';
import { ImageActions } from './image.actions';

export const initialState = {
  image: {}
};

export const imageReducer = createReducer(
  initialState,
  on(ImageActions.saveImage, (state, { image }) => ({ ...state, image })),
);