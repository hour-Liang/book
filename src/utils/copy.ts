// 导入深拷贝工具函数
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as any
  }
  if (obj instanceof Array) {
    const cloneArr: any[] = []
    for (let i = 0; i < obj.length; i++) {
      cloneArr[i] = deepClone(obj[i])
    }
    return cloneArr as any
  }
  if (typeof obj === 'object') {
    const cloneObj: any = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloneObj[key] = deepClone(obj[key])
      }
    }
    return cloneObj
  }
  return obj
}