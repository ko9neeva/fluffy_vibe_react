import catAndDog from '../pictures/cat_and_dog.webp'
import redFox from '../pictures/red_fox.webp'
import grayFox from '../pictures/gray_fox.webp'
import dogs from '../pictures/dogs.webp'
import Liska from '../pictures/Liska.webp'
import Aif from '../pictures/Aif.webp'
import Oscar from '../pictures/Oscar.webp'
import Marvel from '../pictures/Marvel.webp'
import girl from '../pictures/girl.webp'
import girlWithDog1 from '../pictures/girl_with_dog-1.webp'
import girlWithDog2 from '../pictures/girl_with_dog-2.webp'

export const cardsWithPhoto = [
    {title: 'Самое главное для нас –', 
    text1: 'это комфорт вашего четвероногого друга. ', 
    text2: 'Поэтому мы шьем худи и свитшоты для ваших питомцев по индивидуальным меркам. Это гарантирует идеальную посадку и удобство при ходьбе и активных играх для любых животных любых пород. Мы протестировали очень много моделей, перед тем как создать идеальные лекала для нашей коллекции. Зато теперь мы уверены, что вашему любимому другу мы можем подарить уют, тепло и комфорт.',
    emptyColumn: 'col-lg-2',
    firstColumn: 'col-md-8 col-lg-5 order-md-1',
    secondColumn: 'col-md-4 col-lg-3',
    imgs: [catAndDog, redFox, grayFox, dogs],
    alts: ["щенок и котик", "лис рыжий", "лис черный", "собачки"]}, 
        
    {title: 'Мы делаем вышивки на худи', 
    text1: 'с вашим питомцем для вас, а также вышиваем имя на худи питомца.', 
    text2: 'Создание персональной вышивки – это небыстрая и кропотливая работа наших иллюстраторов и дизайнеров. Сначала создается и утверждается эскиз, затем, при необходимости, вносятся правки, после чего дорисовывается иллюстрация и добавляется цвет. По готовой иллюстрации мы создаем макет для вышивки, обязательно тестируем ее перед нанесением на ваше изделие и только потом вышивка появляется у вас на худи.',
    emptyColumn: 'col-lg-2',
    firstColumn: 'col-md-8 col-lg-5',
    secondColumn: 'col-md-4 col-lg-3', 
    imgs: [Liska, Aif, Oscar, Marvel],
    alts: ["зелено-голубые толстовки парные", "бежевые толстовки парные", "мятные толстовки парные", "бежевые толстовки парные"]}, 
    
    {title: 'Для вас в коллекции представлены',
    text1: 'теплые и уютные фирменные худи с большим капюшоном, который сбережет любую прическу и удлиненными манжетами с прорезью для пальцев, чтобы было тепло ручкам.',  
    text2: 'Наши худи идеальны для прогулок. Они отшиваются вручную из футера трехнитки с начесом самого высокого качества, благодаря чему вы не будете мерзнуть в холодную погоду и сможете наслаждаться качеством и первозданным видом изделия после многих стирок. Фирменные худи кроя oversize представлены в едином размере и подойдут для любого типа фигуры.',
    emptyColumn: 'col-lg-1',
    firstColumn: 'col-md-7 col-lg-5 order-md-1', 
    secondColumn: 'col-md-5',
    imgs: [girl, girlWithDog1, girlWithDog2],
    alts: ["Девушка пьет кофе в толстовке Fluffy Vibe", "Девушка позирует с собакой", "Девушка гуляет по снежному лесу с собакой"]}
];