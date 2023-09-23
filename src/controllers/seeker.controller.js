import {pool} from '../db.js'

export const getInfo = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM text')
    res.json(rows);
}

export const createSeeker = async (req, res) => {
    // console.log(req.body);
    const {title, description, links} = req.body;
    const [rows] = await pool.query('INSERT INTO text (title, description, links) VALUES (?,?,?)', [title,description,links])
    res.send({ 
        id: rows.insertId,
        title,
        description,
        links
     });
};

export const updateSeeker = (req, res) => res.send('Update informacion');

export const deleteSeeker = (req, res) => res.send('Delete informacion');