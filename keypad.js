class Keypad {

    constructor(limit=4){
        (document.querySelectorAll("div[data-type='keypad']")).forEach(element => {
            this.createInstance(element, limit);
        });
    }

    createInstance(element, limit) {
        var element = element;
        var timestamp = Date.now();

        var keypad = this.createKeypad(timestamp, element.getAttribute('data-desc'), limit);

        var input = this.createTempInput(timestamp);
        input.onfocus = function(){
            keypad.style.display = "block";
            document.getElementById(`${timestamp}Temp`).focus();
        }

        element.appendChild(input);
        element.appendChild(keypad);
    }

    createTempInput(id) {
        var input = document.createElement("input");
        input.type = "password";
        input.id = id;
        return input;
    }

    createKeypad(id, desc=null, limit) {
        var keypad = document.createElement("div");
        keypad.classList = ["keypad"];
        keypad.style.display = "none";

        if(desc != null){
            var p = document.createElement("label");
            p.innerText = `${desc}:`;
            keypad.appendChild(p);
            keypad.appendChild(document.createElement("br"));
        }

        var value = document.createElement("input");
        value.type = "password";
        value.id = `${id}Temp`;

        keypad.appendChild(value);
        keypad.appendChild(document.createElement("br"));

        var numbers = [];
        while(numbers.length != 10){
            var x = Math.floor(Math.random() * 10);
            if( numbers.indexOf(x) == -1){
                numbers.push(x);
            }
        }

        numbers.forEach( (n, i) => {
            var b = document.createElement("button");
            b.value = n;
            b.innerText = n;

            b.onclick = function(){
                if (value.value.length == limit){
                    var t = value.value.slice(1, limit);
                    value.value = t;
                }
                value.value = value.value + n;
            }
            
            if ( ( (i % 3) == 0) && (i >= 3) ) {
                keypad.appendChild(document.createElement("br"));
            }

            keypad.appendChild(b);
        });

        var deleteKey = document.createElement("button");

        deleteKey.innerHTML = "&#10005;";
        deleteKey.title = "Delete last entered key";

        deleteKey.onclick = function(){
            value.value = value.value.slice(0, value.value.length - 1);
        }

        keypad.appendChild(deleteKey);

        var submitKey = document.createElement("button");
        
        submitKey.innerHTML = "&#10003;";
        submitKey.title = "Submit";

        submitKey.onclick = function(){
            console.log("Before: " + document.getElementById(id).defaultValue);
            keypad.style.display = "none";
            document.getElementById(id).defaultValue = value.value;
            console.log("Now: " + document.getElementById(id).defaultValue);
        }

        keypad.appendChild(submitKey);

        return keypad;
    }

}