new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaClick() {
            alert('Botão clicado')
        },
        atribuiValor() {
            console.log( this.event.target.value);
        }
    }
})