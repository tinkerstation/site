export const LocalStorage = {
    get(key: string): string | null {
        const item = localStorage.getItem(key);
        console.log("get",key)
        if (item) {
            return JSON.parse(item) as string;
        }
        return null;
    },
    getBool(key: string): boolean | null {
        const item = localStorage.getItem(key);
        console.log("getBool:",key)
        if (item) {
            console.log("Leave getBool",JSON.parse(item))
            return JSON.parse(item) as boolean;
        }
        return null;
    },
    setBool(key: string, value: boolean) {
        console.log("setBool:",key,value)
        localStorage.setItem(key, JSON.stringify(value));
    },
    set(key: string, value: string) {
        console.log("set",key,value)
        localStorage.setItem(key, JSON.stringify(value));
    },
    remove(key: string) {
        localStorage.removeItem(key);
    },
};