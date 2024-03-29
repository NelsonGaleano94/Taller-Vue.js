/*Autores: Maria Alejandra Garzon 1667494
           Nelson Fernando Galeano 1561845*/

new Vue({
    el: '#calcular',
    data: {
        value: 0,
        logs: []
    },
    methods: {
        addExpresion: function (e) {
            if (Number.isInteger(this.value))
                this.value = '';
            this.value += e;
        },
        getResult: function () {
            var log = this.value;
            this.value = eval(this.value);
            this.logs.push(log + ("=" + this.value));
        },
        clear: function () {
            this.value = 0;
        },
        del: function () {
            this.value = this.value.slice(0, -1);
        }
    }
});