module.exports = {
  title: "Header",
  label: "Header",
  status: "wip",
  collated: true,
  hidden: true,
  collator: function(markup, item) {
    return `<div class="variant"><h2 class="label">${item.label}</h2> <a class="link" target="_blank" href="../preview/${item.handle}">View</a> <div class="content">${markup}</div> </div>`;
   },
  variants: 
  [
    {
      name: "default",
      label: "Standard Text Header",
      context: {
        title: "Components Demo Site",
        url: "/",
      },
    },

   {
      name: "subtitle",
      label: "With subtitle",
      context: {
        title: "School of Web Development",
        subtitle: "College of Awesome",
        url: "/",
      },
    },

   {
      name: "search",
      label: "With search",
      context: {
        title: "Department of Developmental Psychology",
        url: "/",
        search: {
            action: "/",
            paramName: "q"
        },
      },
    },

    {
      name: "action-btn",
      label: "With action button",
      context: {
        title: "College of Engineering",
        url: "/",
        actionBtn: {
          url: "//news.byu.edu"
        },
        search: {
            action: "/",
            paramName: "q"
        }
      }
    },

   {
      name: "nav",
      label: "With navigation",
      context: {
        title: "College of Nursing",
        url: "/",
        nav: [
            {url:"/",title:"Home"},
            {url:"/about",title:"About"},
            {url:"/programs",title:"Programs"},
            {url:"/students",title:"Students"},
            {url:"/alumni",title:"Alumni"},
            {url:"/giving",title:"Giving"},
        ],
      },
    },

   {
      name: "nav-search",
      label: "With navigation and search",
      context: {
        title: "College of Nursing",
        url: "/",
        search: {
            action: "/",
            paramName: "q"
        },
        nav: [
            {url:"/",title:"Home"},
            {url:"/about",title:"About"},
            {url:"/programs",title:"Programs"},
            {url:"/students",title:"Students"},
            {url:"/alumni",title:"Alumni"},
            {url:"/giving",title:"Giving"},
        ],
      },
    },

   ],
};