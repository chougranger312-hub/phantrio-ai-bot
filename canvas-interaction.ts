import { useDrag, useDrop } from 'react-dnd';

const MindmapNode = ({ node, onUpdate }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'node',
    item: { id: node.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'node',
    drop: (item) => {
      onUpdate(item.id, { parent: node.id });
    },
  }));

  return (
    <div ref={drop}>
      <div
        ref={drag}
        style={{
          position: 'absolute',
          left: node.position.x,
          top: node.position.y,
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
        }}
      >
        {/* Shape selector and content */}
      </div>
    </div>
  );
};
