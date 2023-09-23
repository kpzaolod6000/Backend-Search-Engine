import {pool} from '../db.js'

export const getInfo = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM text')
        res.json(rows);   
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const getInfoById = async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await pool.query('SELECT * FROM text WHERE id=?', [id]);
        
        if (rows.length <= 0) 
            return res.status(404).json({
                message: "Info not Found"
            })
        res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
}

export const createSeeker = async (req, res) => {
    // console.log(req.body);
    try {
        const {title, description, links} = req.body;
        const [rows] = await pool.query('INSERT INTO text (title, description, links) VALUES (?,?,?)', [title,description,links])
        res.send({ 
            id: rows.insertId,
            title,
            description,
            links
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
};

export const updateInfoById = async (req, res) => {
    try {
        const id = req.params.id;
        const {title, description, links} = req.body;

        const [result] = await pool.query('UPDATE text SET title = IFNULL(?, title),description = IFNULL(?, description), links = IFNULL(?, links) WHERE id = ?', [title, description, links, id]);
        
        if (result.affectedRows === 0) 
            return res.status(404).json({
                message: "Info not Found"
            })
        const [rows] = await pool.query('SELECT * FROM text WHERE id=?', [id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong"
        })
    }
};

export const deleteSeeker = (req, res) => res.send('Update informacion');

export const deleteInfoById = async (req, res) => {
    const id = req.params.id;
    try {
        
        const [result] = await pool.query('DELETE FROM text WHERE id=?', [id]);
        
        if (result.affectedRows <= 0) 
            return res.status(404).json({
                message: "Info not Found"
            })
        res.sendStatus(204);
    } catch (error) {
 
        return res.status(500).json({
            message: "Something goes wrong"
        })       
    }
}