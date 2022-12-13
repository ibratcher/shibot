const matchSchedules = "https://splatoon3.ink/data/schedules.json";
const splatNet = "https://splatoon3.ink/data/gear.json";

    export async function fetchShop() {
        const data = await fetch(splatNet, {cache: "no-cache"}).then(response => response.json());
        return await data.data.gesotown;
    }
    export async function fetchSchedules() {
        const data = await fetch(matchSchedules, {cache: "no-cache"}).then(response => response.json());
        return data.data;
    }
