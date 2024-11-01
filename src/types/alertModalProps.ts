export interface AlertModalProps {
  visible: boolean;
  type: 'success' | 'error' | 'warning';
  title: string;
  description?: string;
  buttonText?: string;
  onButtonPress?: () => void;
  closeOnBackgroundPress?: boolean;
}
