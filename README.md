# Agenda de Estudos

Aplicativo móvel para organizar horários de estudo, gerenciar matérias e acompanhar tarefas relacionadas às disciplinas. Desenvolvido em React Native com Expo.

## Sobre o app
O **Agenda de Estudos** ajuda estudantes a planejarem sessões de estudo e acompanharem tarefas por disciplina.

### Funcionalidades básicas (prioritárias)
- [ ] Cadastro de disciplinas
- [ ] Criação/edição/exclusão de sessões de estudo (data, início, fim)
- [ ] Lista de tarefas por disciplina (CRUD)
- [ ] Visualização da agenda do dia

### Funcionalidades adicionais (futuro)
- [ ] Notificações locais para início de sessão
- [ ] Integração com Google Calendar
- [ ] Estatísticas de tempo estudado por disciplina

## Protótipos de tela (3 pts)
Protótipos criados no Figma — telas principais: Welcome, Dashboard, Tela de Disciplina, Form de Sessão.

🔗 Link público do protótipo no Figma: `COLE_AQUI_O_LINK_DO_FIGMA`

Ou imagem do mapa de telas:
![Mapa de telas](images/prototipo.png)

## Modelagem do banco (3 pts)
Modelo relacional usando **SQLite** (armazenamento local).

Principais entidades:
- `users` (id, name, email)
- `subjects` (id, name, color, user_id)
- `study_sessions` (id, subject_id, date, start_time, end_time, notes)
- `tasks` (id, subject_id, description, due_date, completed)

Diagrama (exportado do draw.io):
![Modelagem do banco](images/erd.png)

SQL de exemplo: `database/schema.sql`

## Planejamento de sprints (3 pts)
| Sprint | Período | Atividades planejadas |
|--------|---------|------------------------|
| Sprint 1 | Semana 1 | Setup repo/Expo, README, protótipo inicial, modelagem do BD |
| Sprint 2 | Semana 2 | CRUD de disciplinas e sessões, UI inicial |
| Sprint 3 | Semana 3 | Tarefas, notificações (simulação), testes |
| Sprint 4 | Semana 4 | Ajustes finais, estatísticas simples, entrega |

## Autor
- Caroline Ferreira
