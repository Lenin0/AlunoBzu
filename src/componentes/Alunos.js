//Aqui é onde eu importos as bibliotecas necessárias 
import React from "react";
import {Table, Button,Form, Modal} from "react-bootstrap";




class Alunos extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
           
            matricula:[], 
            nome: '',
            CPF: [],
            nota: [],
            alunos : [],
            modalAberto: false
        }
    }

    componentDidMount(){
        this.buscarAluno();

    }

    componentWillUnmount(){

    }

    //Função para pegar API e atualizar a lista.
    buscarAluno = () => {
        fetch("http://localhost:5000/categorias")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({ alunos : dados})
        })

    }

    //Função para deleter algum item da lista.
    deletarAluno = (id) => {
        fetch("http://localhost:5000/categorias/"+id, {method: 'DELETE'})
        .then(resposta => {
            if(resposta.ok){
                this.buscarAluno();
            }
        })
    }

    //Função para Alterar itens da API.
    alterarDados = (id) => {
        fetch("http://localhost:5000/categorias/"+id, {method: 'GET'})
        .then(resposta => resposta.json())
        .then(aluno => {
            this.setState({ 
                matricula: aluno.matricula,
                nome: aluno.nome,
                CPF: aluno.CPF,
                nota: aluno.nota
            })
            this.abrirModal();
        })
    }
    
    //Para autalizar os novos dados
    atualizarAluno = (aluno) =>{
        fetch("http://localhost:5000/categorias/",{
        method: 'PUT',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify(aluno)
        })
        .then(resposta => {
            if(resposta.ok){
                this.buscarAluno();
            }else{
                alert('Não foi possível atualizar o aluno!');
            }
        })
    }
    
    //Função para fazer um novo POST da API.
    cadastraAluno = (aluno) =>{
        fetch("http://localhost:5000/categorias/",{
        method: 'POST',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify(aluno)
        })
        .then(resposta => {
            if(resposta.ok){
                this.buscarAluno();
            }else{
                alert('Não foi possível adcionar o aluno!');
            }
        })
    }
    
    //Aqui é a tabela onde vai receber os dados.
    renderTabela(){
        return(
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Avaliação</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.alunos.map((aluno) =>
                            <tr>
                                <td> {aluno.matricula} </td>
                                <td> {aluno.nome} </td>
                                <td> {aluno.CPF} </td>
                                <td> {aluno.nota} </td>
                                <td><Button variant="warning"onClick={() => this.alterarDados(aluno.id)}>ALTERAR</Button> 
                                 <Button variant="danger" onClick={() => this.deletarAluno(aluno.id)}>REMOVER</Button></td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </Table>
        )
    }

    //Função para atualizar a matrícula na parte de (Formulário)/cadastro.
    atualizaMatricula = (m) => {
        this.setState(
            {
                matricula : m.target.value
            }
        )

    }

    //Função para atualizar o Nome na parte de (Formulário)/cadastro.
    atualizaNome = (n) => {
        this.setState(
            {
                nome : n.target.value
            }
        )

    }

    //Função para atualizar o CPF na parte de (Formulário)/cadastro.
    atualizaCPF = (c) => {
        this.setState(
            {
                CPF : c.target.value
            }
        )

    }

    //Função para atualizar a nota na parte de (Formulário)/cadastro.
    atualizaNota = (a) => {
        this.setState(
            {
                nota : a.target.value
            }
        )

    }

    //Funcionalidade para o Botão fazer o POST
    adiconar = () => {
        const aluno = {
            matricula: this.state.matricula,
            nome: this.state.nome,
            CPF: this.state.CPF,
            nota: this.state.nota

        }

        this.cadastraAluno(aluno);

        this.fecharModal();

    }

    voltar = () =>{
        this.state(
            {
            matricula:[], 
            nome : '',
            CPF: [],
            nota : [],
            }
        )

    }
    abrirModal = () => {
        this.setState(
            {
                modalAberto : true
            }
        )

    }
    fecharModal = () => {
        this.setState(
            {
                modalAberto : false
            }
        )

    }

    //Aqui onde fica o formulário para adicionar novos itens.
    render() {
        return(
            <div>
                
                <Modal show={this.state.modalAberto} onHide={this.fecharModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Cadastro de Aluno</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupMatricula">
                        <Form.Label>Matricula</Form.Label>
                        <Form.Control type="number" placeholder="999999" value={this.state.matricula} onChange={this.atualizaMatricula} />
                        <Form.Text className="text-muted">
                            Adicione a matricula do Aluno
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formGroupNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="word" placeholder="ex: Ricardo" value={this.state.nome} onChange={this.atualizaNome} />
                        <Form.Text className="text-muted">
                            Adicione o Nome do Aluno
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formGroupCpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="number" placeholder="999-999-999-99" value={this.state.CPF} onChange={this.atualizaCPF}  />
                        <Form.Text className="text-muted">
                            Adicione o CPF do Aluno
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formGroupNota">
                        <Form.Label>Nota</Form.Label>
                        <Form.Control type="number" placeholder="0-10" value={this.state.nota} onChange={this.atualizaNota} />
                        <Form.Text className="text-muted">
                            Adicione a nota do Aluno
                        </Form.Text>
                    </Form.Group>

                </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.fecharModal}>
                        Sair
                    </Button>
                    <Button variant="success" type="submit" onClick={this.adiconar}>
                    Adicionar
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Button variant="primary" type="submit" onClick={this.abrirModal}>
                    Novo
                </Button>
                
                
                
                {this.renderTabela()}
            </div>
        )
    }
}


export default Alunos;