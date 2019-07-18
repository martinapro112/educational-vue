const linkA = 'http://vuejs.org/guide/'; //this is how you define never changing (static) value to use in javascript
const linkB = 'https://getbootstrap.com/docs/4.0/components/';
const linkC = 'http://www.vikingcodeschool.com/software-engineering-basics/basic-principles-of-software-engineering';

var app = new Vue({
    el: '#app',
    data: {
        //this is where the component stores (dynamic) data
        numberOfClicks: 0,
        someURL: '',
        numberInput: 42,
        radioGroup: null,
        lightTheme: true,

        table1: {
            headers: [ '#', 'Name', 'Amount' ],
            items: [
                { name: 'Croissants', amount: 6 },
                { name: 'Cola', amount: 1 },
                { name: 'Bananas', amount: 3 }
            ]
        }
    },
    methods: {
        //these are methods - functions that change component data
        buttonClick() {    
            this.numberOfClicks++;

            this.table1.items[0].amount++;
        },
        switchTheme() {
            this.lightTheme = !this.lightTheme;
        }
    },
    watch: {
        //this function is called every time the watched data changes
        radioGroup(newValue) {
            console.log('Radio value changed to: ' + newValue); //console output - F12 in browser -> Console
        }
    },
    computed: {
        //summaryMessage is used in html like it was a data of component
        //but it gets (re)computed every time some data it uses changes
        summaryMessage() {
            return 'You clicked ' + this.numberOfClicks + ' times. The input is ' + this.numberInput + '. You chose radio ' + this.radioGroup + '. ' +
            'You are using the ' + (this.lightTheme ? 'light' : 'dark') + ' theme.';
        }
    },
    //this function gets called when the component is created (when you open or refresh the page)
    created() {
        let randomNumber = Math.floor((Math.random() * 3) + 1); //random number 1 to 3

        console.log('Randomly chosen number: ' + randomNumber); //console output - F12 in browser -> Console

        switch (randomNumber){
            case 1:
                this.someURL = linkA;
                break;
            case 2:
                this.someURL = linkB;
                break;
            case 3:
                this.someUrl = linkC;
                break;
            default:
                break;
        }
    }
});

//notes
// - basic concept of the Vue.js framework is:
//   1. after you define component data and html DOM elements and link them together, you don't have to care about DOM elements anymore - this makes it all easier to manage
//   2. only the elements that show data that changed are rerendered - this makes it all faster
// - the variables from javascript get connected to tag attributes in html via the symbol ":",
//   the same goes for functions and symbol "@"
// - the whole page is usually separated to subcomponents that have the corresponding javascript and css in one file,
//   see the Vue.js guide to use the concept if you need a more complicated website
// - aside from created, there are other "hooks" like beforeCreated, mounted, updated, destroyed...
// - the elements created by cycle each should have an unique key defined (it lets vue know which of them should be rerendered)
// - if you find a class definition and it's not in style.css, it belongs to bootstrap