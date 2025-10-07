# Agenda de Estudos

Aplicativo móvel para organizar horários de estudo, gerenciar matérias e acompanhar tarefas relacionadas às disciplinas. Desenvolvido em React Native com Expo.

## Sobre o Agenda de Estudos

O **Agenda de Estudos** é um aplicativo desenvolvido para auxiliar estudantes na **organização dos estudos**, permitindo gerenciar disciplinas, sessões de estudo e tarefas de forma prática e visual.  
O objetivo é facilitar o planejamento diário e o acompanhamento das atividades acadêmicas.

### Funcionalidades

#### Funcionalidades básicas (prioritárias)
- [x] Cadastro de disciplinas
- [x] Criação de sessões de estudo (data, início, fim)
- [ ] Edição de sessões de estudo
- [ ] Exclusão de sessões de estudo
- [x] Lista de tarefas por disciplina (CRUD parcial: criação e visualização)
- [x] Visualização da agenda do dia

#### Funcionalidades adicionais (trabalhos futuros)
- [ ] Notificações locais para início de sessão
- [ ] Integração com Google Calendar
- [ ] Estatísticas de tempo estudado por disciplina


## Protótipos de Telas

Protótipos criados no **Figma** para o Agenda de Estudos.  
As telas principais são: **Welcome**, **Dashboard (Agenda do Dia)**, **Tela de Disciplina**, **Formulário de Sessão** e **Tarefa**.

🔗 [Acessar Protótipo no Figma](https://www.figma.com/design/LKuQnGxH2fDFO82WdcmvsM/App-agenda-estudos?node-id=0-1&t=gyZAggg9zXbUsFWE-1)

## Modelagem do Banco (3 pts)

Modelo relacional usando **MySQL** (banco local ou remoto).

O banco do AppAgenda possui as seguintes entidades principais:

- **Users**:  
  - `id` (PK, AUTO_INCREMENT)  
  - `name` (VARCHAR, obrigatório)  
  - `email` (VARCHAR, obrigatório)  
  - Representa os usuários do aplicativo.

- **Disciplina**:  
  - `id_disciplina` (PK, AUTO_INCREMENT)  
  - `nome` (VARCHAR, obrigatório)  
  - `cor` (VARCHAR, opcional, para identificar visualmente a disciplina)  
  - `user_id` (FK para Users)  
  - Representa cada disciplina cadastrada por um usuário.

- **Tarefa**:  
  - `id_tarefa` (PK, AUTO_INCREMENT)  
  - `id_disciplina` (FK para Disciplina)  
  - `nome` (VARCHAR, obrigatório)  
  - `descricao` (TEXT, opcional)  
  - `data` (DATE)  
  - `horario` (TIME)  
  - `status` (ENUM: 'pendente', 'concluida', padrão 'pendente')  
  - Representa tarefas vinculadas a uma disciplina.

- **SessaoEstudo**:  
  - `id_sessao` (PK, AUTO_INCREMENT)  
  - `id_disciplina` (FK para Disciplina)  
  - `nome` (VARCHAR, obrigatório)  
  - `data` (DATE)  
  - `hora_inicio` (TIME)  
  - `hora_fim` (TIME)  
  - Representa sessões de estudo associadas a uma disciplina.

### Diagrama ER

Diagrama exportado do draw.io mostrando as tabelas e seus relacionamentos:

![Modelagem do Banco](imagens/Diagrama.png)


## Planejamento de Sprints (3 pts)

| Sprint   | Período   | Atividades planejadas |
|----------|-----------|---------------------|
| Sprint 1 | Semana 1  | - Configuração do repositório e ambiente Expo/React Native<br>- Criação do README inicial<br>- Protótipo das telas principais no Figma<br>- Modelagem do banco de dados (MySQL) e diagrama ER |
| Sprint 2 | Semana 2  | - Implementação do CRUD de disciplinas<br>- Desenvolvimento da tela de Dashboard (agenda do dia)<br>- Criação da navegação entre telas principais |
| Sprint 3 | Semana 3  | - Implementação do CRUD de sessões de estudo<br>- Conexão das sessões de estudo com o banco<br>- Testes iniciais das telas de disciplinas e sessões |
| Sprint 4 | Semana 4  | - Implementação do CRUD de tarefas por disciplina<br>- Funcionalidade de marcar tarefas como pendentes/concluídas<br>- Testes das funcionalidades de tarefas |
| Sprint 5 | Semana 5  | - Ajustes de UI/UX (cores, ícones, layouts)<br>- Simulação de notificações locais para início de sessão<br>- Implementação de validações e mensagens de erro nos formulários |
| Sprint 6 | Semana 6  | - Implementação de estatísticas simples de tempo estudado<br>- Revisão completa do protótipo e funcionalidades<br>- Testes finais e correções<br>- Preparação para entrega e documentação final |


## Autor
- Caroline Ferreira
