const menuBuilder = require('./src/builder/menu');
const menusBuilder = require('./src/builder/menus');

exports.createPages = async ({ graphql, actions }) => {
    await Promise.all([
        menuBuilder('terrace_menu', actions, graphql, 'carta-de-terraza'),
        menuBuilder('dining_room_menu', actions, graphql, 'carta-del-comedor'),
        menuBuilder('delivery_menu', actions, graphql, 'carta-de-delivery'),

        menusBuilder(actions, graphql),
    ]);
};
