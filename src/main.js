let html=document.querySelector('#html')
let style=document.querySelector('#style')
let strings=`/*你好，我是一名前端新人
*接下来我要加样式了
*我要加的样式是
**/

#div1{
    height:200px;
    width:200px;
    border:1px solid red;
   
}
/*接下来画一个圆
**/
#div1{
    border-radius:50%;
    border:none;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*接下来画两个神秘小球
**/

#div1::before{
    width:100px;
    height:100px;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

#div1::after{
    width:100px;
    height:100px;
    left:50%;
    bottom:0px;
    transform:translateX(-50%);
    border-radius:50%;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

` 
let string2=''
let n=-1

step()

function step(){
    setTimeout(()=>{
        n += 1
        if(strings[n]==='\n'){
            string2+="</br>"
        }
        else if(strings[n]===' '){
            string2+="&nbsp"
        }
        else{
            string2+=strings[n]
        }
        html.innerHTML = string2
        style.innerHTML= strings.substring(0,n)
        window.scrollTo(0,9999)
        html.scrollTo(0,9999)
        if (n < strings.length-1) {
            step()
        }
    },10)
    
   

}
