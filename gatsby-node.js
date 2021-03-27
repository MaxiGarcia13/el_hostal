const menuBuilder = require('./src/builder/menu');
const menusBuilder = require('./src/builder/menus');

exports.createPages = async ({ graphql, actions }) => {
    await Promise.all([
        menuBuilder('terrace_menu', actions, graphql),
        menuBuilder('dining_room_menu', actions, graphql),
        menusBuilder(actions, graphql),
    ]);
};
