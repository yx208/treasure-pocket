import {forwardRef, type ReactNode, useRef} from "react";
import {AriaButtonProps, useButton} from "@react-aria/button";
import { mergeProps } from "@react-aria/utils";
import {motion, MotionProps} from "framer-motion";
import {buttonVariants} from "@repo/animations";

export interface ButtonProps extends AriaButtonProps {
    /**
     * 风格
     */
    variant?: "primary" | "secondary" | "ghost";
    /**
     * 尺寸
     */
    size?: "sm" | "md" | "lg";
    /**
     * 子元素
     */
    children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
    const ref = useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(props, ref);
    const allProps = mergeProps(buttonProps) as unknown as MotionProps;

    return (
        <motion.button
            ref={ref}
            variants={buttonVariants}
            initial="initial"
            {...allProps}
        >{props.children}</motion.button>
    )
});

Button.displayName = "Button";

export {
    Button
}
