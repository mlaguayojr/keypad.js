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

            var output = document.createElement("input");
            output.id = timestamp;
            output.type = options.type;
            output.maxLength = options.limit;
            output.readOnly = true;

            var container = document.createElement("div");
            container.classList = ["keypad"];
            container.style.display = "none";

            output.onfocus = function(){
                container.style.display = "block";
            }
            
            if ( $(this).attr("data-desc") != undefined ) {
                var description = document.createElement("label");
                description.innerText = ( $(this).attr("data-desc") || "" );
                container.appendChild(description);
                container.appendChild(document.createElement("br"));
                container.appendChild(document.createElement("br"));
            }

            var pad = document.createElement("div");

            var numbers = this.getNumbers();

            (numbers).forEach( (n, i) => {
                var b = document.createElement("button");
                b.value = n;
                b.innerText = n;

                b.onclick = function(){
                    if (output.value.length == options.limit){
                        var t = output.value.slice(1, options.limit);
                        output.value = t;
                    }
                    output.value = output.value + n;
                }
                
                if ( ( (i % 3) == 0) && (i >= 3) ) {
                    pad.appendChild(document.createElement("br"));
                }

                pad.appendChild(b);
            });

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
                
                if (options.shuffle){

                    var temp = $.fn.getNumbers(true);

                    (pad.childNodes).forEach((n, i) => {
                        if( i < 10 ){
                            n.value = temp[i];
                            n.textContent = temp[i];

                            n.onclick = function(){
                                if (output.value.length == options.limit){
                                    var t = output.value.slice(1, options.limit);
                                    output.value = t;
                                }
                                output.value = output.value + temp[i];
                            }
                        }
                    });
                }
            }

            pad.appendChild(deleteKey);
            pad.appendChild(submitKey);
            container.appendChild(pad);

            $(this).append(output);
            $(this).append(container);
        },
        getNumbers: function(shuffled=false) {
            var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            if(shuffled) {
                for (let i = 9; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
                }
            }
            
            return numbers;
        }
    });

}(jQuery));