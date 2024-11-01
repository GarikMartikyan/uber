import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AlertModalProps} from '../../types/alertModalProps.ts';

type AlertModalState = AlertModalProps;

const initialState: AlertModalState = {
  visible: false,
  title: '',
  description: undefined,
  type: 'success',
  buttonText: undefined,
  closeOnBackgroundPress: true,
  onButtonPress: undefined,
};

const alertModalSlice = createSlice({
  name: 'alertModal',
  initialState,
  reducers: {
    setAlertData: (_, action: PayloadAction<AlertModalState>) => {
      return action.payload;
    },
    clearAlertData: () => initialState,
  },
});

export const {setAlertData, clearAlertData} = alertModalSlice.actions;

export default alertModalSlice.reducer;
