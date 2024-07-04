export interface NavButtonProps {
  title?: string;
  onClick: () => void;
  className: string;
  type?: boolean;
  titleComponent?: React.ReactNode;
}
