const matchSchedules = "https://splatoon3.ink/data/schedules.json";
const splatNet = "https://splatoon3.ink/data/gear.json";

export async function fetchShop() {
    const data = await fetch(splatNet).then(response => response.json());
    return await data.data.gesotown;
}

export async function fetchSchedules() {
    const data = await fetch(matchSchedules).then(response => response.json());
    return await data.data;
}
