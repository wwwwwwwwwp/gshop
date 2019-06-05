/*
ajax请求函数模块:向外提供默认函数
返回值：promise对象（异步返回的数据是：response.data）
这部分不太懂！！！？？？？？？？？？？？
*/
import axios from 'axios'

export default function ajax(url,data={},type='GET'){

    return new Promise(function(resolve,reject){
        //执行异步ajax请求（用axios）
        let promise
        if(type === 'GET'){
            //准备url query参数数据将data中的参数据拼到url里面
            let dataStr = ''//用来拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            //发送get请求
            promise = axios.get(url)
        }
        else{
            //发送post请求
            promise = axios.post(url,data)
        }   
        promise.then(function(response){
            //成功了，调用resolve
            resolve(response.data)
        })
            .catch(function(error){
                //失败了，调用reject
                reject(error)
        })
    })

    
}