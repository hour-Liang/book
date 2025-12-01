<template>
    <el-dialog
        title="书籍详情"
        v-model="editBookVisible"
        width="50%"
        @close="closeDialog"
    >
        <el-form ref="ruleFormRef" style="max-width: 600px" :model="list" status-icon
            label-width="auto">
            <el-form-item label="书籍名称" prop="bookName">
                <el-input v-model="list.bookName" autocomplete="off" placeholder="请输入书籍名称" />
            </el-form-item>
            <el-form-item label="书籍描述" prop="bookDesc">
                <el-input v-model="list.bookDesc" autocomplete="off" placeholder="请输入书籍描述" />
            </el-form-item>
            <el-form-item label="书籍分类" prop="category">
                <el-select v-model="list.category" placeholder="请选择书籍分类">
                    <el-option
                        v-for="item in categoryList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-form-item>
            <el-form-item label="书籍价格" prop="price">
                <el-input v-model="list.price" autocomplete="off" placeholder="请输入书籍价格(元)" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div>
                <el-button @click="closeDialog">取消</el-button>
                <el-button type="primary" @click="editBook()">
                    确定修改
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue'
import type { Book } from './ts/book'
import { deepClone } from '../../utils/copy'
import { categoryList } from './ts/book'

const props = defineProps({ 
    editBookList: {
        type: Object as () => Book,
        default: () => ({
            bookName: '',
            bookDesc: '',
            price: 0,
            category: '',
        }),
    },
    editBookVisible: {
        type: Boolean,
        default: false,
    },
})
const emit = defineEmits(['closeDialog', 'editBook'])
const list = ref<Book>({
    id: 0,
    bookName: '',
    bookDesc: '',
    price: 0,
    category: '',
})
const editBookVisible = ref(false)
watch(() => props.editBookVisible, (newVal) => {
    editBookVisible.value = newVal
    list.value = deepClone(props.editBookList) // 深拷贝，避免直接修改 props 中的数据
})
const closeDialog = () => {
    console.log('关闭弹窗')
    emit('closeDialog')
}
const editBook = () => {
    console.log("editbook编辑后的书籍:",list.value)
    emit('editBook', list.value)
}
</script>

<style scoped>
</style>