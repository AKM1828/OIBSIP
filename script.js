console.log("Script running...")
document.querySelector('img.Cross').style.display='none';
document.querySelector('.Hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');//this performs the action hiding sidebar
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.Ham').style.display='inline';
        document.querySelector('img.Cross').style.display='none'
    }
    else{
        document.querySelector('.Ham').style.display='none'
        setTimeout(()=>{
            document.querySelector('img.Cross').style.display='inline'},300);
      
    }
})