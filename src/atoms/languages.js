import { atom } from "recoil";

export const Languages = atom({
  key: "languages",
  default: [
    {
      id: 0,
      name: "HTML",
      image: "/images/tools/html-logo.png",
      link: "JSurl",
      description:
        "The first line of code I ever wrote was <div></div> and therefore HTML has a special place in my heart. I love using HTML in combination with JavaScript and CSS to create single page apps.",
    },
    {
      id: 1,
      name: "CSS",
      image: "/images/tools/css-logo.png",
      link: "TSurl",
      description:
        "Probably one of my favourite things about web development. I could spend days and weeks on CSS and thinkering with positioning and animations. I love using keyframes to create beautiful animations that end users can not miss noticing.",
    },
    {
      id: 2,
      name: "JavaScript",
      image: "/images/tools/javascript-logo.svg",
      link: "TSurl",
      description:
        "I love building full fledged webapps and JavaScript is my favourite tool of choice. I love the ecosystem with all the frameworks and I love the fact that I can use JavaScript for both frontend and backend development. I'm mostly using React and Svelte out of the JavaScript ecosystem.",
    },
    {
      id: 3,
      name: "React",
      image: "/images/tools/react-logo.svg",
      link: "TSurl",
      description:
        "My first JavaScript framework that I'm using for most of my app creation. I love the flexibility it provides when creating single page apps. I love the ecosystem that helps me out whenever I'm about to hit a roadblock. One of my favourite and most loved JavaScript frameworks. This website has been build with React.",
    },
    {
      id: 4,
      name: "Svelte",
      image: "/images/tools/svelte-logo.svg",
      link: "TSurl",
      description: `Probably the most interesting JavaScript "framework" there is. I love the simplicity and speed this compiler brings to the JavaScript ecosystem, as well as its unique approach. Probably the tech I'll spend most of my time with (along with React) while building my personal projects in the future.`,
    },
    {
      id: 5,
      name: "Sass",
      image: "/images/tools/sass-logo.svg",
      link: "TSurl",
      description:
        "Ahhh, simplicity. I love Saas mostly for it's selector capability and how it makes it soooo easy to read and write CSS code. It makes my life easier and I can not imaging building any complex multi-page website or app without it.",
    },
    {
      id: 6,
      name: "Firebase",
      image: "/images/tools/firebase-logo.svg",
      link: "TSurl",
      description:
        "Free. Efficient. Easy to use. Firebase is first backend-as-a-service tool that I've been using and I love it. I have to learn more about managing data in NoSQL database, but this thing is blazing fast and has great API and documentation!",
    },
    {
      id: 7,
      name: "WordPress",
      image: "/images/tools/wordpress-logo.png",
      link: "TSurl",
      description:
        "Best free tool to build websites fast and deliver quick wins to your clients. I've built a couple of websites that end users can maintain themselves.",
    },
    // {
    //   id: 8,
    //   name: "VS Code",
    //   image: "/images/tools/visual-studio-code-logo.svg",
    //   link: "TSurl",
    //   description:
    //     "I use VS Code daily. I use it so much even stopped bothering closing it at the end of the day. There is not much to say that people don't already know: efficient, easy to use, syntax highlighting, and I never found a bug. Simply great tool I have no intention of replacing in the near future.",
    // },
    // {
    //     id: 9,
    //     name: "Git",
    //     image: "/images/tools/git-logo.svg",
    //     link: "TSurl",
    //     description:
    //     "Whoever worked in a team or built a bit complex app can appreciate Git. Thanks to Git, I never worry about where my code is, how I'll find and fix a bug, or how I can recover previous version of the software. I mostly use Git via GitHub, where I store all my personal projects.",
    // },
  ],
});