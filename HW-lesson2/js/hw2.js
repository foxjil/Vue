"use strict"; 

let goods = [
   {
      title: "Пианино",
      price: 3000,
      count: 0
   },
   {
      title: "Гитара",
      price: 1200,
      count: 40
   },
   {
      title: "Барабаны",
      price: 2700,
      count: 12
   },
   {
      title: "Флейта",
      price: 900,
      count: 50
   },
   {
      title: "Арфа",
      price: 3400,
      count: 5
   }
];
let app = Vue.createApp({
    data() {
        return {
            goods,
            tabsTitle:["по крличеству", "по цене" , "по названию"],
            currentTabTitle: "по количеству"
    }
   },
   
    methods: {
        getsortedGoods(){
         if (this.currentTabTitle === "по количеству")
             return this.goods.sort(
                 (a, b) => a.count-b.count);
         else if( this.currentTabTitle === "по цене") 
               return this.goods.sort((a,b)=> a.price - b.price);
         else if (this.currentTabTitle === "по названию")
               return this.goods.sort((a,b)=> a.title.localeCompare(b.title)); 
             
      },
      defineClass(good) {
         if (good.count === 0) return "zero";
         else if (good.count > 1 && good.count < 20) return "not many";
         else if (good.count > 20) return "many";
      }

   }
}).mount("#app");

let articles =  [
   {
      title: "Нейросеть может читать текст быстрее человека",
      image: "https://picsum.photos/id/22/1000/1000"
   },
   {
      title: "Пять сервисов, которые помогут написать статью за 5 минут",
      image: "https://picsum.photos/id/24/1000/1000"
   },
   {
      title: "Названы основные правила движения поездов",
      image: "https://picsum.photos/id/28/1000/1000"
   },
   {
      title: "Самая посещаемая достопримечательность мира",
      image: "https://picsum.photos/id/27/1000/1000"
   },
   {
      title: "Появился новый термин для обозначения радиоволн",
      image: "https://picsum.photos/id/29/1000/1000"
   },
   {
      title: "В России появится новый вид бумаги",
      image: "https://picsum.photos/id/30/1000/1000"
   }
];


