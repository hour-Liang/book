// 导入深拷贝工具函数
export const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (obj instanceof Array) {
        const cloneArr = [];
        for (let i = 0; i < obj.length; i++) {
            cloneArr[i] = deepClone(obj[i]);
        }
        return cloneArr;
    }
    if (typeof obj === 'object') {
        const cloneObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloneObj[key] = deepClone(obj[key]);
            }
        }
        return cloneObj;
    }
    return obj;
};
