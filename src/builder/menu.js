const path = require('path');
/**
 *
 * @param {"terrace_menu" | "dining_room_menu"} type
 * @param {String} pathUrl
 * @param {Object} actions
 * @param {Function} actions.createPages
 *
 */
const menuBuilder = async (type, actions, graphql) => {
    try {
        const { createPage } = actions;
        const {
            data: {
                allImageSharp: { edges: images },
            },
        } = await graphql(getAllImages);

        const data = require(`../data/${type}.json`);
        const desserts = require(`../data/desserts.json`);

        const component = path.resolve(`${__dirname}/../components/templates/Menu/Menu.component.jsx`);

        const image = images.find((img) => img.node.gatsbyImageData.images.fallback.src.includes(data.image.name));

        createPage({
            path: String(data.title).replace(/ /g, '-').toLowerCase(),
            component,
            context: {
                ...data,
                image: {
                    ...data.image,
                    fuild: image.node,
                },
                allowHeroTitle: false,
                data: [...data.data, ...desserts],
            },
        });
    } catch (error) {
        console.error(error);
    }
};

const getAllImages = `query {
    allImageSharp {
      edges {
        node {
          id
          gatsbyImageData
        }
      }
    }
  }`;

module.exports = menuBuilder;
