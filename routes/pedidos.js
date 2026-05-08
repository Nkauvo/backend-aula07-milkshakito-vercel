const express = require('express');
const router = express.Router();
const supabase = require('../data/supabase');

function validarSupabase() {
    if (!supabase) {
        const error = new Error('Configuração do Supabase ausente. Defina SUPABASE_URL e SUPABASE_KEY na Vercel.');
        error.status = 500;
        throw error;
    }
}


router.get('/', async (req, res, next) =>{
    try{
        validarSupabase();
        const {data, error} = await supabase
        .from('pedidos')
        .select('*')
        .order('id', {ascending: false});
        if(error) throw error;
        res.json(data);
    }catch (err){
        next(err);
    }
});

//rota para receber e criar um novo pedido (POST)
router.post('/', async (req, res, next) =>{
    try{
        validarSupabase();
        const{data, error} = await supabase
        .from('pedidos')
        .insert([req.body])
        .select();
        if(error) throw error;
        res.status(201).json({
            sucesso:true,
            mensagem:'Pedido recebido com sucesso!',
            pedido: data[0]
        });
    }catch (err){
        next(err);
    }
});

module.exports = router;