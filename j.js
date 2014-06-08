;(function(){
  if ( window && window.jQuery && window.j == null ) {
    window.j = jQuery;
  } else { console.warn("j.js requires jQuery AND that window.j not exist."); }
})();