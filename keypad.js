/**
 * Keypad.js JQuery Plugin
 * Mario Luis Aguayo Jr 2019
 */

(function($){
    
    $.fn.extend({
        keypad: function(options){

            var options = $.extend({
                type: "password",
                limit: 4,
                shuffle: false,
            }, options);

            var timestamp = Date.now();
            while(true){
                timestamp = Date.now();
                if( $("#"+timestamp).length == 0) {
                    break;
                }
            }

            var output = document.createElement("input");
            output.id = timestamp;
            output.type = options.type;
            output.maxLength = options.limit;
            output.autocomplete = "off";
            output.readOnly = true;

            $(this).append(output);
            
            var container = document.createElement("div");
            container.classList = ["keypad"];
            container.style.display = "none";

            var pad = this.createPad(timestamp, options.limit, options.shuffle);

            var deleteKey = document.createElement("button");

            deleteKey.innerHTML = "&#10005;";
            deleteKey.title = "Delete last entered key";

            deleteKey.onclick = function(){
                output.value = output.value.slice(0, output.value.length - 1);
            }

            var submitKey = document.createElement("button");
            
            submitKey.innerHTML = "&#10003;";
            submitKey.title = "Submit";

            submitKey.onclick = function(){
                container.style.display = "none";
                $(this).defaultValue = output.value;
                if (options.shuffle == "always") {
                    
                    while (pad.firstChild) {
                        pad.removeChild(pad.firstChild);
                    }

                    pad = $.fn.createPad(timestamp, options.limit, options.shuffle);
                    pad.appendChild(deleteKey);
                    pad.appendChild(submitKey);
                    container.appendChild(pad);
                }

                $(output).parent().removeClass("keypad-container");
            }

            pad.appendChild(deleteKey);
            pad.appendChild(submitKey);
            container.appendChild(pad);

            $(this).append(container);

            output.onfocus = function(){
                container.style.display = "block";
                $(output).parent().addClass("keypad-container");
            }
            
            $(output).width($(container).width());

            setTimeout(function(){ return true; }, 100);
        },
        createPad: function(timestamp, limit, shuffle){
            var pad = document.createElement("div");
            const output = document.getElementById(timestamp);

            var numbers = this.getNumbers(shuffle);

            (numbers).forEach( (n, i) => {

                var b = document.createElement("button");
                b.value = n;
                b.innerText = n;

                b.onclick = function(){
                    if (output.value.length == limit){
                        output.value = output.value.slice(1, limit);
                    }
                    output.value = output.value + n;
                }
                
                if ( ( (i % 3) == 0) && (i >= 3) ) {
                    pad.appendChild(document.createElement("br"));
                }

                pad.appendChild(b);

            });

            return pad;
        },
        getNumbers: function(shuffle) {

            var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            if( (shuffle == "always") || shuffle ) {
                for (let i = 0; i < 10; i++) {
                    var j = Math.floor(Math.random() * (i + 1));
                    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
                }
            }
            
            return numbers;
        }
    });

}(jQuery));