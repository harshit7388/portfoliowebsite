document.querySelector('.cross').style.display = 'none'
document.querySelector('.hamburger').addEventListener("click" , ()=>{
    document.querySelector('.menubar').classList.toggle('menubarGo');
    if(document.querySelector('.menubar').classList.contains('menubarGo'))
    {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline'

        } ,350 );
    }

})

// function myfunction(){
//     $('#GetFile').on('click', function () {
//         $.ajax({
//             url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf',
//             method: 'GET',
//             xhrFields: {
//                 responseType: 'blob'
//             },
//             success: function (data) {
//                 var a = document.createElement('a');
//                 var url = window.URL.createObjectURL(data);
//                 a.href = url;
//                 a.download = 'myresume.pdf';
//                 document.body.append(a);
//                 a.click();
//                 a.remove();
//                 window.URL.revokeObjectURL(url);
//             }
//         });
//     });
// }