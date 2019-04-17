module.exports = {
  title: "configuration",
  label: "Configuration variants",
  status: "wip",
  collated: true,
  collator: function(markup, item) {
    return `<div class="variant"><h2 class="label">${item.label}</h2> <a class="link" target="_blank" href="../preview/${item.handle}">View</a> <div class="content">${markup}</div> </div>`;
   },
  variants: 
  [
    {
      name: "default",
      label: "Standard Text Header",
      context: {
        title: "Mission & Aims",
        url: "/",
      },
    },

   {
      name: "breadcrumb",
      label: "With breadcrumb links",
      context: {
        title: "English",
        url: "//english.byu.edu",
        breadcrumbLinks: [
          {url: "//humanities.byu.edu", title:"College of Humanities"}
        ]
      },
    },

   {
      name: "subtitle",
      label: "With super- and sub-titles",
      context: {
        title: "Kennedy Center",
        supertitle: "David M.",
        subtitle: "For International Studies",
        url: "//kennedy.byu.edu",
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
          url: "//donate.byu.edu",
          title: "Donate"
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
        title: "College of Life Sciences",
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

   {
      name: "all",
      label: "With everything",
      context: {
        // supertitle: "College of",
        title: "Physical & Mathematical Sciences",
        url: "/",
        actionBtn: {
          url: "//donate.byu.edu",
          title: "Donate"
        },
        search: {
            action: "/",
            paramName: "q"
        },
        byuID: {
          username: "pparker"
        },
        nav: [
            {url:"/",title:"Home"},
            {url:"/about",title:"About"},
            {url:"/programs",title:"Majors & Programs"},
            {url:"/students",title:"Students"},
            {url:"/alumni",title:"Alumni"},
            {url:"/giving",title:"Giving"},
        ],
      },
    },

   ],
};