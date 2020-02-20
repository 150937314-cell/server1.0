<template>
    <div class="wrapper emptyWrapper">
        <div
            v-for="details in categoriesDetailData"
            :key="details.id"
        >
            <div class="categoryTitle">{{details.name}}</div>
            <ProductItem :products="details.products" />
        </div>
    </div>
</template>
<script>
    //1.引入组件
    import ProductItem from "./ProductItem"
    export default{
        name:"ContentView",
        props:{
            categoriesDetailData:Array
        },
        components:{
            "ProductItem":ProductItem
        }
    }
</script>
<style scoped>
.wrapper {
        overflow-y: auto;
        overflow-scrolling: touch;
    }

    .wrapper {
        position: absolute;
        left: 5.3125rem;
        right: 0;
        bottom: 0;
        top: 0;
        background: #FFF;
    }

    .categoryTitle {
        padding: 0 0.3125rem;
        height: 1.25rem;
        line-height: 1.25rem;
        font-size: 0.75rem;
        background: #F8F8F8;
        color: #666666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>