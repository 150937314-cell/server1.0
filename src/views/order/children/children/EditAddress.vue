<template>
    <div id="editAddress">
         <van-nav-bar
            title="修改地址" 
            :fixed=true
            :border=true
            left-arrow
            @click-left="onClickLeft"
        />
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @change-detail="onChangeDetail"
            style="margin-top:3rem"
        />
    </div>
</template>
<script>
export default {
    name:"EditAddress",
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
         onSave() {
      Toast('save');
    },
        onChangeDetail(val) {
        if (val) {
            this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
            }];
        } else {
            this.searchResult = [];
        }
        }
    },
     data() {
        return {
            areaList:{},
            searchResult: []
        }
    },
}
</script>
<style scoped>
     #editAddress{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: #f5f5f5;
        z-index: 9999; 
    }
</style>