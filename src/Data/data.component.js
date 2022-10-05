import About from "../About/about.component";
import Projects from "../Projects/projects.component";
import Contact from "../Contact/contact.component";
import Default from "../Default/default.component";
//
import Info from "../About/info.component";
import ProfilePic from "../About/profilePic.component";
import Focus from "../About/focus.component";
import Hobbies from "../About/hobbies.component";
import Pics from "../Discarded/pics.component";
//
export const Data = [
  { title: <Default /> },
  { title: <About /> },
  { title: <Projects /> },
  { title: <Contact /> },
];
//
export const projectData = [
  {
    title: "Grocery Helper",
    desc: "This project was made to help users when shopping. A user can add,edit, and delete items from their shopping list. Users are notified as each action takes place. List is kept in localStorage to preserve state.",
    code: "https://github.com/RobJJ/grocery-helper-react",
    view: "url to view",
  },
  {
    title: "Nasa-API",
    desc: "This project was made to allow users an easy way to explore 'NASA: Astronomy Pictures of the Day'. A user can browse two pictures at a time and load more on request. A user can also favourite pictures, which are stored on localStorage. A spinner is embedded for users with slow connections",
    code: "https://github.com/RobJJ/nasa-api",
    view: "url to view",
  },
  {
    title: "Calculator Expression",
    desc: "This project was made to allow users to correctly compute an expression, using the four basic operators. The calculator computes the expression using a functional approach, that includes a recursive function to reduce the expression. No global variables were used for state.",
    code: "https://github.com/RobJJ/Calculator-expression",
    view: "url to view",
  },
  {
    title: "Quiz Game",
    desc: "This project was made to allow a user to complete a quiz. Users can retake the quiz multiple times and compare their answers once completed. The state for each round is maintained and the user is able to go back and change their answers until they are happy.",
    code: "https://github.com/RobJJ/Quiz-Game",
    view: "url to view",
  },
  {
    title: "Quote Generator",
    desc: "This project was made to allow a user to generate a random quote. A user can request another quote, or choose to tweet the quote. A spinner us used for users with slow connections.",
    code: "https://github.com/RobJJ/Quote-Generator",
    view: "url to view",
  },
];
//

export const AboutData = {
  profile: <ProfilePic />,
  info: <Info />,
  focus: <Focus />,
  hobbies: <Hobbies />,
  pics: <Pics />,
};
//
// export const Pictures = [
//   { src: garden },
//   { src: "../AboutPics/trekking2.JPG" },
//   { src: "../AboutPics/gardening2.JPG" },
//   { src: "../AboutPics/motorbike.JPG" },
//   { src: "../AboutPics/surfing.jpg" },
//   { src: "../AboutPics/trekking.JPG" },
//   { src: "../AboutPics/tennis.JPG" },
//   { src: "../AboutPics/motorbike3.PNG" },
//   { src: "../AboutPics/motorbike2-1.png" },
// ];
