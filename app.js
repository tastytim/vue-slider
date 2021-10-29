Vue.config.devtools = true;



const vueApp = new Vue({
  el: "#app",
  data:{
    listimg : [
      {
        imgpass : "img/01.jpg",
        title : "Svezia",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
      },
      {
        imgpass : "img/02.jpg",
        title : "Svizzera",
        text : "Lorem ipsum"
      },
      {
        imgpass : "img/03.jpg",
        title : "Gran Bretagna",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      },
      {
        imgpass : "img/04.jpg",
        title : "Germania",
        text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
      },
      {
        imgpass : "img/05.jpg",
        title : "Paradise",
        text : "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
      }
    ]
  },
  methods:{
      
  }
});



console.dir(vueApp);