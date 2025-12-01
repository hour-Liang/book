<template>
    <el-card style="max-width: 100%;text-align: left;">
        <template #header>
            <el-button type="primary" class="-m-2" @click="showBookDialog">
                <el-icon>
                    <Plus />
                </el-icon>
                添加书籍
            </el-button>
            <el-tooltip content="删除" placement="top" v-if="selectedBooks.length > 1">
                <el-button type="danger" @click="deleteSelectedBooks">
                    <el-icon>
                        <DeleteFilled />
                    </el-icon>
                </el-button>
            </el-tooltip>
        </template>
        <el-table :data="bookList" style="width: 100%;" :header-cell-style="{textAlign: 'center'}"
            :cell-style="{ textAlign: 'center' }" @selection-change="handleSelectionChange"
            :default-sort="{ prop: 'category', order: 'descending' }">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="bookName" label="书籍名称" :resizable="false" />
            <el-table-column prop="bookDesc" label="书籍描述" :resizable="false" />
            <el-table-column prop="category" label="书籍分类" :resizable="false" sortable />
            <el-table-column prop="price" label="书籍价格" :resizable="false" />
            <el-table-column label="操作">
                <template #default="scope" slot-scope="scope">
                    <el-tooltip content="编辑" placement="top">
                        <el-button type="primary" @click="editBook(scope.row)">
                            <el-icon>
                                <Edit />
                            </el-icon>
                        </el-button>
                    </el-tooltip>
                    <el-tooltip content="删除" placement="top">
                        <el-button type="danger" @click="deleteConfirm(scope.$index, scope.row)">
                            <el-icon>
                                <DeleteFilled />
                            </el-icon>
                        </el-button>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table> 
    </el-card>
    <AddBookDialog :addBookDialogVisible="addBookDialogVisible" @addBook="addBook" @closeDialog="closeDialog"></AddBookDialog>
    <EditBookDialog :editBookVisible="editBookVisible" @editBook="confirmEditBook" @closeDialog="closeDialog" :editBookList="editBookList"></EditBookDialog>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import { ElMessage,ElMessageBox } from 'element-plus'
import type { Book } from './book/ts/book'
import AddBookDialog from '../components/book/addBook.vue'
import EditBookDialog from '../components/book/editBook.vue'
import { deepClone } from '../utils/copy'
import store from '../store'
import { addBook as addBookAction, deleteBook as deleteBookAction,editBook as editBookAction } from '../store'

const bookList = ref<Book[]>([])

onMounted(() => {
    bookList.value = store.getState().book
})

const addBookDialogVisible = ref(false)
const editBookVisible = ref(false)

const addBook = (book: Book) => {
    store.dispatch(addBookAction(book))
    bookList.value = store.getState().book
    ElMessage.success('添加成功')
    closeDialog()
}

const closeDialog = () => {
    editBookVisible.value = false
    addBookDialogVisible.value = false
}

const showBookDialog = () => {
    addBookDialogVisible.value = true
}

const selectedBooks = ref<Book[]>([])

const deleteConfirm = (index: number, row: Book) => {
    ElMessageBox.confirm('确定删除吗？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        store.dispatch(deleteBookAction(row.id))
        bookList.value = store.getState().book
        ElMessage.success('删除成功')
    })
}
const editBookList = ref<Book>()
const editBook = (row: Book) => {
    // 深拷贝row，避免直接修改原数据
    editBookList.value = deepClone(row)
    editBookVisible.value = true
}

const confirmEditBook = (book: Book) => {
    store.dispatch(editBookAction(book))
    bookList.value = store.getState().book
    ElMessage.success('编辑成功')
    closeDialog()
}

const handleSelectionChange = (val: Book[]) => {
    selectedBooks.value = val
}

const deleteSelectedBooks = () => {
    ElMessageBox.confirm('确定删除选中的书籍吗？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        selectedBooks.value.forEach(book => {
            store.dispatch(deleteBookAction(book.id))
        })
        bookList.value = store.getState().book
        ElMessage.success('删除成功')
    })
}
</script>

<style scoped>
.icon {
    width: 20px;
    height: 20px;
}
</style>