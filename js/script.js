console.log('JS OK', Vue) 


// Estrapolo metodo
const { createApp } = Vue;

// Inizializzo app Vue
const app = createApp({
    data() {
        return {
            firstName: 'Marco',
            lastName: 'Sepe',
            pic: 'https://picsum.photos/id/9/600/400'

        }
    }
})

//Add to DOM
app.mount('#root');