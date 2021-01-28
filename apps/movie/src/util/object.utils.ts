// ObjectUtils
export class ObjectUtils {

    // copyString
    // Return '' on undefined or null, else a copy
    public static copyString(src: string): string {
        const retStr = '';

        if (src === undefined || src === null || src.length === 0) {
            return retStr;
        }

        return src.toString();
    }

}
