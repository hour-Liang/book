import { ref } from 'vue'
export interface Book {
    id: number,
    bookName: string, // 书籍名称
    bookDesc: string, // 书籍描述
    price: number, // 书籍价格
    category: string // 书籍分类
}

export const categoryList = ref([
    {
        label: '小说',
        value: '小说'
    },
    {
        label: '儿童读物',
        value: '儿童读物'
    },
    {
        label: '非小说类',
        value: '非小说类'
    },
    {
        label: '专业书',
        value: '专业书'
    },
    {
        label: '工具书',
        value: '工具书'
    },
    {
        label: '手册',
        value: '手册'
    },
    {
        label: '剧本',
        value: '剧本'
    },
    {
        label: '日记',
        value: '日记'
    },
    {
        label: '书集',
        value: '书集'
    },
    {
        label: '摄影绘画集',
        value: '摄影绘画集'
    }
])

export const booklist = ref<Book[]>([
    {
        id: 0,
        bookName: '《西游记》',
        bookDesc: '中国古代最著名的小说',
        price: 100,
        category: '小说'
    },
    {
        id: 1,
        bookName: '《红楼梦》',
        bookDesc: '中国古代最著名的小说',
        price: 100,
        category: '小说'
    },
    {
        id: 2,
        bookName: '《三国演义》',
        bookDesc: '中国古代最著名的小说',
        price: 100,
        category: '小说'
    },
    {
        id: 3,
        bookName: '《水浒传》',
        bookDesc: '中国古代最著名的小说',
        price: 100,
        category: '小说'
    },
    {
        id: 4,
        bookName: '《C++程序设计》',
        bookDesc: '中国古代最著名的小说',
        price: 100,
        category: '专业书'
    },
    {
        id: 5,
        bookName: '《计算机组成原理》',
        bookDesc: '中国古代最著名的小说',
        price: 100,
        category: '专业书'
    }
])