import { atom } from "recoil";

export const Languages = atom({
  key: "languages",
  default: [
    {
      name: "HTML",
      image: "/images/tools/html-logo.png",
      description:
        "The first line of code I ever wrote was <div></div> and therefore HTML has a special place in my heart. I love using HTML in combination with JavaScript and CSS to create single page apps.",
    },
    {
      name: "CSS",
      image: "/images/tools/css-logo.png",
      description:
        "Probably one of my favourite things about web development. I could spend days and weeks on CSS and thinkering with positioning and animations. I love using keyframes to create beautiful animations that end users can not miss noticing.",
    },
    {
      name: "JavaScript",
      image: "/images/tools/javascript-logo.svg",
      description:
        "I love building full fledged webapps and JavaScript is my favourite tool of choice. I love the ecosystem with all the frameworks and I love the fact that I can use JavaScript for both frontend and backend development. I'm mostly using React and Svelte out of the JavaScript ecosystem.",
    },
    {
      name: "React",
      image: "/images/tools/react-logo.svg",
      description:
        "My first JavaScript framework that I'm using for most of my app creation. I love the flexibility it provides when creating single page apps. I love the ecosystem that helps me out whenever I'm about to hit a roadblock. One of my favourite and most loved JavaScript frameworks. This website has been build with React.",
    },
    {
      name: "Svelte",
      image: "/images/tools/svelte-logo.svg",
      description: `Probably the most interesting JavaScript "framework" there is. I love the simplicity and speed this compiler brings to the JavaScript ecosystem, as well as its unique approach. Probably the tech I'll spend most of my time with (along with React) while building my personal projects in the future.`,
    },
    {
      name: "Sass",
      image: "/images/tools/sass-logo.svg",
      description:
        "Ahhh, simplicity. I love Saas mostly for it's selector capability and how it makes it soooo easy to read and write CSS code. It makes my life easier and I can not imaging building any complex multi-page website or app without it.",
    },
    {
      name: "Firebase",
      image: "/images/tools/firebase-logo.svg",
      description:
        "Free. Efficient. Easy to use. Firebase is first backend-as-a-service tool that I've been using and I love it. I have to learn more about managing data in NoSQL database, but this thing is blazing fast and has great API and documentation!",
    },
    {
      name: "WordPress",
      image: "/images/tools/wordpress-logo.png",
      description:
        "Best free tool to build websites fast and deliver quick wins to your clients. I've built a couple of websites that end users can maintain themselves.",
    },
    {
      name: "HubL",
      image: "/images/tools/hubspot-hubl-logo.svg",
      description:
        "HubL is a templating language for HubSpot CMS which is used throughout HubSpot ecosystem. I'm currently using HubL in combination with HTML, CSS, and JS to create templates and modules in HubSpot CMS which allow users to use and edit content via HubSpot drag and drop editor.",
    },
    // {
    //   name: "VS Code",
    //   image: "/images/tools/visual-studio-code-logo.svg",
    //   description:
    //     "I use VS Code daily. I use it so much even stopped bothering closing it at the end of the day. There is not much to say that people don't already know: efficient, easy to use, syntax highlighting, and I never found a bug. Simply great tool I have no intention of replacing in the near future.",
    // },
    // {
    //     name: "Git",
    //     image: "/images/tools/git-logo.svg",
    //     description:
    //     "Whoever worked in a team or built a bit complex app can appreciate Git. Thanks to Git, I never worry about where my code is, how I'll find and fix a bug, or how I can recover previous version of the software. I mostly use Git via GitHub, where I store all my personal projects.",
    // },
  ],
});
