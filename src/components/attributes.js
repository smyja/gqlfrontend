const lo = [
  {
    title: "Simple header",
    category: "headers",
    author: "mantine",
    withColor: true,
    responsive: true,
    dependencies: [
      "/core/app-shell/",
      "/core/container/",
      "/core/group/",
      "/core/burger/",
    ],
    props: {
      links: [
        { link: "/#/learn", label: "About" },
        { link: "/#/login", label: "Login" },
        { link: "/#/signup", label: "Signup" },
  
      ],
    },
    canvas: {
      center: false,
    },
    label: "Simple header",
  },

  {
    title: "Features with monotone icons",
    category: "features",
    author: "rtivital",
    responsive: true,
    withColor: true,
    dependencies: [
      "/core/theme-icon/",
      "/core/title/",
      "/core/text/",
      "/core/container/",
      "/core/simple-grid/",
      "tabler-icons-react",
    ],
    props: {
      title: "",
      description:
      ''
    },
    canvas: {
      center: false,
    },
  },
];
console.log(lo[0].props.links);
console.log(lo[1].title);
export default lo;
