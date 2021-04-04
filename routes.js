const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err);

        conn.query('SELECT * FROM notes', (err, rows) => {
            if(err) return res.send(err)
            res.json(rows);
        })
    }) 
})

routes.get('/:id',(req,res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err);

        conn.query('SELECT * FROM notes WHERE id = ?', [req.params.id], (err, rows) => {
            if(err) return res.send(err)
            res.json(rows);
        })
    }) 
})

routes.post('/',(req,res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err);

        conn.query('INSERT INTO notes set ?', [req.body] ,(err, rows) => {
            if(err) return res.send(err)
            res.send('Note added');
        })
    }) 
})

routes.delete('/:id',(req,res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err);

        conn.query('DELETE FROM notes WHERE id = ?', [req.params.id] ,(err, rows) => {
            if(err) return res.send(err)
            res.send('Note deleted');
        })
    }) 
})

routes.put('/:id',(req,res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err);

        conn.query('UPDATE notes set ? WHERE id = ?', [req.body, req.params.id] ,(err, rows) => {
            if(err) return res.send(err)
            res.send('Note updated');
        })
    }) 
})

module.exports = routes;