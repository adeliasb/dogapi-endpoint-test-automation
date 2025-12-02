# DogAPI Endpoint Test Automation

Automação E2E para validar os endpoints da Dog API utilizando Cypress + JavaScript.

## Autor

Adélia dos Santos Barroso

---

## Objetivo

Garantir a qualidade da integração com a Dog API ([https://dog.ceo/dog-api/documentation](https://dog.ceo/dog-api/documentation)) validando se os endpoints retornam corretamente os dados esperados, incluindo estrutura, tipo e plausibilidade.

## Boas Práticas Aplicadas

- **Modularização:** Código organizado em `clients`, `services`, `utils` e testes separados por recurso.
- **Validação completa:** Status HTTP, estrutura do JSON, tipos de dados e plausibilidade.
- **Scripts centralizados:** `npm run test`, `npm run report:merge` e `npm run report:generate` para execução e geração de relatórios.
- **Pronto para CI/CD:** Configurado para GitHub Actions, com evidências de testes, screenshots e vídeos.
- **Código comentado:** Fácil manutenção e entendimento, ideal para outros QA ou revisores.

## Estrutura do Projeto

```
dogapi-endpoint-test-automation/
├─ cypress/
│  ├─ e2e/
│  │  └─ api/
│  │     ├─ 01_listBreeds.cy.js
│  │     ├─ 02_breedImages.cy.js
│  ├─ fixtures/
│  │  └─ sampleData.json
│  └─ support/
│     ├─ e2e.js
│     └─ api/
│        ├─ clients/
│        │  └─ dogApiClient.js
│        ├─ services/
│        │  ├─ listBreedsService.js
│        │  └─ breedImagesService.js
│        └─ utils/
│           └─ validateResponse.js
├─ cypress.config.js
├─ package.json
├─ README.md
```

## Scripts Disponíveis

- `npm run cy:open` - Abrir Cypress GUI
- `npm run test` - Executar todos os testes com Mochawesome
- `npm run report:merge` - Merge dos JSONs de relatório
- `npm run report:generate` - Gerar relatório HTML centralizado

## Endpoints Testados

- `GET /breeds/list/all` - Listar todas as raças
- `GET /breed/{breed}/images` - Listar imagens de uma raça específica
- `GET /breeds/image/random` - Retornar imagem aleatória

## Validações Implementadas

- Status HTTP correto
- Estrutura JSON esperada
- Tipos de dados (`string`, `number`, `array` etc.)
- Plausibilidade dos valores (ex.: lista de raças não vazia, URLs válidas)

## Configuração do Ambiente

1. Instalar Node.js (v18 ou v20)
2. Clonar o repositório: `git clone https://github.com/adeliasb/dogapi-endpoint-test-automation`
3. Instalar dependências: `npm install`
4. Executar testes: `npm run test`
5. Gerar relatório: `npm run report:generate`

## Integração com CI/CD

- GitHub Actions configurado para executar testes em push ou PR para a branch `main`.
- Evidências geradas: JSON, HTML, screenshots e vídeos.

## Observações

- Código modular e comentado para fácil entendimento e manutenção.
- Todos os testes são independentes e podem ser executados isoladamente.
- Recomendado rodar em ambientes Linux ou Windows compatíveis com Cypress.
