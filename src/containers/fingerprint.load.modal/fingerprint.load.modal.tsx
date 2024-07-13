import React from "react";
import { FingerprintLoad } from "../../components/fingerprint.load";
import "./fingerprint.load.modal.css";

interface FingerprintLoadModalProps {
  setFingerprint: (fingerprint: string) => void;
  closeModal: () => void;
}

const FingerprintLoadModal: React.FC<FingerprintLoadModalProps> = ({
  setFingerprint,
  closeModal,
}) => {
  return (
    <div className="modal flex items-center" onClick={closeModal}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="text-center mt-10 text-3xl text-secondary">
          Fingerprint Register
        </div>
        <FingerprintLoad
          setFingerprint={setFingerprint}
          className="w-20 mx-auto mt-10 mb-4"
        />
      </div>
    </div>
  );
};

export default FingerprintLoadModal;
