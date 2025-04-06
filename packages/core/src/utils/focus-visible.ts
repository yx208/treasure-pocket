// 用于处理键盘焦点样式的工具函数
export const getFocusRingStyles = (color: string = 'rgba(66, 153, 225, 0.6)') => {
    return {
        outline: 'none',
        boxShadow: `0 0 0 3px ${color}`,
    };
};

// 检测是否支持 :focus-visible
export const supportsFocusVisible = () => {
    try {
        document.querySelector(':focus-visible');
        return true;
    } catch (e) {
        return false;
    }
};