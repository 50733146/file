// var fs = require('fs');
// fs.writeFile("test.html","good?",function(err){
//     if (err)
//         console.log(err)
//     else
//         console.log("write operation complete.")
// });
var webtitle=document.getElementById("webtitle");
var title=document.getElementById("title");
var content=document.getElementById("content");
var upbtn=document.getElementById("up-btn");
var list=document.getElementById("list");
upbtn.addEventListener("click", function(){
    list.innerHTML=`
    <div class="article">
        <h1>${webtitle.value}</h1>
        <h2>${title.value}</h2>
        <h3>${content.value}</h3>
    </div>` + list.innerHTML
    ;
    webtitle.value ="";
    title.value ="";
    content.value ="";
})
