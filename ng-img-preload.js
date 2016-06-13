(function(angular){
    "use strict";

    angular
    .module("ng.img.preloader", [])
    .directive("replaceWith", function(){
        return {
            restrict: "A",
            replace: false,
            link: function(scope, elem, attrs){
                var elemCopy = angular.copy(elem);
                elemCopy.one("load", function(){
                    angular.element(elem).replaceWith(elemCopy);
                });
                elemCopy.attr('src', attrs.imagePreloader);
                elemCopy.on("error", function(){
                    var fallback = angular.isDefined(attrs.fallback) ? attrs.fallback : null;
                    angular.element(elem).attr("src", fallback);
                });
            }
        }
    })
    .directive("replaceFade", function(){
        return {
            restrict: "A",
            replace: false,
            link: link
        };

        function link(scope, elem, attrs){
            console.log("Hey");
        }
    })
})(angular);



// Dir 1 ->  src:placeholder, imgUrl:actualUrl - > replace img on load
// Dir 2 -> src:actual-img, fallback:placeholder.png