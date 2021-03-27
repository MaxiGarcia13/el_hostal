const menuBuilder = require('./src/builder/menu');

exports.createPages = async ({ graphql, actions }) => {
    await Promise.all([
        menuBuilder('terrace_menu', actions, graphql),
        menuBuilder('dining_room_menu', actions, graphql),
    ]);
};
