import {tokens} from '../theme';

// 将主题 tokens 转换为 CSS 变量
export const convertTokensToVariables = () => {
    const variables: Record<string, string> = {};

    // 处理颜色
    Object.entries(tokens.colors).forEach(([colorName, value]) => {
        if (typeof value === 'string') {
            variables[`--color-${colorName}`] = value;
        } else if (typeof value === 'object') {
            Object.entries(value).forEach(([shade, shadeValue]) => {
                variables[`--color-${colorName}-${shade}`] = shadeValue as string;
            });
        }
    });

    // 处理空间
    Object.entries(tokens.space).forEach(([size, value]) => {
        variables[`--space-${size}`] = value;
    });

    // 处理字体大小
    Object.entries(tokens.fontSizes).forEach(([size, value]) => {
        variables[`--font-size-${size}`] = value;
    });

    // 处理边框圆角
    Object.entries(tokens.borderRadius).forEach(([size, value]) => {
        variables[`--radius-${size}`] = value;
    });

    // 处理阴影
    Object.entries(tokens.shadows).forEach(([size, value]) => {
        variables[`--shadow-${size}`] = value;
    });

    return variables;
};

// 获取CSS变量字符串
export const getCssVariablesString = () => {
    const variables = convertTokensToVariables();
    return Object.entries(variables)
        .map(([name, value]) => `${name}: ${value};`)
        .join('\n');
};