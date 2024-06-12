import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { motion } from 'framer-motion';
import MovieCard from './MovieCard';

const ItemType = {
    CARD: 'card',
};

const DraggableMovieCard = ({ movie, index, moveCard }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ItemType.CARD,
        hover: (item, monitor) => {
            if (!ref.current) return;

            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) return;

            const hoverBoundingRect = ref.current.getBoundingClientRect();
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

    drag(drop(ref));

    return (
        <motion.div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }} layout transition={{ duration: 0.3 }}>
            <MovieCard movie={movie} />
        </motion.div>
    );
};

export default DraggableMovieCard;
