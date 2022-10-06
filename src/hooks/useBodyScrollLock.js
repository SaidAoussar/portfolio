import { useState, useEffect } from "react";

const useBodyScrollLock = () => {
  const bodyStyle = document.body.style;
  const [isLocked, setIsLocked] = useState(bodyStyle.overflowY == "hidden");

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked, bodyStyle]);

  const toggle = () => setIsLocked(!isLocked);

  return [isLocked, toggle];
};

export default useBodyScrollLock;
