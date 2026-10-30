import mysql from "mysql2/promise"
process.loadEnvFile(".env")
//erstell 10 feritge Connections, die für die Requests zur Verfügung stehen (müssen nach dem Request released werden, damit sie wieder freigegeben sind)
export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,

    connectionLimit: 10,
    waitForConnections: true
})