<template>
    <div id="MyAddress">
         <!-- 导航栏 -->
        <van-nav-bar
            title="我的地址" 
            :fixed=true
            :border=true
            left-arrow
            @click-left="onClickLeft"
            />
             <van-address-list
                v-model="chosenAddressId"
                :list="list"
                @add="onAdd"
                @edit="onEdit"
                style="margin-top:3.5rem;"
        ></van-address-list> 

         <transition name="router-slider" mode="out-in">
            <router-view></router-view>
        </transition> 
    </div>
</template>
<script>
import {Toast} from 'vant'
export default {
    name:"MyAddress",
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        onAdd(){
            // Toast('新增地址')
            this.$router.push({
                path:"/confirmOrder/myaddress/addAddress"
            })
        },
        onEdit(item,index){
            // Toast('编辑地址'+index)
            this.$router.push({
                path:"/confirmOrder/myaddress/editAddress"
            })
        },
    } ,
    data() {
        return {
        chosenAddressId: 1,
        list: [{
            name: '张三',
            tel: '13000000000',
            id: 1,
            Address:"浙江省杭州市"
        },
        {
            name: '李四',
            tel: '14000000000',
            id: 2,
            Address:"浙江省杭州市"
        },
        {
            name: '王无',
            tel: '15000000000',
            id: 3,
            Address:"浙江省杭州市"
        }
        ]
        };
  },

}
</script>
<style scope>
    #MyAddress{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: #f5f5f5;
        z-index: 9999; 
    }
     .router-slider-active,.router-slider-leave-active{
         transition: all 0.5s;
    }
    .router-slider-enter,.router-slider-leave-enter{
        transform:translate3d(2rem,0,0);
        opacity:0;
    }
</style>