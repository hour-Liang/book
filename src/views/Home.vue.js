import { ref } from 'vue';
const activeMenu = ref('BookList');
const handleSelect = (index) => {
    activeMenu.value = index;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "container" },
});
const __VLS_0 = {}.ElContainer;
/** @type {[typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ]} */ ;
// @ts-ignore
ElContainer;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "container-content" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "container-content" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
const __VLS_6 = {}.ElAside;
/** @type {[typeof __VLS_components.ElAside, typeof __VLS_components.elAside, typeof __VLS_components.ElAside, typeof __VLS_components.elAside, ]} */ ;
// @ts-ignore
ElAside;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
    ...{ class: "aside" },
}));
const __VLS_8 = __VLS_7({
    ...{ class: "aside" },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_11 } = __VLS_9.slots;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-contaniner" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.img, __VLS_intrinsics.img)({
    src: "../assets/logo.png",
    alt: "logo",
    ...{ class: "logo-img" },
});
const __VLS_12 = {}.ElMenu;
/** @type {[typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, typeof __VLS_components.ElMenu, typeof __VLS_components.elMenu, ]} */ ;
// @ts-ignore
ElMenu;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ 'onSelect': {} },
    defaultActive: (__VLS_ctx.activeMenu),
}));
const __VLS_14 = __VLS_13({
    ...{ 'onSelect': {} },
    defaultActive: (__VLS_ctx.activeMenu),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
let __VLS_17;
const __VLS_18 = ({ select: {} },
    { onSelect: (__VLS_ctx.handleSelect) });
const { default: __VLS_19 } = __VLS_15.slots;
// @ts-ignore
[activeMenu, handleSelect,];
const __VLS_20 = {}.ElMenuItem;
/** @type {[typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, typeof __VLS_components.ElMenuItem, typeof __VLS_components.elMenuItem, ]} */ ;
// @ts-ignore
ElMenuItem;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    index: "BookList",
}));
const __VLS_22 = __VLS_21({
    index: "BookList",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const { default: __VLS_25 } = __VLS_23.slots;
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
var __VLS_23;
var __VLS_15;
var __VLS_16;
var __VLS_9;
const __VLS_26 = {}.ElContainer;
/** @type {[typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, typeof __VLS_components.ElContainer, typeof __VLS_components.elContainer, ]} */ ;
// @ts-ignore
ElContainer;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
    ...{ class: "container-content" },
}));
const __VLS_28 = __VLS_27({
    ...{ class: "container-content" },
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
const { default: __VLS_31 } = __VLS_29.slots;
const __VLS_32 = {}.ElMain;
/** @type {[typeof __VLS_components.ElMain, typeof __VLS_components.elMain, typeof __VLS_components.ElMain, typeof __VLS_components.elMain, ]} */ ;
// @ts-ignore
ElMain;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    ...{ class: "main" },
}));
const __VLS_34 = __VLS_33({
    ...{ class: "main" },
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const { default: __VLS_37 } = __VLS_35.slots;
const __VLS_38 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
RouterView;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({}));
const __VLS_40 = __VLS_39({}, ...__VLS_functionalComponentArgsRest(__VLS_39));
var __VLS_35;
var __VLS_29;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['container-content']} */ ;
/** @type {__VLS_StyleScopedClasses['aside']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-contaniner']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-img']} */ ;
/** @type {__VLS_StyleScopedClasses['container-content']} */ ;
/** @type {__VLS_StyleScopedClasses['main']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
