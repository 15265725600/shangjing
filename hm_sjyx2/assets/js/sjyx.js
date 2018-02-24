
//填写描述字数限制
function wordLimit(obj,limit, obj1){
    $(obj).on('keyup',function(){
        var n = $(this).val().length;
        if(n > (limit-1)){
          $(this).val($(this).val().substring(0,limit));
        }else{
          var result = limit - n;
          $(obj1).html(result);
        }
    });
}

//班级圈点赞
$(document).on('click','.link-zan',function(){
    var cls = $(this).find('i').attr('class');
    var oSpan = $(this).find('span');
    var count = parseInt(oSpan.text());
    if(cls == 'icon-zan'){
      $(this).find('i').removeClass().addClass('icon-zang');
      oSpan.text(count - 1);
    }else {
      $(this).find('i').removeClass().addClass('icon-zan');
      oSpan.text(count + 1);
    }
});


//编辑资料上传头像

function uploadPicture(){
	$('#take-potrait').on('change',function(e){
        if (!window.FileReader) return;  
      
        var files = e.target.files;  
        var content = '';
        var j = 0;
        for (var i = 0, f; f = files[i]; i++) {  
        
            if (!f.type.match('image.*')) {  
                alert('文件'+ f.name + '不是图片') 
                continue;   
            }   
            var reader = new FileReader();  
            
            reader.onload = function(e){
                $('.potrait-input img').attr('src',e.target.result);                      
            } 
            reader.readAsDataURL(f); 
        }            
    });
}

//班级圈上传图片

function uploadImg(obj,ulObj){
    var j = 1;
    var arr = new Array();

    $(document).on('change',obj,function(e){
          if (!window.FileReader) return;  
            var files = e.target.files; 
          
            var content = '';
           
            for (var i = 0, f; f = files[i]; i++) {  
        
                if (!f.type.match('image.*')) {  
                  alert('文件'+ f.name + '不是图片') 
                    continue;   
                }
                
                var reader = new FileReader();  
              
                reader.onload = function(e){
                  content = '<li class="real-li" id="uploadList_'+ j +'">'+
                    '<img src="'+ e.target.result +'">'+
                    '<img class="choosed-del" id="data'+ j +'" src="../assets/images/del-pic.png">'+
                    '</li>';
                  j++;
                var n = $('.upload-img li').length ;
                if(n<3){              
                  $(liObj).before(content);
                }else{
                    $(liObj).replaceWith(content);
                }

            } 

            reader.readAsDataURL(f);          
        }
            
    });
    $('.upload-img').click(function(e){
      var e = e || window.event;
      var cls = e.target.className;
      var liL = $(this).find('.real-li').length;
      
      var uploadContent ='<li id="upload-area">'+                                
                        '<input multiple id="my-files" type="file">'+
                        '<img  src="../assets/images/plus.png">'+
                        '</li>'; 

      if(cls == 'choosed-del'){
         var i = e.target.id.substring(4);

           if(liL == 3){
              $(this).find('#uploadList_'+ i +'').remove();
              $(this).append(uploadContent);
           }else{
              $(this).find('#uploadList_'+ i +'').remove();  
          }
           
      }
      
    });
}