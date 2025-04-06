import type { Variants } from "framer-motion";

export const buttonVariants: Variants = {
    initial: {
        scale: 1,
        transition: {duration: 0.2}
    },
    hover: {
        scale: 1.05,
        transition: {duration: 0.2}
    },
    tap: {
        scale: 0.95,
        transition: {duration: 0.1}
    },
    disabled: {
        opacity: 0.6,
        scale: 1,
        transition: {duration: 0.2}
    }
};
