define(function () {
    var capdCollapsible = function () {
        return {
            link: function postLink(scope, iElement, iAttrs) {
                    var $header  = iElement.find('.collapsible-heading h3');
                    var $content = iElement.find('.collapsible-content');



                    // Create a unique ID



                    // Add button inside $header
                    $header.wrapInner('<button aria-expanded="false" />');
                    var $button = $header.children('button');


                    // Add attributes to collapsible content
                    $content.attr('aria-hidden', 'true');


                    // Toggle state
                    $button.on('click', function() {

                        var state = $button.attr('aria-expanded') === 'false' ? true : false;

                        $button.attr('aria-expanded', state);
                        $content.attr('aria-hidden', !state);

                    });
            },
            restrict : 'C',
            transclude: false,
            scope : false,
            controller: function($scope, $element, $attrs, $transclude){

            }
        }
    }

    capdCollapsible.$inject = [];

    return capdCollapsible;
});