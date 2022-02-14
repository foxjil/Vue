"use strict";

const pic ={
    emits: ['deletePic'],
    props: {
        title: {
            required: true,
            type: String,
            validator(value) {
                return value.length > 0;
            }
        },
        src: {
            required: true,
            type: String,
            validator(value) {
                return value.length > 0;
            }
        }
    },
    template:
    `
    <p>{{ title }}</p>
    <img: src="src": alt="Здесь должна была быть картинка">
    <button>  @click=$emit('deletePic' , src)Удалить изображение</button>
    `
};

let picture = {
    components: {'app-img': image},
    data() {
        return {
            picture: [
                {title:"Italy", src: "pics\1.jpeg"},
                {title:"UK", src:"pics\2.jpeg"},
                {title:"USA", src:"pics\3.jpeg"}
            ],
            addImage: {
                title: "", src: ""
            },
        }
    },
    methods: {
        deletePic(src) {
            this.picture = this.picture.filter(
                image => {
                    return image.src !== src;
                }
            )
        },
        addImage() {
            this.picture.push({
                title: this.addImage.title, 
                src: this.addImage.src
            });
            this.addImage.title = "";
            this.addImage.src = "";
        }
    },
    template:
    `
        //здесь я не знаю, что писать ... 
    `
};
let app = Vue.createApp({
    components: {'app-pics': picture},
}).mount("#app"); 
