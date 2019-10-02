console.log("Запуск");
let arr = [
    {tag:'design', user:'stan', src:'../../img/design.jpg'},
    {tag:'design', user:'stan', src:'../../img/animal2.jpg'},
    {tag:'design', user:'stan', src:'../../img/design.png'},
    {tag:'space', user:'stan', src:'../../img/2.jpg'},
    {tag:'design', user:'stan', src:'../../img/design1.png'},
    {tag:'design', user:'stan', src:'../../img/design5.png'},
    {tag:'design', user:'stan', src:'../../img/design6.jpg'},
    {tag:'design', user:'stan', src:'../../img/design7.png'},
    {tag:'design', user:'stan', src:'../../img/animal.png'},
    {tag:'design', user:'stan', src:'../../img/design9.png'},
    {tag:'design', user:'stan', src:'../../img/fantasy.jpg'},
    {tag:'space', user:'stan', src:'../../img/4.png'},
    {tag:'design', user:'stan', src:'../../img/fantasy2.png'},
    {tag:'design', user:'stan', src:'../../img/fantasy3.png'},
    {tag:'technology', user:'stan', src:'../../img/tech1.jpg'},
    {tag:'design', user:'stan', src:'../../img/design2.jpg'},
    {tag:'space', user:'stan', src:'../../img/3.gif'},
    {tag:'design', user:'stan', src:'../../img/design8.jpg'},
    {tag:'design', user:'stan', src:'../../img/design3.png'},
    {tag:'design', user:'stan', src:'../../img/design4.png'},
    {tag:'technology', user:'stan', src:'../../img/tech2.jpg'},
    {tag:'design', user:'stan', src:'../../img/animal3.png'}
];



let result_search = [];
let main_window_img = document.getElementById('main_window_img');
let main_window_this_img = document.getElementById('main_window_this_img');
let result_box = document.getElementById('result_box');
let footer_elem = document.getElementById('foot');
let BossKING = document.getElementById('BossKING');


document.getElementById('Upload').onmouseover = function() {
    let imgLoad = document.getElementById('Imgload');    
    imgLoad.src = "../../img/uploadActive.png";
    
}

document.getElementById('Upload').onmouseout = function() {
    let imgLoad = document.getElementById('Imgload');    
    imgLoad.src = "../../img/upload.png";
    
}


arr.forEach(picture => {
    
    // console.log(picture.tag);
    result(picture);
    // console.log(picture.src);
    result_search.push(picture.src);
    
});


// alert(body.offsetHeight);

// footer_elem.style.marginTop = main_window_img.offsetHeight  + 'px';

document.getElementById('input_search').onchange = function(value) {
    let filterText = document.getElementById('input_search').value; //filtertext данные введенные из input
    try {
        result_search.forEach(delete_last_img => {
            result_box.lastChild.remove();
    
        });
    } catch (error) {
        console.log('удален');
    }

    result_search = [];
    // if(result_search.length == 0){
    //     alert('массив очищен');
    // }
    // console.log(result_search);
    arr.forEach(picture => {
        if(picture.tag.indexOf(filterText) === -1) {
            return;
        }   
        // console.log(picture.tag);
        result(picture);
        result_search.push(picture.src);
        // result_box.style.height = document.documentElement.offsetHeight + 'px';
    });

}



function result (picture) {
    let a = document.createElement('li');
    a.id = picture.src + ''; 
    let show_bar = document.createElement('div');
    let result_box = document.getElementById('result_box');
    let Left_Side = document.createElement('div');
    let Right_Side = document.createElement('div');
    let Right_Side1 = document.createElement('div');
    let Middle_Side = document.createElement('div');
    let but1 = document.createElement('a');
    let but2 = document.createElement('a');
    Left_Side.id = 'Left_Side';
    Right_Side.id = 'Right_Side';
    Right_Side1.id = 'Right_Side1';
    Middle_Side.id = 'Middle_Side';
    but1.id = 'button_like_content';
    but2.id = 'button_save_content';
    let img = document.createElement('img');
    img.src = picture.src + '';
    show_bar.id = 'show_bar';
    let content = document.createTextNode("Название моего проекта");
    let content1 = document.createTextNode("Дата, когда выложен");
    let like_content = document.createTextNode("Нравится");
    let save_content = document.createTextNode('Сохранить');
    result_box.appendChild(a);
    a.appendChild(show_bar);
    a.appendChild(img);
    show_bar.appendChild(Left_Side);
    show_bar.appendChild(Middle_Side);
    // show_bar.appendChild(Right_Side);
    Middle_Side.appendChild(but1);
    Middle_Side.appendChild(but2);
    Left_Side.appendChild(Right_Side);
    Left_Side.appendChild(Right_Side1);
    Right_Side.appendChild(content);
    Right_Side1.appendChild(content1);
    but1.appendChild(like_content);
    but2.appendChild(save_content);
    
    // a.appendChild(document.createTextNode("User: " + picture.user ));
} 


document.getElementById('submit').onclick = function(event){
    event.preventDefault();
}

// document.getElementById('id1').onclick = function() {
//     alert('сработало!');
// }

result_box.onclick = function(event) {    // сделать, чтобы див добавлял ближайшую картинку
    let target = event.target;
    // alert(target.id);
    let this_div = target.closest('LI');
   
        if(target.tagName == 'IMG'  ){  // добавить всплывающую хуйню в исключение
            main_window_this_img.src = target.src;
            main_window_img.style.display = 'block';
            BossKING.style.display = 'block';
            main_window_img.style.boxShadow = (main_window_img.style.boxShadow == '0 0 0 9999px  #000000b2') ? '' : '0 0 0 9999px  #000000b2';
        }

        if(target.tagName == 'LI'){
            main_window_this_img.src = target.lastChild.src;
            main_window_img.style.display = 'block';
            BossKING.style.display = 'block';
            main_window_img.style.boxShadow = (main_window_img.style.boxShadow == '0 0 0 9999px  #000000b2') ? '' : '0 0 0 9999px  #000000b2';
        }
   
}

BossKING.onclick = function(event){
    main_window_img.style.display = 'none';
    BossKING.style.display = 'none';
}
result_box.onmousemove = function() {
    
    result_search.forEach(picture => {
        // console.log(picture);
        document.getElementById(picture + '' ).onmouseover = function(event) {  
         let target = event.target;
         let related = event.relatedTarget;
             let this_div = target.closest('LI');
                 let show_bar = this_div.firstChild;
                     show_bar.style.display = 'block';
                     show_bar.style.opacity = '1';
     }
     document.getElementById(picture + '').onmouseout = function (event) {
         let target = event.target;
                 let this_div = target.closest('LI');
                 let show_bar = this_div.firstChild;
                 show_bar.onmouseover = function(){ 
                         show_bar.style.display = 'block';
                         show_bar.style.opacity = '1';
                 }
                 show_bar.style.display = 'none';    
                 show_bar.style.opacity = '1';         
     }
     });
    
}


// result_box.onmouseover = function(event) {   // ошибка скорее всего из-за обработки двух событий сразу, реализовать всё в одном событии  и посмотреть про делегирование
//     //или добавлять картинки через background,чтобы в обработчике событий засчитывал за одно событие
//     let target = event.target;
//     let related = event.relatedTarget;
    
//     if(target.tagName == 'LI' || target.tagName == 'IMG') {
//         let this_div = target.closest('LI');
        
//         // if(related == this_div.lastChild || related == this_div.firstChild){
//         //     event.stopPropagation;
//         // }
//         // else{
//             let show_bar = this_div.firstChild;
//             try {
//                 show_bar.style.display = 'block';
//                 // let related = event.relatedTarget.firstChild;
//                 // related.style.display = 'none';
    
//             } catch (error) {
                
//             }
//         // }  
        
//     }

// }

// childResult.onmouseout = function (event) {
//     let target = event.target;
//     console.log('ура');
//     if(target.tagName == 'LI' || target.tagName == 'IMG') {
//         let this_div = target.closest('LI');
        
//         // if(related == this_div.lastChild || related == this_div.firstChild){
//         //     event.stopPropagation;
//         // }
//         // else{
//             let show_bar = this_div.firstChild;
//             try {
//                 show_bar.style.display = 'none';
//                 // let related = event.relatedTarget.firstChild;
//                 // related.style.display = 'none';
    
//             } catch (error) {
                
//             }

//     // let related = event.relatedTarget;
//     // console.log('Последний LI');
//     // if(related.tagName == 'LI' || related.tagName == 'IMG'){
//     //     let last_show_bar = related.firstChild;
//     //     try {
//     //         last_show_bar.style.display = 'none';
//     //     } catch (error) {
            
//     //     }
//     // }
//     // if(target.id == 'result_box') {
//     //     console.log('не равно result');
//     //     let this_div = related.closest('LI');
//     //     console.log(related);
//     //     if(related.tagName == 'LI' &&  related.tagName != 'result_box'){
//     //         let show_bar = this_div.firstChild;
//     //         try {
//     //             show_bar.style.display = 'block';
//     //         } catch (error) {
//     //         }
//     //     }
//     //     else{
//     //         event.stopPropagation;
//     //     }
//     //   }
    
// } 
// }

    
    let like_img = document.getElementById('like_img') ;
    let like_a = document.getElementById('like_a') ;
    let share_a = document.getElementById('share_a');
    let share_img = document.getElementById('share_img');
    like_img.onclick = function(event) {
        
        if(like_img.src == 'http://127.0.0.1:5500/img/like.png') {
            like_img.src = '../../img/like_active.png';
            like_a.style.color = '#FD423B';
        }
        else{
            like_img.src = '../../img/like.png';
            like_a.style.color = '#9b9998fa';
        }
        event.stopPropagation();
    }

    like_a.onclick = function(event) {
        if(like_img.src == 'http://127.0.0.1:5500/img/like.png') {
            like_img.src = '../../img/like_active.png';
            like_a.style.color = '#FD423B';
        }
        else{
            like_img.src = '../../img/like.png';
            like_a.style.color = '#9b9998fa';
        }
    }

    share_img.onclick = function(event) {
        
        if(share_img.src == 'http://127.0.0.1:5500/img/share.png') {
            share_img.src = '../../img/share_active.png';
            share_a.style.color = '#FD423B';
        }
        else{
            share_img.src = '../../img/share.png';
            share_a.style.color = '#9b9998fa';
        }
        event.stopPropagation();
    }

    share_a.onclick = function(event) {
        if(share_img.src == 'http://127.0.0.1:5500/img/share.png') {
            share_img.src = '../../img/share_active.png';
            share_a.style.color = '#1587fe';
        }
        else{
            share_img.src = '../../img/share.png';
            share_a.style.color = '#9b9998fa';
        }
    }