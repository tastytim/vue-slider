Vue.config.devtools = true;

const vueApp = new Vue({
  el: "#app",
  data: {
    listimg: [
      {
        imgpass: "img/01.jpg",
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
      },
      {
        imgpass: "img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum",
      },
      {
        imgpass: "img/03.jpg",
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        imgpass: "img/04.jpg",
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
      },
      {
        imgpass: "img/05.jpg",
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
      },
    ],
    imgActive: 0,
    isHover: false,
    slideTime: 0,
    time: 0,
  },
  methods: {
    pressUp: function () {
      if (this.imgActive == 0) {
        this.imgActive = 4;
      } else {
        this.imgActive--;
      }
      // quando c’è il cambio manuale dell’immagine, resettare il timer del cambio automatico per evitare un nuovo cambio subito dopo che l’utente l’ha cambiata
      this.slideTime = 0;
      console.log("Pressed button up");
    },
    pressDown: function () {
      if (this.imgActive == 4) {
        this.imgActive = 0;
      } else {
        this.imgActive++;
      }
      // quando c’è il cambio manuale dell’immagine, resettare il timer del cambio automatico per evitare un nuovo cambio subito dopo che l’utente l’ha cambiata
      this.slideTime = 0;
      console.log("Pressed button down");
    },
    // rendere navigabile lo slider tramite tastiera
    // https://stackoverflow.com/questions/40283406/how-to-capture-any-keypress-event-in-vuejs-without-using-input-element
    keyDownHandler(e) {
      if (e.key == "ArrowLeft") {
        this.pressUp();
      } else if (e.key == "ArrowRight") {
        this.pressDown();
      }
      console.log(e.key);
      this.slideTime = 0;
    },
  },
  // far scorrere automaticamente le imagini ogni 3 secondi
  mounted() {
    setInterval(() => {
      // se il mouse è sopra le immagini, fermare il tempo. Appena il mouse non è più sopra, far ripartire il tempo.
      if (!this.isHover) {
        if (this.slideTime == 3) {
          this.slideTime = 0;
          this.pressDown();
          console.log("Changed automate");
        }
        this.slideTime++;
      }
    }, 1000);
  },
  created() {
    window.addEventListener("keydown", this.keyDownHandler);
  },
  destroyed() {
    window.removeEventListener("keydown", this.keyDownHandler);
  },
});

console.dir(vueApp);
