// Realizzare una todolist con Vue. La lista deve essere già popolata con alcuni elementi e si deve dare la possibilità di aggiungere nuovi item e di cancellarli.
// Bonus 1): permettere ai file cancellati di finire in un'area 'cestino' dove possono essere eliminati del tutto oppure ripristinati.
// Bonus 2): Dare la possibilità di eliminare tutti i file dal cestino
// Aggiungete quello che più vi piace a piacere!

var app = new Vue({
  el : '#app',
  data : {
    todos: [
      'do shopping',
      'devise sth',
      'shop around with my mom',
      'ask Giulia out',
      'phase in the new component'
    ],
    removed: [], // per gli elementi cancellati
  },
  methods: {
    removeToDo(index){ // dobbiamo accedere all'index per capire quale deve essere rimosso
      this.removed.push(this.todos[index]); // aggiungiamo a removed l'item cancellato
      console.log(this.removed);
      this.todos.splice(index,1); // rimuoviamo l'item specifico col click
      console.log(this.todos);
    },
    restoreToDo(index){
      this.todos.push(this.removed[index]);
      this.removed.splice(index,1);
    }
  }
});
