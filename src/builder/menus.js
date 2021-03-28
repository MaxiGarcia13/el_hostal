const path = require('path');

/**
 *
 * @param {"terrace_menu"} type
 * @param {String} pathUrl
 * @param {Object} actions
 * @param {Function} actions.createPages
 *
 */

const menusBuilder = async (actions, graphql) => {
    try {
        const { createPage } = actions;
        const {
            data: {
                allImageSharp: { edges: images },
            },
        } = await graphql(getAllImages);

        const diningRoomMenuData = require(`../data/dining_room_menu.json`);
        const terraceMenuData = require(`../data/terrace_menu.json`);

        const desserts = require(`../data/desserts.json`);

        const component = path.resolve(`${__dirname}/../components/templates/Menu/Menu.component.jsx`);

        const image = images.find((img) => img.node.gatsbyImageData.images.fallback.src.includes('hostal.png'));

        diningRoomMenuData.data[0].heroTitle = diningRoomMenuData.title;
        terraceMenuData.data[0].heroTitle = terraceMenuData.title;

        createPage({
            path: '/',
            component,
            context: {
                title: 'Nuestra Carta',
                description: null,
                allowHeroTitle: true,
                image: {
                    name: 'hostal.png',
                    alt: 'Foto del logo del Hostal',
                    fuild: image.node,
                },
                data: [...diningRoomMenuData.data, ...terraceMenuData.data, ...desserts],
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

module.exports = menusBuilder;
