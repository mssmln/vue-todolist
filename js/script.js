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
    editToDo(index){
      console.log(this.todos[index]);
      let edit = prompt('edit your todo');
      console.log(edit);
      this.todos[index] = edit;
      console.log(this.todos[index]);
      if (this.todos[index].length > 0) {

        this.todos.splice(index,0);
      }
    },
    removeToDo(index){ // dobbiamo accedere all'index per capire quale deve essere rimosso
      const conferma = confirm("are you sure you want to delete it?"); // non puoi chiamarla confirm
      if (conferma) { // non serve == true, if la da già per true
        this.removed.push(this.todos[index]);
        console.log(this.removed);
        this.todos.splice(index,1);
        console.log(this.todos);
      }

      // l'operatore ternario usalo solo quando usi il valore di ritorno
      // (conferma) ? (
      //   this.removed.push(this.todos[index]), // aggiungiamo a removed l'item cancellato
      //   console.log(this.removed),
      //   this.todos.splice(index,1), // rimuoviamo l'item specifico col click
      //   console.log(this.todos)
      // ) : (
      //   ''
      // );

    },
    moveAllToBin(){ // li sposta tutti in un colpo nel cestino
      this.removed.push(...this.todos); // operatore spread per pushare tutto il contenuto dell'array
      console.log(this.removed);
      this.todos.splice(0);
    },
    restoreToDo(index){ // serve ancora index per capire quale è, restore verso todos
      this.todos.push(this.removed[index]);
      this.removed.splice(index,1);
    },
    restoreAllToDo(){
      this.todos.push(...this.removed);
      this.removed.splice(0);
    },
    deleteToDo(index){ // lo rimuove dalla lista dei cancellati
      this.removed.splice(index,1);
    },
    empty(){
      this.removed.splice(0); // lo svuota completamente partendo dall'indice 0, oppure uguale all'insieme vuoto
    },
  }
});
