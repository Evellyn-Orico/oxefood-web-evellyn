import axios from "axios";

import InputMask from "comigo-tech-react-input-mask/lib/react-input-mask.development";
import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


export default function FormEntregador() {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorFrete, setValorFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoCep, setEnderecoCep] = useState();
    const [enderecoUf, setEnderecoUf] = useState();
    const [ativo, setAtivo] = useState();



    function salvar() {

        let produtoRequest = {
            titulo: titulo,
            codigo: codigo,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMinimo: tempoEntregaMinimo,
            tempoEntregaMaximo: tempoEntregaMaximo
        }

        axios.post("http://localhost:8080/api/produto", produtoRequest)
            .then((response) => {
                console.log('Cliente cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log('Erro ao incluir o um cliente.')
            })
    }


    return (

        <div>
            <MenuSistema tela={'cliente'} />


            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            {/* parte 1 ok */}

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='RG'>
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}
                                </Form.Input>

                            </Form.Group>

                            {/* parte 2 -- */}


                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    required
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='QTD de Entregas Realizadas'>

                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor por Frete'>
                                </Form.Input>


                            </Form.Group>



                            {/* P 3 */}

                            <Form.Group widths='equal'>

                                <Form.Input
                                    label='Rua'
                                    maxLength="1000"
                                />

                                <Form.Input
                                    label='Número'
                                    maxLength="1000"
                                />


                            </Form.Group>


                            {/* parte 4 */}

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'>
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='CEP'>
                                </Form.Input>

                            </Form.Group>



                            {/*  */}

                            {/* <Form.Input>
                                <div className = “field”>
                                    <label>UF</label>
                                    <select clasName=”ui fluid dropdown”>
                                        <option value=”PE”>PE</option>
                                        <option value=”RN”>RN</option>
                                        <option value=”MS”>MS</option>
                                    </select>
                                </div>
                            </Form.Input> */}


                            {/*  */}


                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Valor Unitário'
                                    width={6}>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínima em Minutos'
                                    width={6}>
                                    <input placeholder='30' />

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máxima em Minutos'
                                    width={6}
                                    placeholder='40'
                                >
                                </Form.Input>


                            </Form.Group>


                            {/* U PP */}

                            <div className="ui form">
                                <div className="inline fields">
                                    <label htmlFor="ativo">Ativo:</label>
                                    <div className="field">
                                        <div className="ui radio checkbox">
                                            <input
                                                type="radio"
                                                name="ativo"
                                                value="sim"
                                                tabIndex="0"
                                            />
                                            <label htmlFor="ativo-sim">Sim</label>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="ui radio checkbox">
                                            <input
                                                type="radio"
                                                name="ativo"
                                                value="não"
                                                tabIndex="0"
                                            />
                                            <label htmlFor="ativo-nao">Não</label>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}
