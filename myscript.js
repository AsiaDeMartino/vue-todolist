// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

// Predisporre un campo di input testuale e un pulsante “aggiungi”:
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const container = new Vue (
    {
        el: "#container",
        data: {
            text: "",
            lista: [],
        },
        methods: {
            add: function () {
                if (this.text !== "" ) {
                    (this.lista).push({
                        testo: this.text,
                        done: false
                    });
                    console.log(this.lista);
                }
                this.text = "";
            },

            check: function (indice) {
                (this.lista[indice]).done = !(this.lista[indice]).done;
                console.log((this.lista[indice]).done);
            },

            elimina: function (indice) {
                (this.lista).splice(indice,1);
            }
        }
    }
    
    
);

