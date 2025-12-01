<template>
    <el-dialog
        title="书籍详情"
        v-model="addBookDialogVisible"
        width="50%"
        @close="closeDialog"
    >
        <el-form ref="ruleFormRef" style="max-width: 600px" :model="bookList" status-icon
            label-width="auto">
            <el-form-item label="书籍名称" prop="bookName">
                <el-input v-model="bookList.bookName" autocomplete="off" placeholder="请输入书籍名称" />
            </el-form-item>
            <el-form-item label="书籍描述" prop="bookDesc">
                <el-input v-model="bookList.bookDesc" autocomplete="off" placeholder="请输入书籍描述" />
            </el-form-item>
            <el-form-item label="书籍分类" prop="category">
                <el-select v-model="bookList.category" placeholder="请选择书籍分类">
                    <el-option
                        v-for="item in categoryList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-form-item>
            <el-form-item label="书籍价格" prop="price">
                <el-input v-model="bookList.price" autocomplete="off" placeholder="请输入书籍价格(元)" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div>
                <el-button @click="closeDialog">取消</el-button>
                <el-button type="primary" @click="addBook()">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue'
import type { Book } from './ts/book'
import { categoryList } from './ts/book'

const props = defineProps({
    addBookDialogVisible: {
        type: Boolean,
        default: false
    }
})
const bookList = ref<Book>({
    id: 0,
    bookName: '',
    bookDesc: '',
    price: 0,
    category: ''
})

const emit = defineEmits(['addBook','closeDialog'])

const addBook = () => {
    emit('addBook', bookList.value)
    closeDialog()
}

const addBookDialogVisible = ref(false)

watch(() => props.addBookDialogVisible, (newVal) => {
    addBookDialogVisible.value = newVal
})

const resetBookList = () => {
    bookList.value = {
        id: 0,
        bookName: '',
        bookDesc: '',
        price: 0,
        category: ''
    }
}

const closeDialog = () => {
    resetBookList()
    emit('closeDialog')
}

</script>

<style scoped>
</style>