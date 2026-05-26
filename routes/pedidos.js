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

// Rota para atualizar o estado de um pedido (PUT)
router.put('/:id', async (req, res, next) => {
    try {
        validarSupabase();
        const { id } = req.params;
        
        const { data, error } = await supabase
            .from('pedidos')
            .update(req.body) // Vai atualizar o status enviado pelo frontend
            .eq('id', id)
            .select();

        if (error) throw error;

        if (data && data.length > 0) {
            res.json({
                sucesso: true,
                mensagem: 'Pedido atualizado com sucesso!',
                pedido: data[0]
            });
        } else {
            res.status(404).json({ mensagem: 'Pedido não encontrado' });
        }
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try{
        const {id} = req.params;
        const {error} = await supabase
        .from('produtos')
        .delete()
        .eq('id', id);

        if(error) throw error;
        res.json({mensagem: 'produto deletado'});
    }catch (err){
        next(err);
    }
});


module.exports = router;