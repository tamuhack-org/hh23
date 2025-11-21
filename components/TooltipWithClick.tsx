import { Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";
import { LiaInfoCircleSolid } from "react-icons/lia";

const TooltipWithClick = ({ label }: { label: string }) => {
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  return (
    <Tooltip label={label} isOpen={isLabelOpen}>
      <span>
        <LiaInfoCircleSolid
          size={20}
          onMouseEnter={() => setIsLabelOpen(true)}
          onMouseLeave={() => setIsLabelOpen(false)}
          onClick={() => setIsLabelOpen(true)}
        />
      </span>
    </Tooltip>
  );
};

export default TooltipWithClick;
