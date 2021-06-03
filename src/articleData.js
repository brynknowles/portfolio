import Images from './images/ArticleImages.js'

const { forms, devTools, rubyApp, rubyEnums } = Images;
const articles = [
        {
            id: 1,
            link: "https://medium.com/swlh/creating-forms-with-react-hooks-fe02b6eaad5e",
            name: "Creating Forms with React Hooks",
            image: forms,
            summary: "How to build a basic search form using React Hooks",
        },
        {
            id: 2,
            link: "https://medium.com/swlh/the-basics-of-chrome-devtools-4d69a102a699",
            name: "The Basics Of Chrome Dev Tools",
            image: devTools,
            summary: "Some ways to use Chrome Dev Tools when developing an app",
        },
        {
            id: 3,
            link: "https://medium.com/swlh/converting-your-first-ruby-cli-app-into-a-ruby-on-rails-web-app-dc094d9edb03",
            name: "Converting Your First Ruby CLI App Into a Ruby on Rails Web App",
            image: rubyApp,
            summary: "Step-by-step instructions on creating a Ruby On Rails web app from a Ruby CLI app",
        },
        {
            id: 4,
            link: "https://bryn-knowles.medium.com/be-select-ive-when-choosing-your-enumerables-fd9839a28485",
            name: "Be .select-iv When Choosing Your Enumerables",
            image: rubyEnums,
            summary: "A Ruby journey to help you decide whether to use .select or .map",
        }
    ]

export default articles;
