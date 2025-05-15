import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListCupomDesconto() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();


    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/cupomdesconto")
            .then((response) => {
                setLista(response.data)
            })
    }
    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    function confirmaRemover(id) {  //Recebe o id do CupomDesconto
        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/cupomdesconto/' + idRemover)
            .then((response) => {

                console.log('CupomDesconto removido com sucesso.')

                axios.get("http://localhost:8080/api/cupomdesconto")
                    .then((response) => {
                        setLista(response.data)
                    })
            })
            .catch((error) => {
                console.log('Erro ao remover um cupomdesconto.')
            })
        setOpenModal(false)
    }



    return (
        <div>
            <MenuSistema tela={'cupomdesconto'} />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> Cupom de Desconto </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-cupomdesconto'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>CodigoDesconto</Table.HeaderCell>
                                    <Table.HeaderCell>PercentualDesconto</Table.HeaderCell>
                                    <Table.HeaderCell>ValorDesconto</Table.HeaderCell>
                                    <Table.HeaderCell>ValorMinimoPedidoPermitido</Table.HeaderCell>
                                    <Table.HeaderCell>QuantidadeMaximaUso</Table.HeaderCell>
                                    <Table.HeaderCell>InicioVigencia</Table.HeaderCell>
                                    <Table.HeaderCell>FimVigencia</Table.HeaderCell>

                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(cupomdesconto => (

                                    <Table.Row key={cupomdesconto.id}>
                                        <Table.Cell>{cupomdesconto.codigoDesconto}</Table.Cell>
                                        <Table.Cell>{cupomdesconto.percentualDesconto}</Table.Cell>
                                        <Table.Cell>{cupomdesconto.valorDesconto}</Table.Cell>
                                        <Table.Cell>{cupomdesconto.valorMinimoPedidoPermitido}</Table.Cell>
                                        <Table.Cell>{cupomdesconto.quantidadeMaximaUso}</Table.Cell>
                                        <Table.Cell>{formatarData(cupomdesconto.inicioVigencia)}</Table.Cell>
                                        <Table.Cell>{formatarData(cupomdesconto.fimVigencia)}</Table.Cell>

                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste cupom de Desconto'
                                                icon>
                                                <Link to="/form-cupomDesconto" state={{ id: cupomdesconto.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                            </Button>
                                            &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este cupom de Desconto'
                                                icon
                                                onClick={e => confirmaRemover(cupomdesconto.id)}>
                                                <Icon name='trash' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>

            <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={() => remover()}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>


        </div>
    )
}
