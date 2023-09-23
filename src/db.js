import {createPool} from 'mysql2/promise'

export const pool = createPool({
	host: 'localhost',
	user: 'root',
	password: 'Root.6000',
	port: 3306,
	database: 'TEST'
})