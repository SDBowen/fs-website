const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: "Freedom Shuttle | Medical Transportation Merdian, Idaho",
    description:
      "208-866-3055. Wheelchair accessible vans. Always on time. Wheelchair service. Medical transportation. Recreational transportation. Airport transportation.",
    contact: {
      phone: "(208) 866-3055",
      email: "ladona@freedomshuttle.net"
    },
    menuLinks: [
      {
        name: "Transportation Services",
        link: "/services"
      },
      {
        name: "Medical",
        link: "/medical"
      },
      {
        name: "Seniors",
        link: "/seniors"
      },
      {
        name: "About Us",
        link: "/about-us"
      },
      {
        name: "Book Online",
        link: "/book-online"
      },
      {
        name: "Contact",
        link: "/contact"
      }
    ]
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: guid ? guid : "UA-XXX-1",
        // Puts tracking script in the head instead of the body
        head: false
      }
    }
  ]
};
