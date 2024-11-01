import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  ModalProps,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface AppModalProps extends ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  avoidKeyboard?: boolean;
}

export const AppModal = ({
  visible,
  children,
  avoidKeyboard,
  className,
  ...rest
}: AppModalProps) => {
  if (!visible) {
    return null;
  }
  return (
    <Modal
      visible={visible}
      transparent
      animationType={rest.animationType || 'fade'}
      {...rest}>
      <ModalContentWrapper className={className} avoidKeyboard={avoidKeyboard}>
        {children}
      </ModalContentWrapper>
    </Modal>
  );
};

interface ContentProps {
  avoidKeyboard?: boolean;
  className?: string;
  children?: React.ReactNode;
  onBackgroundPress?: () => void;
}

export function ModalContentWrapper({
  children,
  avoidKeyboard,
  className,
  onBackgroundPress,
}: ContentProps) {
  if (avoidKeyboard) {
    return (
      <TouchableWithoutFeedback onPress={onBackgroundPress}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className={`justify-center items-center flex-1 px-3 bg-zinc-900/40 ${className}`}>
          <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={onBackgroundPress}>
      <View
        className={`justify-center items-center flex-1 px-3 bg-zinc-900/40 ${className}`}>
        <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}
