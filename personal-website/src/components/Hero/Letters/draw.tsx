const draw = {
    hidden: {
        pathLength: 0,
        opacity: 0,
    },
    visible: (offset: number) => {
        const delay = 1 + offset * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 8 },
                opacity: { delay, duration: 0.01 }
            }
        }
    }
};

export default draw;