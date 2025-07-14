type Mode = Record<string, string | boolean>

const ClassNameHelper = (style: string, modes: Mode, attributes: string[]): string => {
    return [
        style,
        ...Object.entries(modes).filter(([className, value]) => Boolean(value)).map(([className]) => className),
        ...attributes
    ].join(' ')
}

export default ClassNameHelper