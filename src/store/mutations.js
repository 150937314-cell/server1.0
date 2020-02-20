import {
    ADD_GOODS,
    INIT_SHOP_CART,
    REDUCE_CART,
    SELECTER_SINGER_GOODS,
    SELECTER_ALL_GOODS,
    TOTAL_PRICE,
    CLEAR_GOODS
        } from "./mutations-type.js"
        import { getStore,setStore } from "./../config/global"
        import Vue from "vue"
        export default{
    //1. 往购物车里添加数据
    [ADD_GOODS](state, {goodsId, goodsName, smallImage, goodsPrice}){
        let shopCart = state.shopCart;
            // 1.1 判断商品是否存在
            
          if(shopCart[goodsId]){ // 存在
            shopCart[goodsId].num++;
        }else { // 不存在
            shopCart[goodsId] = {
                "num": 1 ,
                "id": goodsId,
                "name": goodsName,
                "small_image": smallImage,
                "price": goodsPrice,
                "checked": true
            }
        }
             // 1.2  产生新对象
         state.shopCart = {...shopCart};
         // 1.3 存入本地
        setStore('shopCart', state.shopCart);
                    //键         值
    },

             // 2. 页面初始化，获取购物车的数据(本地)
    [INIT_SHOP_CART](state){
        let initCart = getStore('shopCart');
        if(initCart){
            state.shopCart = JSON.parse(initCart);
        }
    },
               //3.把商品移出购物车
               [REDUCE_CART](state,{goodsId}){
                   let shopCart=state.shopCart;
                   let goods=shopCart[goodsId];
                   if(goods['num']>0){
                       goods['num']--;
                       //找到该商品
                        if(goods['num']==0){
                            delete shopCart[goodsId];
                        }
                   }else{
                       goods=null;
                   }
                   //3.2同时数据
                   state.shopCart = {...shopCart};
                    setStore('shopCart', state.shopCart);
               },
               //4.SELECTER_SINGER_GOODS单选和取消
               [SELECTER_SINGER_GOODS](state,{goodsId}){
                    let shopCart=state.shopCart
                    let goods=shopCart[goodsId];
                    if(goods){
                        if(goods.checked){//存在该属性
                            goods.checked=!goods.checked
                        }else{
                            Vue.set(goods,"checked",true)
                        }
                    }  
                    //同时数据 
                    state.shopCart={...shopCart};
                    setStore("shopCart",state.shopCart); 
               },
               //5.全选和全取消
               [SELECTER_ALL_GOODS](state,{isSelected}){
                let shopCart=state.shopCart;               
                Object.values(shopCart).forEach((goods,index) => {
                    if(goods.checked){ // 存在该属性
                        goods.checked = !isSelected;
                    } else {
                        Vue.set(goods, 'checked', !isSelected);
                    }
                });
                //同时数据 
                state.shopCart={...shopCart};
               },
               //6.清空购物车
               [CLEAR_GOODS](state){
                   state.shopCart=null;
                   state.shopCart={...state.shopCart}
                    //同时数据 
                state.shopCart={...shopCart};
               }

}