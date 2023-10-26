<<<<<<< HEAD
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
=======
type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
<<<<<<< HEAD
    ]
        .join(' ');
=======
    ].join(' ');
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
}
