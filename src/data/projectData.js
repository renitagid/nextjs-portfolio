import project1Image from "public/project1.png";
import project2Image from "public/project2.png";
import project3Image from "public/project3.png";

const projectData = [
  {
    id: 1,
    title: "Didjadoo: Social To-Do Project",
    problem: "Target users set goals but lose motivation to complete them",
    solution:
      "Incorporating a social media model provides accountability, support, and even some friendly competition",
    github: "https://github.com/renitagid/Didjadoo",
    demo: "https://didjadoo.onrender.com/",
    description: `I was the tech lead on a team of 4 members.
    
        · This dynamic full-stack app allows users to set and track goals, view others' goals and cheer them on with likes. 

        · Multiple relational tables with a variety of data types are stored in each table.

        · We achieved 90% test coverage with Jest and Rspec.

        · Currently developing the ability to friend users as well as leave comments on a user's page.

        · React front-end, with Rails on the back end, and a PostgreSQL database.

        · This app has full CRUD capabilities and utilizes RESTful routing.`,
    image: project1Image,
    video: "https://player.vimeo.com/video/800950243?h=c056a838a5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  },
  {
    id: 2,
    title: "Data Visualization Project",
    problem: "The data object contains too much nested information to display in a table in an aesthetically pleasing way.",
    solution: "When clicking on a table row, a card pops up to display more information about the chosen row, including charts for quick visual analysis.",
    github: "https://github.com/renitagid/data-table",
    demo: "https://codesandbox.io/s/relaxed-jones-ropcku",
    description: `This project gave me some hands on practice with UI and UX problems in data visualization.
    - ChartJS was used to create dynamic and responsive graphs
    - Material UI was used to style all components`,
    image: project2Image,
  },
  {
    id: 3,
    title: "Portfolio Project",
    problem: "I needed a way to share information about myself as well as showing off some of my coding and design skills.",
    solution: "Rather than using a template, coding a portfolio from scratch allowed me to have ultimate control over what I can share and how it looks.",
    github: "https://github.com/renitagid/nextjs-portfolio",
    demo: "",
    description: "Description of Portfolio Project",
    image: project3Image,
  }
];
export default projectData;
