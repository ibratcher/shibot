import {Collection} from "discord.js";

declare module "discord.js" {
    export interface Client {
        commands: Collection<String, Command>
    }

    export interface Command {
        name: String,
        description: String,
        execute: Function
    }


}