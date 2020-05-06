import axios from 'axios'
import { message ,Modal} from 'antd'; // 这里如果用了某个UI组件，那就加载一下消息提醒组件，这是React中引用了antd， vue中我用了elementui, 也差不多的引用方式 如： import { Message } from 'element-ui', 函数里面用到的message组件，请自行更换
import { errorMessage, whiteError } from "../utils/code";

// post请求的Content-Type用 application/x-www-form-urlencoded
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials = true;
// axios.defaults.timeout = 5000;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/*
  接口处理函数
*/

const headers ={
    // "Access-Control-Max-Age": 5000,
    // "Access-Control-Request-Method":"POST, GET, PUT, DELETE, OPTIONS",
    // "access-control-allow-origin": "localhost",
    // 'Access-Control-Allow-Origin':'http://localhost:3000/',
    // "Accept": "application/json",
    "withCredentials": true,
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":"accept, origin, authorization,X-Requested-With,Content-Type",
    CLIENT_TYPE: "tripod-ui",
    USER_INFO: "{\"id\":1,\"name\":\"lisa\",\"systemType\":8}", // USER_INFO ,// 
}


export default  {
    get (url:string, params?: undefined) {
        return apiAxios('GET', url, params)
    },
    post (url:string, params: { ownerId: any; items: any[]; }) {
        return apiAxios('POST', url, params)
    },
    put (url:string, params: { loginName?: string; password?: string; id?: any; ownerId?: any; status?: any; items?: any; name?: any; userName?: any; userEmail?: any; userTelephone?: any; ownerType?: any; }) {
        return apiAxios('PUT', url, params)
    },
    delete(url:string, params?: undefined) {
        return apiAxios('DELETE', url, params)
    }
}

const baseURL = " http://mock.studyinghome.com/mock/5e8e9339301a4f07a0c8a866/react/"

function apiAxios(method: string, url:any, params:any) {
    return new Promise((resolve, reject) => {
        // console.log("-------------");
        // console.log(url);
        // console.log(JSON.stringify(params));
        // console.log("-------------");

        let request:object = {
            method: method,
            url: url,
            data: method === 'POST' || method === 'PUT' ? params  : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
            baseURL: baseURL,
            emulateJSON: true,
            headers:headers
        };
        axios(request).then(function (response) {
            if (response.status === 200) {
                let res = response.data;
                if (!res.error) {
                    resolve(res);
                } else {
                    // window.alert(JSON.stringify(res,null,2));
                    console.log("apiAxios -> whiteError.indexOf(res.err)", whiteError.indexOf(res.error))
                    // whiteError.has(res.error)
                    if(whiteError.indexOf(res.error)>=0){
                        resolve(res)
                    }else{
                        Modal.error({
                            title: "提示",
                            content: errorMessage[res.error]
                        })
                    }
                    
                }
            } else {
                reject(response.data);
            }
        }).catch(function (err) {
            // window.alert(JSON.stringify(err,null,2));
            if (err) {
                message.error('API 错误, 请求失败')
            }
        })

    })    
}