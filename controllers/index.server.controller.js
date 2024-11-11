// controllers/index.server.controller.js

exports.renderHomePage = (req, res) => {
    const name = "Hibtall Dousa"; // Replace with your actual name
    const title = "The MEAN Stack";
    const definitions = [
        {
            name: "MongoDB",
            description: "MongoDB is a NoSQL database used for storing large amounts of data in a flexible, document-oriented format."
        },
        {
            name: "Express",
            description: "Express is a lightweight framework for building web applications in Node.js, simplifying server setup and routing."
        },
        {
            name: "Angular",
            description: "Angular is a front-end framework developed by Google for building dynamic, single-page applications with TypeScript."
        },
        {
            name: "Node.js",
            description: "Node.js is a runtime environment that allows JavaScript to be run on the server-side, enabling full-stack JavaScript development."
        }
    ];

    // Render the index view with data
    res.render('index', { name, title, definitions });
};
