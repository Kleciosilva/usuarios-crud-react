import React from 'react'

import Main from '../template/Main'
import { Component } from 'react'

const headerProps = {
    icon: 'users',
    title: 'usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div className="container">
                    Cadastro de Usuários
                </div>
            </Main>
        )
    }
}