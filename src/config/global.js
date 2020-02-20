export const showBack=(callback)=>{
    let docB=document.documentElement || document.body  //做兼容处理
    
    //2.监听滚动
    document.addEventListener("scroll",()=>{
        showBackFunc()
    },false);

    //3.监听触摸
    document.addEventListener("touchstar",()=>{
        showBackFunc()
    },{passive:true});
    
    document.addEventListener("touchmove",()=>{
        showBackFunc()
    },{passive:true});
    
    document.addEventListener("touchend",()=>{
        moveEnd()
    },{passive:true});
    
    const moveEnd=()=>{
        requestAnimationFrame(()=>{
            
        });
    };


    //判断是否到达目标点
    const showBackFunc=()=>{
         console.log(docB.scrollTop);
         if(docB.scrollTop>=200){
             callback(true);
         }else{
             callback(false);
         }
    }
};

/************************************************************************/  
// 本地化存储
export const setStore=(name,content)=>{
    if(!name) return;
    //存数组或者对象需要强制转换  
    if(typeof content!=="string"){
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name,content);
}

// 本地化获取
export const  getStore = name=>{
    if(!name) return;
    return window.localStorage.getItem(name);
};
//本地化删除
export const removeStore=(name)=>{
    if(!name) return;
    return window.localStorage.removeItem(name);
}