import { ref, onMounted } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import AddBookDialog from '../components/book/addBook.vue';
import EditBookDialog from '../components/book/editBook.vue';
import { deepClone } from '../utils/copy';
import store from '../store';
import { addBook as addBookAction, deleteBook as deleteBookAction, editBook as editBookAction } from '../store';
const bookList = ref([]);
onMounted(() => {
    bookList.value = store.getState().book;
});
const addBookDialogVisible = ref(false);
const editBookVisible = ref(false);
const addBook = (book) => {
    store.dispatch(addBookAction(book));
    bookList.value = store.getState().book;
    ElMessage.success('添加成功');
    closeDialog();
};
const closeDialog = () => {
    editBookVisible.value = false;
    addBookDialogVisible.value = false;
};
const showBookDialog = () => {
    addBookDialogVisible.value = true;
};
const selectedBooks = ref([]);
const deleteConfirm = (index, row) => {
    ElMessageBox.confirm('确定删除吗？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        store.dispatch(deleteBookAction(row.id));
        bookList.value = store.getState().book;
        ElMessage.success('删除成功');
    });
};
const editBookList = ref();
const editBook = (row) => {
    // 深拷贝row，避免直接修改原数据
    editBookList.value = deepClone(row);
    editBookVisible.value = true;
};
const confirmEditBook = (book) => {
    store.dispatch(editBookAction(book));
    bookList.value = store.getState().book;
    ElMessage.success('编辑成功');
    closeDialog();
};
const handleSelectionChange = (val) => {
    selectedBooks.value = val;
};
const deleteSelectedBooks = () => {
    ElMessageBox.confirm('确定删除选中的书籍吗？', '删除确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        selectedBooks.value.forEach(book => {
            store.dispatch(deleteBookAction(book.id));
        });
        bookList.value = store.getState().book;
        ElMessage.success('删除成功');
    });
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.ElCard;
/** @type {[typeof __VLS_components.ElCard, typeof __VLS_components.elCard, typeof __VLS_components.ElCard, typeof __VLS_components.elCard, ]} */ ;
// @ts-ignore
ElCard;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ style: "max-width: 100%;text-align: left;" },
}));
const __VLS_2 = __VLS_1({
    ...{ style: "max-width: 100%;text-align: left;" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { header: __VLS_6 } = __VLS_3.slots;
    const __VLS_7 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    ElButton;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        ...{ 'onClick': {} },
        type: "primary",
        ...{ class: "-m-2" },
    }));
    const __VLS_9 = __VLS_8({
        ...{ 'onClick': {} },
        type: "primary",
        ...{ class: "-m-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    let __VLS_12;
    const __VLS_13 = ({ click: {} },
        { onClick: (__VLS_ctx.showBookDialog) });
    const { default: __VLS_14 } = __VLS_10.slots;
    // @ts-ignore
    [showBookDialog,];
    const __VLS_15 = {}.ElIcon;
    /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
    // @ts-ignore
    ElIcon;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({}));
    const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
    const { default: __VLS_20 } = __VLS_18.slots;
    const __VLS_21 = {}.Plus;
    /** @type {[typeof __VLS_components.Plus, ]} */ ;
    // @ts-ignore
    Plus;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({}));
    const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
    var __VLS_18;
    var __VLS_10;
    var __VLS_11;
    if (__VLS_ctx.selectedBooks.length > 1) {
        // @ts-ignore
        [selectedBooks,];
        const __VLS_27 = {}.ElTooltip;
        /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
        // @ts-ignore
        ElTooltip;
        // @ts-ignore
        const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({
            content: "删除",
            placement: "top",
        }));
        const __VLS_29 = __VLS_28({
            content: "删除",
            placement: "top",
        }, ...__VLS_functionalComponentArgsRest(__VLS_28));
        const { default: __VLS_32 } = __VLS_30.slots;
        const __VLS_33 = {}.ElButton;
        /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
        // @ts-ignore
        ElButton;
        // @ts-ignore
        const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
            ...{ 'onClick': {} },
            type: "danger",
        }));
        const __VLS_35 = __VLS_34({
            ...{ 'onClick': {} },
            type: "danger",
        }, ...__VLS_functionalComponentArgsRest(__VLS_34));
        let __VLS_38;
        const __VLS_39 = ({ click: {} },
            { onClick: (__VLS_ctx.deleteSelectedBooks) });
        const { default: __VLS_40 } = __VLS_36.slots;
        // @ts-ignore
        [deleteSelectedBooks,];
        const __VLS_41 = {}.ElIcon;
        /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
        // @ts-ignore
        ElIcon;
        // @ts-ignore
        const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({}));
        const __VLS_43 = __VLS_42({}, ...__VLS_functionalComponentArgsRest(__VLS_42));
        const { default: __VLS_46 } = __VLS_44.slots;
        const __VLS_47 = {}.DeleteFilled;
        /** @type {[typeof __VLS_components.DeleteFilled, ]} */ ;
        // @ts-ignore
        DeleteFilled;
        // @ts-ignore
        const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({}));
        const __VLS_49 = __VLS_48({}, ...__VLS_functionalComponentArgsRest(__VLS_48));
        var __VLS_44;
        var __VLS_36;
        var __VLS_37;
        var __VLS_30;
    }
}
const __VLS_53 = {}.ElTable;
/** @type {[typeof __VLS_components.ElTable, typeof __VLS_components.elTable, typeof __VLS_components.ElTable, typeof __VLS_components.elTable, ]} */ ;
// @ts-ignore
ElTable;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    ...{ 'onSelectionChange': {} },
    data: (__VLS_ctx.bookList),
    ...{ style: "width: 100%;" },
    headerCellStyle: ({ textAlign: 'center' }),
    cellStyle: ({ textAlign: 'center' }),
    defaultSort: ({ prop: 'category', order: 'descending' }),
}));
const __VLS_55 = __VLS_54({
    ...{ 'onSelectionChange': {} },
    data: (__VLS_ctx.bookList),
    ...{ style: "width: 100%;" },
    headerCellStyle: ({ textAlign: 'center' }),
    cellStyle: ({ textAlign: 'center' }),
    defaultSort: ({ prop: 'category', order: 'descending' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
let __VLS_58;
const __VLS_59 = ({ selectionChange: {} },
    { onSelectionChange: (__VLS_ctx.handleSelectionChange) });
const { default: __VLS_60 } = __VLS_56.slots;
// @ts-ignore
[bookList, handleSelectionChange,];
const __VLS_61 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
ElTableColumn;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
    type: "selection",
    width: "55",
}));
const __VLS_63 = __VLS_62({
    type: "selection",
    width: "55",
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
const __VLS_67 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
ElTableColumn;
// @ts-ignore
const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({
    prop: "bookName",
    label: "书籍名称",
    resizable: (false),
}));
const __VLS_69 = __VLS_68({
    prop: "bookName",
    label: "书籍名称",
    resizable: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_68));
const __VLS_73 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
ElTableColumn;
// @ts-ignore
const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
    prop: "bookDesc",
    label: "书籍描述",
    resizable: (false),
}));
const __VLS_75 = __VLS_74({
    prop: "bookDesc",
    label: "书籍描述",
    resizable: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_74));
const __VLS_79 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
ElTableColumn;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({
    prop: "category",
    label: "书籍分类",
    resizable: (false),
    sortable: true,
}));
const __VLS_81 = __VLS_80({
    prop: "category",
    label: "书籍分类",
    resizable: (false),
    sortable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_80));
const __VLS_85 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
ElTableColumn;
// @ts-ignore
const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
    prop: "price",
    label: "书籍价格",
    resizable: (false),
}));
const __VLS_87 = __VLS_86({
    prop: "price",
    label: "书籍价格",
    resizable: (false),
}, ...__VLS_functionalComponentArgsRest(__VLS_86));
const __VLS_91 = {}.ElTableColumn;
/** @type {[typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, typeof __VLS_components.ElTableColumn, typeof __VLS_components.elTableColumn, ]} */ ;
// @ts-ignore
ElTableColumn;
// @ts-ignore
const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({
    label: "操作",
}));
const __VLS_93 = __VLS_92({
    label: "操作",
}, ...__VLS_functionalComponentArgsRest(__VLS_92));
const { default: __VLS_96 } = __VLS_94.slots;
{
    const { default: __VLS_97 } = __VLS_94.slots;
    const [scope] = __VLS_getSlotParameters(__VLS_97);
    const __VLS_98 = {}.ElTooltip;
    /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
    // @ts-ignore
    ElTooltip;
    // @ts-ignore
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({
        content: "编辑",
        placement: "top",
    }));
    const __VLS_100 = __VLS_99({
        content: "编辑",
        placement: "top",
    }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    const { default: __VLS_103 } = __VLS_101.slots;
    const __VLS_104 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    ElButton;
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({
        ...{ 'onClick': {} },
        type: "primary",
    }));
    const __VLS_106 = __VLS_105({
        ...{ 'onClick': {} },
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    let __VLS_109;
    const __VLS_110 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.editBook(scope.row);
                // @ts-ignore
                [editBook,];
            } });
    const { default: __VLS_111 } = __VLS_107.slots;
    const __VLS_112 = {}.ElIcon;
    /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
    // @ts-ignore
    ElIcon;
    // @ts-ignore
    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({}));
    const __VLS_114 = __VLS_113({}, ...__VLS_functionalComponentArgsRest(__VLS_113));
    const { default: __VLS_117 } = __VLS_115.slots;
    const __VLS_118 = {}.Edit;
    /** @type {[typeof __VLS_components.Edit, ]} */ ;
    // @ts-ignore
    Edit;
    // @ts-ignore
    const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({}));
    const __VLS_120 = __VLS_119({}, ...__VLS_functionalComponentArgsRest(__VLS_119));
    var __VLS_115;
    var __VLS_107;
    var __VLS_108;
    var __VLS_101;
    const __VLS_124 = {}.ElTooltip;
    /** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
    // @ts-ignore
    ElTooltip;
    // @ts-ignore
    const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({
        content: "删除",
        placement: "top",
    }));
    const __VLS_126 = __VLS_125({
        content: "删除",
        placement: "top",
    }, ...__VLS_functionalComponentArgsRest(__VLS_125));
    const { default: __VLS_129 } = __VLS_127.slots;
    const __VLS_130 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    ElButton;
    // @ts-ignore
    const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({
        ...{ 'onClick': {} },
        type: "danger",
    }));
    const __VLS_132 = __VLS_131({
        ...{ 'onClick': {} },
        type: "danger",
    }, ...__VLS_functionalComponentArgsRest(__VLS_131));
    let __VLS_135;
    const __VLS_136 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.deleteConfirm(scope.$index, scope.row);
                // @ts-ignore
                [deleteConfirm,];
            } });
    const { default: __VLS_137 } = __VLS_133.slots;
    const __VLS_138 = {}.ElIcon;
    /** @type {[typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, typeof __VLS_components.ElIcon, typeof __VLS_components.elIcon, ]} */ ;
    // @ts-ignore
    ElIcon;
    // @ts-ignore
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({}));
    const __VLS_140 = __VLS_139({}, ...__VLS_functionalComponentArgsRest(__VLS_139));
    const { default: __VLS_143 } = __VLS_141.slots;
    const __VLS_144 = {}.DeleteFilled;
    /** @type {[typeof __VLS_components.DeleteFilled, ]} */ ;
    // @ts-ignore
    DeleteFilled;
    // @ts-ignore
    const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({}));
    const __VLS_146 = __VLS_145({}, ...__VLS_functionalComponentArgsRest(__VLS_145));
    var __VLS_141;
    var __VLS_133;
    var __VLS_134;
    var __VLS_127;
}
var __VLS_94;
var __VLS_56;
var __VLS_57;
var __VLS_3;
/** @type {[typeof AddBookDialog, typeof AddBookDialog, ]} */ ;
// @ts-ignore
const __VLS_150 = __VLS_asFunctionalComponent(AddBookDialog, new AddBookDialog({
    ...{ 'onAddBook': {} },
    ...{ 'onCloseDialog': {} },
    addBookDialogVisible: (__VLS_ctx.addBookDialogVisible),
}));
const __VLS_151 = __VLS_150({
    ...{ 'onAddBook': {} },
    ...{ 'onCloseDialog': {} },
    addBookDialogVisible: (__VLS_ctx.addBookDialogVisible),
}, ...__VLS_functionalComponentArgsRest(__VLS_150));
let __VLS_154;
const __VLS_155 = ({ addBook: {} },
    { onAddBook: (__VLS_ctx.addBook) });
const __VLS_156 = ({ closeDialog: {} },
    { onCloseDialog: (__VLS_ctx.closeDialog) });
// @ts-ignore
[addBookDialogVisible, addBook, closeDialog,];
var __VLS_152;
var __VLS_153;
/** @type {[typeof EditBookDialog, typeof EditBookDialog, ]} */ ;
// @ts-ignore
const __VLS_158 = __VLS_asFunctionalComponent(EditBookDialog, new EditBookDialog({
    ...{ 'onEditBook': {} },
    ...{ 'onCloseDialog': {} },
    editBookVisible: (__VLS_ctx.editBookVisible),
    editBookList: (__VLS_ctx.editBookList),
}));
const __VLS_159 = __VLS_158({
    ...{ 'onEditBook': {} },
    ...{ 'onCloseDialog': {} },
    editBookVisible: (__VLS_ctx.editBookVisible),
    editBookList: (__VLS_ctx.editBookList),
}, ...__VLS_functionalComponentArgsRest(__VLS_158));
let __VLS_162;
const __VLS_163 = ({ editBook: {} },
    { onEditBook: (__VLS_ctx.confirmEditBook) });
const __VLS_164 = ({ closeDialog: {} },
    { onCloseDialog: (__VLS_ctx.closeDialog) });
// @ts-ignore
[closeDialog, editBookVisible, editBookList, confirmEditBook,];
var __VLS_160;
var __VLS_161;
/** @type {__VLS_StyleScopedClasses['-m-2']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
