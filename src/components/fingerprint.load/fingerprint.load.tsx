import React, { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

interface FingerprintLoadProps {
  setFingerprint: (fingerprint: string) => void;
  className?: string;
}

export const FingerprintLoad: React.FC<FingerprintLoadProps> = ({
  setFingerprint,
  className,
}) => {
  useEffect(() => {
    const loadFingerprint = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const fp = await FingerprintJS.load();
      const result = await fp.get();

      setFingerprint(result.visitorId);
    };

    loadFingerprint();
  }, []);

  return (
    <img
      src={`${process.env.PUBLIC_URL}/assets/images/fingerprint.png`}
      className={className}
    />
  );
};

export default FingerprintLoad;
