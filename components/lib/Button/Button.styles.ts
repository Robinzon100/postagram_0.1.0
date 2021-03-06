
export const colorStyles = {
    yellow: {
        bg: 'var(--primary-yellow)',
        border: 'none',
    },
    blue: {
        bg: 'var(--secondary-dark-blue)',
        border: 'none',
    },
    black: {
        bg: 'var(--primary-black)',
        border: '0.5px solid rgba(255, 255, 255, 0.08)',
    },
   
}


export const sizeStyles = {
    large: {
        padding: '20px 90px',
        fontSizeClass: 'f-size-p2'
    },
    medium: {
        padding: '18px 70px',
        fontSizeClass: 'f-size-p3'
    },
    small: {
        padding: '18px 30px',
        fontSizeClass: 'f-size-p4'
    }
}

export const defaultStyles = {
    bg: colorStyles.black.bg,
    border: colorStyles.black.border,
    padding: sizeStyles.medium.padding,
    fontSizeClass: sizeStyles.medium.fontSizeClass,
}
