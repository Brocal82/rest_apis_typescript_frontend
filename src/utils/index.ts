export function formatCurrencty(amount: number) {
    return new Intl.NumberFormat('en-ES', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount)
}

export function toBoolean(str: string) {
    return str.toLocaleLowerCase() === "true"
}