import React from 'react';
import {Image, Modal, Text, View} from 'react-native';
import {CustomButton} from './CustomButton.tsx';
import {images} from '../constants/content/images.ts';
import {ModalContentWrapper} from './AppModal.tsx';
import {useAppSelector} from '../hooks/rtk-hooks/useAppSelector.ts';
import {useDispatch} from 'react-redux';
import {clearAlertData} from '../store/slices/alertModalSlice.ts';

export const AlertModalProvider = () => {
  const {
    visible,
    title,
    description,
    buttonText,
    type,
    onButtonPress,
    closeOnBackgroundPress,
    ...rest
  } = useAppSelector(state => state.alertModal);
  const dispatch = useDispatch();

  if (!visible) {
    return null;
  }

  const handleClose = () => {
    dispatch(clearAlertData());
  };

  const imageSource = images[type === 'success' ? 'check' : type];

  return (
    <Modal visible={visible} transparent animationType={'fade'} {...rest}>
      <ModalContentWrapper
        onBackgroundPress={closeOnBackgroundPress ? handleClose : undefined}
        avoidKeyboard={false}>
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px] w-[95%]">
          <Image
            source={imageSource}
            className="w-[100px] h-[100px] mx-auto my-5"
          />
          {title && (
            <Text className="text-3xl font-JakartaBold text-center">
              {title}
            </Text>
          )}
          {description && (
            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              {description}
            </Text>
          )}
          <CustomButton
            title={buttonText || 'Ok'}
            onPress={onButtonPress ? onButtonPress : handleClose}
            className="mt-5"
          />
        </View>
      </ModalContentWrapper>
    </Modal>
  );
};
