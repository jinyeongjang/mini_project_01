/* eslint-disable react/display-name */
import { useRef, forwardRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { motion } from 'framer-motion';
import MovieCard from './MovieCard';

const ItemType = {
    CARD: 'card',
};

const DraggableMovieCard = forwardRef(({ movie, index, moveCard }, ref) => {
    const internalRef = useRef(null);

    const [, drop] = useDrop({
        accept: ItemType.CARD,
        hover: (item, monitor) => {
            if (!internalRef.current) return;

            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) return;

            const hoverBoundingRect = internalRef.current.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if ((dragIndex < hoverIndex && hoverClientY < hoverMiddleY) || (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)) {
                return;
            }

            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemType.CARD,
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(internalRef));

    return (
        <motion.div ref={ref || internalRef} style={{ opacity: isDragging ? 0.5 : 1 }} layout transition={{ duration: 0.3 }}>
            <MovieCard movie={movie} />
        </motion.div>
    );
});

export default DraggableMovieCard;
