import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import FormEndereco from "./views/cliente/FormEndereço";
import ListCliente from './views/cliente/ListCliente';
import FormCupomDesconto from './views/cupomdesconto/FormCupomDesconto';
import ListCupomDesconto from './views/cupomdesconto/ListCupomDesconto';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="list-cliente" element={<ListCliente />} />
                <Route path="list-produto" element={<ListProduto />} />
                <Route path="list-entregador" element={<ListEntregador />} />
                <Route path="list-cupomdesconto" element={<ListCupomDesconto />} />
                <Route path="form-cliente" element={<FormCliente />} />
                <Route path="form-produto" element={<FormProduto />} />
                <Route path="form-entregador" element={<FormEntregador />} />
                <Route path="form-cupomdesconto" element={<FormCupomDesconto />} />

                <Route path="form-endereco/:idCliente/:idEndereco?" element={<FormEndereco />} />

            </Routes>
        </>
    )
}

export default Rotas