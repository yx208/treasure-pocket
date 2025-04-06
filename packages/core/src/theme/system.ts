import { tokens } from './tokens';

export const theme = {
    ...tokens,
    components: {
        button: {
            variants: {
                primary: {
                    backgroundColor: tokens.colors.primary[500],
                    color: '#ffffff',
                    hover: {
                        backgroundColor: tokens.colors.primary[600],
                    },
                    active: {
                        backgroundColor: tokens.colors.primary[700],
                    },
                    disabled: {
                        backgroundColor: tokens.colors.neutral[200],
                        color: tokens.colors.neutral[500],
                    },
                },
                secondary: {
                    backgroundColor: 'transparent',
                    color: tokens.colors.primary[500],
                    border: `1px solid ${tokens.colors.primary[500]}`,
                    hover: {
                        backgroundColor: tokens.colors.primary[50],
                    },
                    active: {
                        backgroundColor: tokens.colors.primary[100],
                    },
                    disabled: {
                        borderColor: tokens.colors.neutral[300],
                        color: tokens.colors.neutral[500],
                    },
                },
                ghost: {
                    backgroundColor: 'transparent',
                    color: tokens.colors.primary[500],
                    hover: {
                        backgroundColor: tokens.colors.neutral[100],
                    },
                    active: {
                        backgroundColor: tokens.colors.neutral[200],
                    },
                    disabled: {
                        color: tokens.colors.neutral[400],
                    },
                },
            },
            sizes: {
                sm: {
                    fontSize: tokens.fontSizes.sm,
                    padding: `${tokens.space[1]} ${tokens.space[2]}`,
                    borderRadius: tokens.borderRadius.md,
                },
                md: {
                    fontSize: tokens.fontSizes.md,
                    padding: `${tokens.space[2]} ${tokens.space[4]}`,
                    borderRadius: tokens.borderRadius.md,
                },
                lg: {
                    fontSize: tokens.fontSizes.lg,
                    padding: `${tokens.space[3]} ${tokens.space[6]}`,
                    borderRadius: tokens.borderRadius.lg,
                },
            },
        },
        // 其他组件主题配置...
    },
};
