const app=Vue.createApp({
data() {
    return {
        userInput:'',
        isVisible:true,
        style1:'style1',
        style2:'style2'
    }
},
methods: {
    setClassToInput: function (event) {
        if (event) {
            //console.log(event.target.value);
            this.userInput=event.target.value;
          }
    },
    toggleParagraph () {
        this.isVisible=!this.isVisible;
        console.log(this.isVisible);
    }
},
});

app.mount("#tips");