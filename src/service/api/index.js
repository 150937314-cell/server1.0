import ajax from "./ajax"
// http://demo.itlike.com/web/xlmc/api/homeApi
// http://demo.itlike.com/web/xlmc/api/homeApi/categories
// http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001

//1.基础路径
  const BASE_URL="http://demo.itlike.com/web/xlmc"
  export const getHomeData=()=>ajax(BASE_URL+"/api/homeApi");
  // 分类左边
  export const getCategories=()=>ajax(BASE_URL+"/api/homeApi/categories");
  
  //分类右边
  export const getCategoriesDetail=preParams=>ajax(BASE_URL+"/api/homeApi/categoriesdetail"+preParams);
  

//2. 用户中心接口
  //http://demo.itlike.com/web/xlmc/api/send_code 
  const LOCAL_BASE_URL="http://demo.itlike.com/web/xlmc"
      //2.1获取验证码
      export const getPhoneCode=(phone)=>ajax(LOCAL_BASE_URL+"/api/send_code",{phone})
      //2.2手机验证码登录
      export const phoneCodeLogin=(phone,code)=>ajax(LOCAL_BASE_URL+"/api/login_code",{phone,code},"POST")
