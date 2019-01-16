const utils = require('../utils');

module.exports.run = (newmember, client) => {
    newmember.guild.fetchMember(client.user).then(() => {
        if (newmember.guild.me.hasPermission("CHANGE_NICKNAME") || newmember.guild.me.hasPermission("ADMINISTRATOR")) {
            newmember.guild.me.setNickname(utils.getMemberCount(newmember.guild))
                .catch((err) => console.error("[ ERROR ] ", err));
        } 
    }).catch((err) => console.error("[ ERROR ] ", err));
};