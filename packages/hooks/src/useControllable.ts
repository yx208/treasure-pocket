import {useState, useCallback} from "react";

/**
 * 自定义钩子用于处理受控和非受控组件模式
 *
 * @param controlledValue 受控值（外部传入的）
 * @param defaultValue 默认值（用于非受控模式）
 * @param onChange 值变化时的回调函数
 */
export function useControllable<T>(
    controlledValue: T | undefined,
    defaultValue: T | undefined,
    onChange?: (value: T) => void
) {
    const [uncontrolledValue, setUncontrolledValue] = useState<T | undefined>(defaultValue);

    // 判断组件是否处于受控模式
    const isControlled = controlledValue !== undefined;

    // 当前值为受控值或非受控值
    const value = isControlled ? controlledValue : uncontrolledValue;

    // 更新值的函数
    const setValue = useCallback(
        (nextValue: T | ((prevValue: T | undefined) => T)) => {
            // 如果处于非受控模式，则更新内部状态
            if (!isControlled) {
                setUncontrolledValue(nextValue);
            }

            // 如果提供了onChange函数，则调用它
            if (onChange) {
                // 如果nextValue是函数，则计算出实际值
                const resolvedValue =
                    typeof nextValue === 'function'
                        ? (nextValue as (prevValue: T | undefined) => T)(value)
                        : nextValue;

                onChange(resolvedValue);
            }
        },
        [isControlled, onChange, value]
    );

    return [value, setValue] as const;
}
