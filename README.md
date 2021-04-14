# Nave.rs Front-end challenge - navdex

# Tecnologia utilizada
- libs:
  - React
  - prop-types
  - react-router
  - react-router-dom
  - react-icons
  - Styled components
- Toolkit Create React App
- Comando `npx eslint --init` para padronizar o código com o padrão da Airbnb.

# Utilizando a aplicação
- clone este repositório na máquina local
- utilize o comando `npm install` dentro do diretório clonado
- execute o comando `npm start` (a aplicação irá rodar no http://localhost:3000)

---

# Dificuldades

- Parte de **realizar Login**.
  - Para criar rotas privadas não possuo muitos conhecimentos, para isto pesquisei em como fazer.
  - As principais páginas que visitei foi da documentação do react-router-dom e da [digital ocean](https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications) (um artigo de como montar um login com react).
  - A maior parte do código de login vem dos conceitos mostrados no artigo da digital ocean.

---

# A ser melhorado

- UI/UX
  - mostrar modal para ocorrer erro na request;
  - melhorar validações de formulários para dados inválidos.
  - adicionar loaders durante transições.

- Código
  - utilizar o [context API](https://dev.to/rafacdomin/autenticacao-no-react-com-context-api-e-hooks-4bia) do react para transitar o token de login.
  - utilizar lib ["react hooks form"](https://react-hook-form.com/) e ["yup"](https://github.com/jquense/yup#yup) para facilitar implementação de formulários. 
