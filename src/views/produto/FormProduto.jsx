import React from "react";
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';

export default function FormProduto () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    placeholder='Informe o título do produto'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Códgo do Produto'>
                                    <input placeholder='Código do produto' />

                                </Form.Input>

                            </Form.Group>


                            <Form.Group widths='equal'>

                            <Form.Input
                                control={TextArea}
                                label='Descrição'
                                maxLength="1000"
                                placeholder='Informe a descrição do produto'
                            />
                            

                            </Form.Group>

                        
                            
                            <Form.Group>

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
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

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
