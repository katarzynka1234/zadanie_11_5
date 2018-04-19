$(document).ready(function(){

    function Button(text) {
        this.text = text || 'Hello';
    }

    Button.prototype = {
        create: function(){
            var self = this;
            this.$element = $('<button>').css('background', 'red');
            this.$element.text(this.text);
            this.$element.click(function() {
                alert(self.text);
            });
            $('body').append(this.$element);
            // alternatywna metoda zapisu : --- this.$elemnet.appendTo($('body')); --- //
        }
    }

    var btn1 = new Button('Hello!');
    btn1.create();

    var btn2 = new Button('Click me!');
    btn2.create();

    var btn3 = new Button('Click me too!');
    btn3.create();
});



