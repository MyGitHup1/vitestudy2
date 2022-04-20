console.log('worker')
import user from "./user.json"

console.log(user)
onmessage=function (msg){
    // console.log("worker 收到消息",msg)
    // postMessage(user)
}