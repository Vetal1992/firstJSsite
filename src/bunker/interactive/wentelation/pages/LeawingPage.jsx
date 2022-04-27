import React from "react";
import styles from "./pages.module.css"
import DescriptionPage from "../../DescriptionPage";
import leawingRoom from '../../../../media/bunker/leawingRoom/leawingRoom.jpg';
import badRoom from '../../../../media/bunker/leawingRoom/badRoom.jpg';

function LeawingPage() {

    const descriptionParams = {
        mainHeader: 'Жилое помещение',
        secondHeader: 'Рассмотрим вариант с общей гостинной и отдельными маленькими спальнями.',
        textOnP: 'Общая комната:',
        textLi: [<p><b>Кухня</b></p>,
        <li>Плиту лучше использовать портативную, предварительно запасшись газовыми баллонами.</li>,
        <li>Холодильник не понадобится, весь запас продуктов это продукты длительного хранения.</li>,
        <li>Мойка обязательна. Будь то портативный умывальник или централизованная вода с подогревом.</li>],
        textP: [<p><b>Обеденная зона</b></p>,
        <li>Комфорт важен для психологического самочувствия, хороший стол, диван,
             настольные игры, книги будут не лишними.</li>,
        <p><b>Рабочая зона</b></p>, 
        <li>компьютерный стол\стулья, место для поделок, место для занятий спортом будут полезными для длительного 
            времяпровождения в убежище.</li>,
        <p><b></b></p>],
        image: <img className={styles.image1} src={leawingRoom} alt="схема естественной вентиляци" />,
        image1: <img className={styles.image2} src={badRoom} alt="схема механической вентиляции" />,
        headerOnP: "Спальня",
       textLi1: [<p>В идеале сделать на уровень ниже чем общая комната, но можно и на одном уровне.</p>,
       <p>Площадь от 4х метров квадратных.</p>,
       <p>В целях экономии места стоит разместить многоярусные спальные места.</p>,
       <p>В спальню желательно подвести воздуховод</p>,
        <p>Если спальня на ярус ниже, то подвод воздуховода обязателен.</p>],
    }
    return (
        <div className={styles.leawing}>
            <DescriptionPage
                descriptionParams={descriptionParams}
            />
        </div>
    )
};

export default LeawingPage;