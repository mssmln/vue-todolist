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
    newToDo: '', // da sovrascrivere nella casella input col v-model
    // confirm: confirm("are you sure you want to delete it?"), // messo qua parte ad ogni f5 della pagina
  },
  methods: {
    addToDo(){ // da input
      (this.newToDo.length < 5) ? alert('min length supposed to be 5') : this.todos.push(this.newToDo);
      this.newToDo = ''; // per riazzerarla e far comparire il placeholder
      console.log(this.newToDo);
    },
    removeToDo(index){ // dobbiamo accedere all'index per capire quale deve essere rimosso
      // var confirm = confirm("are you sure you want to delete it?"); // così non riesco ad usarlo
      if (confirm("are you sure you want to delete it?") == true) {
        this.removed.push(this.todos[index]);
        console.log(this.removed);
        this.todos.splice(index,1);
        console.log(this.todos);
      }
      // (confirm == true) ? (
      //   this.removed.push(this.todos[index]), // aggiungiamo a removed l'item cancellato
      //   console.log(this.removed),
      //   this.todos.splice(index,1), // rimuoviamo l'item specifico col click
      //   console.log(this.todos)
      // ) : (
      //   ''
      // );
    },
    restoreToDo(index){ // serve ancora index per capire quale è, restore verso todos
      this.todos.push(this.removed[index]);
      this.removed.splice(index,1);
    },
    deleteToDo(index){ // lo rimuove dalla lista dei cancellati
      this.removed.splice(index,1);
    },
    empty(){
      this.removed.splice(0); // lo svuota completamente partendo dall'indice 0
    },
  }
});
