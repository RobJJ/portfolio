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
import profileImage from "../Images/Profile Pic NoBG.png";
//
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
    title: "Client Tracker",
    desc: "This website was made to help users keep track of their private clients' information. Each client added to the system has a profile that can be managed and updated. React context was used to manage state, and react router for ease of use.",
    code: "https://github.com/RobJJ/tracker-styles",
    view: "url to view",
  },
  {
    title: "Personal Website",
    desc: "This website was made to share and display personal information. This includes basic info, projects, and a contact form. The site was created using ReactJS and Tailwind. EmailJS was used to handle the contact form request.",
    code: "https://github.com/RobJJ/personal-website",
    view: "url to view",
  },
  {
    title: "Grocery Helper",
    desc: "This project was made to help users when shopping. A user can add, edit, and delete items from their shopping list. Users are notified of each action. List is kept in localStorage to preserve state.",
    code: "https://github.com/RobJJ/grocery-helper-react",
    view: "url to view",
  },
  {
    title: "Nasa-API",
    desc: "This project was made to allow users an easy way to explore 'NASA: Astronomy Pictures of the Day'. A user can browse two pictures at a time and load more on request. A user can favourite pictures, which are stored on localStorage. A spinner is embedded for users with slow connections",
    code: "https://github.com/RobJJ/nasa-api",
    view: "url to view",
  },
  {
    title: "Calculator Expression",
    desc: "This project was made to allow users to correctly compute an expression, using the four basic operators. A functional approach was used, that includes a recursive function to reduce the expression. No global variables were used for state.",
    code: "https://github.com/RobJJ/Calculator-expression",
    view: "url to view",
  },

  {
    title: "Quote Generator",
    desc: "This project was made to allow a user to generate a random quote. A user can request another quote, or choose to tweet the quote. Quotes are fetched from an API. A spinner is used for slow connections.",
    code: "https://github.com/RobJJ/Quote-Generator",
    view: "url to view",
  },
  {
    title: "Quiz Game",
    desc: "This project was made to allow a user to complete a quiz. Users can retake the quiz multiple times and compare their answers once completed. The state for each round is maintained, which allows users to edit previous answers and submit when happy.",
    code: "https://github.com/RobJJ/Quiz-Game",
    view: "url to view",
  },
];
//

export const AboutData = {
  profile: <ProfilePic profileImage={profileImage} />,
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
//
