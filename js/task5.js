const countryName = "КитаЙ";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
    message = CANCELED_BY_USER;
} else {
    country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
    switch (country) {
        // Write code under this line
        case 'Китай':
            price = 100;
            break;

        case 'Австралия':
            price = 170;
            break;

        case 'Индия':
            price = 80;
            break;

        case 'Ямайка':
            price = 120;
            break;
    }
}
if (price) {
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
} else if (countryName === null) {
    message = CANCELED_BY_USER;
} else {
    message = NO_DELIVERY;
}

console.log(message);