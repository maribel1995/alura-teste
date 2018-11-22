
    var info = document.querySelector('.infos__items');
    // var infosItem = document.querySelector('.infos__item');
    var btn = document.querySelector('.btn__link');
collapse = () => {
    
    if(info.style.maxHeight){
        info.style.maxHeight = null;
        btn.innerHTML = "Mais Informações";
        info.style.borderBottom = 'none';
    }else{
        info.style.maxHeight = info.scrollHeight + "px";
        btn.innerHTML = "Menos Informações";
        info.style.borderBottom = '3px solid #F4F4F4';
    }

}

