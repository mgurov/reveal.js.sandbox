(function() {
    var hljs_nodes = document.querySelectorAll( 'pre code' );
    
    console.info()
    
    function escapeLt(match, offset, string){
        if (string.substr(offset, 5) == "<dim>" || string.substr(offset, 6) == "</dim>") {
          return '<'
        } else {
          return '&lt;'
        }
    };
    function escapeGt(match, offset, string){
        if (string.substr(offset - 5, 6) == "</dim>" || string.substr(offset - 4, 5) == "<dim>") {
          return '>';
        } else {
          return '&gt;'
        }
    }


    for( var i = 0, len = hljs_nodes.length; i < len; i++ ) {
        var element = hljs_nodes[i];
        
        //see http://plnkr.co/edit/evrEN3MnaG64wHh22ubw?p=preview
        if( element.hasAttribute( 'data-escape-2' )) {
            element.innerHTML = element.innerHTML
                .replace(/</g, escapeLt)
                .replace(/>/g, escapeGt);
            console.info('Translated to', element.innerHTML);    
        }
    }
})();
