import React from "react";
import { useDrag, useDrop } from "react-dnd";

interface DraggableSectionProps {
  id: string;
  index: number;
  moveSection: (dragIndex: number, hoverIndex: number) => void;
  children: React.ReactNode;
  isDraggable: boolean;
}

export const DraggableSection: React.FC<DraggableSectionProps> = ({
  id,
  index,
  moveSection,
  isDraggable,
  children,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "SECTION",
    hover: (item: { index: number }) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      moveSection(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "SECTION",
    item: { id, index },
    canDrag: isDraggable,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Attach drag or just drop based on isDraggable
  if (isDraggable) drag(drop(ref));
  else drop(ref);

  return (
    <div
      ref={ref}
      className={`p-4 ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      {children}
    </div>
  );
};
