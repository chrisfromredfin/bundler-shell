/**
 * Custom theme script.js template for Drupal 7
 * Uses the closure to map JQuery variable to $ variable
 * Redfin Solutions, LLC 2017
 */
(function ($) {

      $.fn.appendAround = function(){
      return this.each(function(){

        var $self = $( this ),
          att = "data-set",
          $parent = $self.parent(),
          parent = $parent[ 0 ],
          attval = $parent.attr( att ),
          $set = $( "["+ att +"='" + attval + "']" );

        function isHidden( elem ){
          return $(elem).css( "display" ) === "none";
        }

        function appendToVisibleContainer(){
          if( isHidden( parent ) ){
            var found = 0;
            $set.each(function(){
              if( !isHidden( this ) && !found ){
                $self.appendTo( this );
                found++;
                parent = this;
              }
            });
          }
        }

        appendToVisibleContainer();

        $(window).bind( "resize", appendToVisibleContainer );

      });
    };

    var ajax_count = 0;

    Drupal.behaviors.websiteName = {

        // called when the page is first loaded and when content is added to the page
        attach: function(context) {

        },

        // called when content is removed from the page
        // useful for AJAX/AHAH requests
        detach: function(context) {

        }
    };

}(jQuery));
