import React from "react";
import { createPortal } from "react-dom";

interface PortalModalProps {
  children: React.ReactNode;
}

const PortalModal: React.FC<PortalModalProps> = ({ children }) => {
  return createPortal(children, document.body);
};

export default PortalModal;
