const express = require('express');
const router = express.Router();
const supabase = require('../data/supabase');

router.get('/', async (req, res, next) => {
    try{
        const { data, error } = await supabase
        .from('categorias')
        .select('*')
        .order('id', {ascending: true})

        if (error){
        throw error;
    }
    res.json(data);
    }catch (err) {
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try{
        const { data, error } = await supabase
        .from('categorias')
        .insert([{nome: req.body}])
        .select();

        if (error) throw error;
    
    res.status(201).json(data[0]);
    }catch (err) {
        next(err)
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
        .from('categorias')
        .update({ nome: req.body.nome })
        .eq('id', id)
        .select();
    if (error) throw error;

    if (data && data.length > 0) {
        res.json(data[0]);
    } else {
        res.status(404).json ({ mensagem: 'categoria não encontrada para atualizar.' });
    }
} catch (err) {
        next(err);
}
});

module.exports = router;
