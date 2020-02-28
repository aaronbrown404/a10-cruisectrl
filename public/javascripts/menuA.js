function clickMenu(){
    $('.pop-up').toggle();
    let items=['settings','help','contact','logout'];
    for(let name of items){
        let elem = '.pop-up .'+name;
        $(elem).click(function(){
            if($(elem).hasClass('active')){
                $(elem).removeClass('active');
            }else{
                $(elem).addClass('active');
            }
        })
    }
    for(let name of items){
        let elem = '.pop-up .'+name;
        let elemChild = elem+' img';
        $(elem).click(function(){
            if($(elem).hasClass('active')){
                $(elemChild).attr('src','../../images/'+name+'-active.png');
                if(name === 'logout'){
                    clickLogout();
                }
            }else{
                $(elemChild).attr('src','../../images/'+name+'.png');
            }
        })
    }
    $(document).mouseup(function(e){

        let popUp=$('.pop-up');
        if(!popUp.is(e.target) && popUp.has(e.target).length === 0){
            popUp.css('display','none');
            $('.index').css('opacity','100%');
            $('.index *').prop('disabled',false);
        }})

}

function clickLogout(){
    $.ajax({
        url: '/logout',
        type: 'POST',
        cache: false,
        processData:false,
        success: function (response) {
            if (response.status === 2) {
                alert('Logout error!');
            }
            else{
                window.location.href='/login';
            }
        }
    })
}

function clickHelp(){
    window.location.href = '/help';
}

function clickContact(){
    window.location.href = '/contact';
}
