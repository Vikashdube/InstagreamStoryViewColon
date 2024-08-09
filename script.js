var arr = [
    {dp: "https://images.unsplash.com/photo-1706943262117-b35de4ba50b4?q=80&w=1301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1706943262454-84ee74854346?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {dp:"https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1631005436794-ccaa79de61ba?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },


    {dp:"https://images.unsplash.com/photo-1631947430066-48c30d57b943?q=80&w=1316&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " ,story:
        "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {dp: "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:
            "https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

        {dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:
            "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {dp: "https://images.unsplash.com/photo-1563992891888-3a441b92e7c7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            story: "https://images.unsplash.com/photo-1603217192766-e9db2d08a0fc?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },

        
 
];

var clutter = "";

arr.forEach(function(elem,idx){
    clutter += `<div class="story"> 
           <img id= "${idx}" src="${elem.dp}" alt="">
      </div>`
})
document.querySelector("#stroriyan").innerHTML = clutter;

document.querySelector("#stroriyan").addEventListener("click" , function(dets){
   
    document.querySelector("#full-screen").style.display = "block ";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`


    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none ";
    },2000)
})

//arr[dets.target.id].story

