import { useState } from "react";

function usePopover(initialValue = false) {
  const [open, isOpen] = useState(initialValue);
  const [anchor, setAnchor] = useState(null);

  const onOpen = (event) => {
    setAnchor(event.currentTarget);
    isOpen(!open);
  };
  const onClose = () => {
    setAnchor(null);
    isOpen(!open);
  };

  return [open, anchor, onOpen, onClose];
}

export default usePopover;
