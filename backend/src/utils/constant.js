import { config } from "dotenv"

config()
export let port = process.env.PORT
export let serverLink = process.env.SERVER_LINK
export let databaseLink = process.env.DATABASE_LINK