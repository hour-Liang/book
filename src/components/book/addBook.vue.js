import { ref, watch } from 'vue';
import { categoryList } from './ts/book';
const props = defineProps({
    addBookDialogVisible: {
        type: Boolean,
        default: false
    }
});
const bookList = ref({
    id: 0,
    bookName: '',
    bookDesc: '',
    price: 0,
    category: ''
});
const emit = defineEmits(['addBook', 'closeDialog']);
const addBook = () => {
    emit('addBook', bookList.value);
    closeDialog();
};
const addBookDialogVisible = ref(false);
watch(() => props.addBookDialogVisible, (newVal) => {
    addBookDialogVisible.value = newVal;
});
const resetBookList = () => {
    bookList.value = {
        id: 0,
        bookName: '',
        bookDesc: '',
        price: 0,
        category: ''
    };
};
const closeDialog = () => {
    resetBookList();
    emit('closeDialog');
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.ElDialog;
/** @type {[typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, typeof __VLS_components.ElDialog, typeof __VLS_components.elDialog, ]} */ ;
// @ts-ignore
ElDialog;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClose': {} },
    title: "书籍详情",
    modelValue: (__VLS_ctx.addBookDialogVisible),
    width: "50%",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClose': {} },
    title: "书籍详情",
    modelValue: (__VLS_ctx.addBookDialogVisible),
    width: "50%",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ close: {} },
    { onClose: (__VLS_ctx.closeDialog) });
var __VLS_7 = {};
const { default: __VLS_8 } = __VLS_3.slots;
// @ts-ignore
[addBookDialogVisible, closeDialog,];
const __VLS_9 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
ElForm;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ref: "ruleFormRef",
    ...{ style: "max-width: 600px" },
    model: (__VLS_ctx.bookList),
    statusIcon: true,
    labelWidth: "auto",
}));
const __VLS_11 = __VLS_10({
    ref: "ruleFormRef",
    ...{ style: "max-width: 600px" },
    model: (__VLS_ctx.bookList),
    statusIcon: true,
    labelWidth: "auto",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
/** @type {typeof __VLS_ctx.ruleFormRef} */ ;
var __VLS_14 = {};
const { default: __VLS_16 } = __VLS_12.slots;
// @ts-ignore
[bookList, ruleFormRef,];
const __VLS_17 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
ElFormItem;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    label: "书籍名称",
    prop: "bookName",
}));
const __VLS_19 = __VLS_18({
    label: "书籍名称",
    prop: "bookName",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
const { default: __VLS_22 } = __VLS_20.slots;
const __VLS_23 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
ElInput;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
    modelValue: (__VLS_ctx.bookList.bookName),
    autocomplete: "off",
    placeholder: "请输入书籍名称",
}));
const __VLS_25 = __VLS_24({
    modelValue: (__VLS_ctx.bookList.bookName),
    autocomplete: "off",
    placeholder: "请输入书籍名称",
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
// @ts-ignore
[bookList,];
var __VLS_20;
const __VLS_29 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
ElFormItem;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    label: "书籍描述",
    prop: "bookDesc",
}));
const __VLS_31 = __VLS_30({
    label: "书籍描述",
    prop: "bookDesc",
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
const { default: __VLS_34 } = __VLS_32.slots;
const __VLS_35 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
ElInput;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
    modelValue: (__VLS_ctx.bookList.bookDesc),
    autocomplete: "off",
    placeholder: "请输入书籍描述",
}));
const __VLS_37 = __VLS_36({
    modelValue: (__VLS_ctx.bookList.bookDesc),
    autocomplete: "off",
    placeholder: "请输入书籍描述",
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
// @ts-ignore
[bookList,];
var __VLS_32;
const __VLS_41 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
ElFormItem;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    label: "书籍分类",
    prop: "category",
}));
const __VLS_43 = __VLS_42({
    label: "书籍分类",
    prop: "category",
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
const { default: __VLS_46 } = __VLS_44.slots;
const __VLS_47 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
ElSelect;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({
    modelValue: (__VLS_ctx.bookList.category),
    placeholder: "请选择书籍分类",
}));
const __VLS_49 = __VLS_48({
    modelValue: (__VLS_ctx.bookList.category),
    placeholder: "请选择书籍分类",
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
const { default: __VLS_52 } = __VLS_50.slots;
// @ts-ignore
[bookList,];
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.categoryList))) {
    // @ts-ignore
    [categoryList,];
    const __VLS_53 = {}.ElOption;
    /** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
    // @ts-ignore
    ElOption;
    // @ts-ignore
    const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
        key: (item.value),
        label: (item.label),
        value: (item.value),
    }));
    const __VLS_55 = __VLS_54({
        key: (item.value),
        label: (item.label),
        value: (item.value),
    }, ...__VLS_functionalComponentArgsRest(__VLS_54));
}
var __VLS_50;
var __VLS_44;
const __VLS_59 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
ElFormItem;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({
    label: "书籍价格",
    prop: "price",
}));
const __VLS_61 = __VLS_60({
    label: "书籍价格",
    prop: "price",
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
const { default: __VLS_64 } = __VLS_62.slots;
const __VLS_65 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
ElInput;
// @ts-ignore
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
    modelValue: (__VLS_ctx.bookList.price),
    autocomplete: "off",
    placeholder: "请输入书籍价格(元)",
}));
const __VLS_67 = __VLS_66({
    modelValue: (__VLS_ctx.bookList.price),
    autocomplete: "off",
    placeholder: "请输入书籍价格(元)",
}, ...__VLS_functionalComponentArgsRest(__VLS_66));
// @ts-ignore
[bookList,];
var __VLS_62;
var __VLS_12;
{
    const { footer: __VLS_71 } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    const __VLS_72 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    ElButton;
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
        ...{ 'onClick': {} },
    }));
    const __VLS_74 = __VLS_73({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    let __VLS_77;
    const __VLS_78 = ({ click: {} },
        { onClick: (__VLS_ctx.closeDialog) });
    const { default: __VLS_79 } = __VLS_75.slots;
    // @ts-ignore
    [closeDialog,];
    var __VLS_75;
    var __VLS_76;
    const __VLS_80 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    ElButton;
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
        ...{ 'onClick': {} },
        type: "primary",
    }));
    const __VLS_82 = __VLS_81({
        ...{ 'onClick': {} },
        type: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    let __VLS_85;
    const __VLS_86 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.addBook();
                // @ts-ignore
                [addBook,];
            } });
    const { default: __VLS_87 } = __VLS_83.slots;
    var __VLS_83;
    var __VLS_84;
}
var __VLS_3;
var __VLS_4;
// @ts-ignore
var __VLS_15 = __VLS_14;
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    props: {
        addBookDialogVisible: {
            type: Boolean,
            default: false
        }
    },
});
export default {};
