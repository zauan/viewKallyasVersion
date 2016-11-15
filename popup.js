document.addEventListener('DOMContentLoaded', function() {
  // alert( 'adsasd' );
  var kallyasStyleSheet = document.getElementById('kallyas-styles-css');
  if( kallyasStyleSheet ){
      if(window.XMLHttpRequest) {
          var xhr = new XMLHttpRequest();         
          xhr.onreadystatechange = function() {
              if(xhr.status == 200 && xhr.readyState == 4) {
                  var sourceCode = xhr.responseText;
                  // alert('The source code is:-\n'+sourceCode);
                  if( sourceCode.includes('Theme Name: Kallyas') ){
                      var myRegexp = /Version: (\d+\.\d+.\d+)+/g;
                      var match = myRegexp.exec(sourceCode);
                      // document.body.innerHTML += '<div class="znVersionChecker">Kallyas '+match[0]+'</div>';
                      var statusContainer = document.getElementById('znVersionChecker');
                      console.log( statusContainer );
                      statusContainer.innerHTML = 'Kallyas '+match[0];
                  }
              }
          }
          xhr.open("GET",kallyasStyleSheet.href,true);
          xhr.send(null);
      }
  }
});
