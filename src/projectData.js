import Images from './images/ProjectImages.js';

const { litterPicker, portfolio, brelbys, ricShop } = Images

const projects = [
    {
        id: 1,
        name: "LitterPicker",
        summary: "Schedule and attend litter cleanup events in your neighborhood.",
        primaryTechnology: "React",
        link: null,
        code: null,
        demo: null,
        image: litterPicker,
    },
    {
        id: 2,
        name: "My Portfolio",
        summary: "My personal project portfolio.",
        primaryTechnology: "React",
        link: null,
        code: null,
        demo: null,
        image: portfolio,
    },
    {
        id: 3,
        name: "Brelby's",
        summary: "Shop for wine and cupcakes, with recommendations for pairings.",
        primaryTechnology: "Ruby on Rails",
        link: null,
        code: null,
        demo: null,
        image: brelbys,
    },
    {
        id: 4,
        name: "MonorailTCG",
        summary: "Create Simpsons trading cards to add to your collection.",
        primaryTechnology: "Javascript",
        link: null,
        code: null,
        demo: null,
        image: "https://via.placeholder.com/300",
    },
    {
        id: 5,
        name: "Ruby Ice Cream Shop",
        summary: "Create and order an ice cream cone of your choosing.",
        primaryTechnology: "Ruby",
        link: null,
        code: null,
        demo: null,
        image: ricShop,
    }
];

export default projects;