

export const getPathByActiveMenu = (value: number) => {
    if (value === 0) {
        return '/'
    } else if (value === 1) {
        return '/admin'
    } else if (value === 2) {
        return '/system-admin'
    } else {
        return '/'
    }
}