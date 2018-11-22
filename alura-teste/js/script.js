
    var lessInfos = document.querySelector('.infos');
    var btn = document.querySelector('.btn');
collapse = () => {
    
    if(lessInfos.style.maxHeight){
        lessInfos.style.maxHeight = null;
        btn.innerHTML = "Mais Informações";
        lessInfos.style.borderBottom = 'none';
    }else{
        lessInfos.style.maxHeight = lessInfos.scrollHeight + "px";
        btn.innerHTML = "Menos Informações";
        lessInfos.style.borderBottom = '3px solid #F4F4F4';
        
    }

}

