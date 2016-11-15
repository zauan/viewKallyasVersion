var kallyasStyleSheet = document.getElementById('kallyas-styles-css');
if( kallyasStyleSheet ){
    if(window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();         
        xhr.onreadystatechange = function() {
            if(xhr.status == 200 && xhr.readyState == 4) {
                var sourceCode = xhr.responseText;
                // alert('The source code is:-\n'+sourceCode);
                if( sourceCode.includes('Text Domain: zn_framework') ){
                    var myRegexp = /Version: (\d+\.\d+.\d+)+/g;
                    var match = myRegexp.exec(sourceCode);
                    document.body.innerHTML += '<div id="znVersionChecker">Kallyas '+match[0]+'</div>';
                }
            }
        }
        xhr.open("GET",kallyasStyleSheet.href,true);
        xhr.send(null);
    }
}