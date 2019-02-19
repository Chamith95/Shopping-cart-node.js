var Product =require('../models/product');

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products =[
     new Product({
    imagePath:"https://cdn2.bigcommerce.com/n-pktq5q/fz91hv59/products/1645/images/1661/Watch_Dogs_2__10579.1470748917.1280.1280.jpg?c=2",
    title:'Watch Dogs 2',
    description:'Awesome Game !!!',
    price: 10

}),
new Product({
    imagePath:"https://en.wikipedia.org/wiki/Call_of_Duty:_Modern_Warfare_3#/media/File:Call_of_Duty_Modern_Warfare_3_box_art.png",
    title:'Call of Duty Mw3',
    description:'Awesome Game !!!',
    price: 13

}),
new Product({
    imagePath:"https://images-na.ssl-images-amazon.com/images/I/51pUa2qfaLL.jpg",
    title:'Crisis 3',
    description:'Awesome Game !!!',
    price: 11

}),
new Product({
    imagePath:"https://images.g2a.com/newlayout/323x433/1x1x0/0ce7129fa1d4/592883675bafe324dd6cad52",
    title:'Farcry 5',
    description:'Awesome Game !!!',
    price: 10

}),
new Product({
    imagePath:"https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2018/04/God-of-War-5-Norse-L.jpg",
    title:'God of war 5',
    description:'Awesome Game !!!',
    price: 15

}),
new Product({
    imagePath:"https://images-na.ssl-images-amazon.com/images/I/81ay4BzhhAL.jpg",
    title:'Splinter Cell Blacklist',
    description:'Awesome Game !!!',
    price: 12

})
];
var done=0;
for(var i=0; i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}