import  express from "express"

const router = express.Router();

router.get('/UserInit', (req, res) => {
res.send('mostrando usuario')

})

router.post('/UserCreate' ,(req, res)=>{
res.send('Guardando usuario')

})

export default router;
