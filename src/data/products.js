import human from "./pictures/size_human.webp"
import s from "./pictures/size-s.webp"
import m from "./pictures/size-m.webp"
import l from "./pictures/size-l.webp"

export const products = [
    {size:'OneSize', 
    title: 'Единый размер', 
    text: 'Худи unisex, крой oversize, подходит для любого типа фигуры', 
    price: 10000, 
    picture: human },

    {size:'S', 
    title: 'Размер XS-S', 
    text: 'Подойдет для самых маленьких питомцев. Например, для котиков, небольших собачек или если у вас котенок или щенок', 
    price: 4300, 
    picture: s},

    {size:'M', 
    title: 'Размер M', 
    text: 'Подойдет для питомцев среднего размера. Например, для лис, енотов, собак средних пород, таких как французский бульдог, спаниель', 
    price: 4500, 
    picture: m},

    {size:'L', 
    title: 'Размер L-XL', 
    text: 'Подойдет для больших и даже очень больших питомцев. Например, для собак крупных пород, таких как немецкая овчарка, лабрадор, дог', 
    price: 4700, 
    picture: l},
];