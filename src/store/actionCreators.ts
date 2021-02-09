import { Input_Change, Click_Change, Click_Delete } from '@/store/actionTypes';

export const InputChange = (value) => ({
  type: Input_Change,
  value,
});
export const ClickChange = () => ({
  type: Click_Change,
});

export const ClickDelete = (value) => ({
  type: Click_Delete,
  value,
});
