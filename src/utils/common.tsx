type ClassName = string | number | false | null | undefined;

export function cn(...classNames: ClassName[]) {
    return classNames.filter(Boolean).join(" ")
}
