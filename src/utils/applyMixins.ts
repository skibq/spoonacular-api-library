export function applyMixins<T>(classToBeExtended: new() => T, mixins: Array<new() => T>): void  {
    mixins.forEach(mixin => {
        Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
            Object.defineProperty(
                classToBeExtended.prototype,
                name,
                Object.getOwnPropertyDescriptor(mixin.prototype, name) as PropertyDescriptor
            );
        });
    });
}
