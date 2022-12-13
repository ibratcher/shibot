const matchSchedules = "https://splatoon3.ink/data/schedules.json";
const splatNet = "https://splatoon3.ink/data/gear.json";

module.exports = {
    async fetchShop() {
        const data = await fetch(splatNet, {cache: "no-cache"}).then(response => response.json());
        return await data.data.gesotown;
    },
    async fetchSchedules() {
        const data = await fetch(matchSchedules, {cache: "no-cache"}).then(response => response.json());
        return data.data;
    }
}