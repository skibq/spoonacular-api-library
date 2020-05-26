export function applyMixins<T>(derivedCtor: new() => T, baseCtors: Array<new() => T>): void  {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) as PropertyDescriptor
            );
        });
    });
}
