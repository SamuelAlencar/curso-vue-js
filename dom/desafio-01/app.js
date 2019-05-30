
new Vue ({
    el: '#desafio',
    data: {
        nome: 'Samuel',
        idade: 30,
        linkImg: 'https://tokstok.vteximg.com.br/arquivos/ids/1467728'
    },
     methods: {
        mulplicaPorTres: function() {
            r = this.idade * 3;
            return r
        },
        randowBoleano: function() {
            m = Math.random();
            return m
        }
     }
})