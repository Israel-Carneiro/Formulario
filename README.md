# Formulário de inscrição

Um modelo moderno e completo de formulário para o registro de dados pessoais de usuários e função de auto preenchimento de endereço via API a partir do CEP informado. Pode ser facilmente reproduzido e tem diversas utilidades!

## Demonstração

 - Layouts responsivos:

<table style="width: 100%; border: solid;" border="2px" cellspacing="0" cellpadding="1%">
  <tr>
    <th scope="col">Desktop (1024px ou maior)</th>
    <th scope="col">Tablet (768px ou maior)</th>
    <th scope="col">Mobile (menor que 768px)</th>
  </tr>
  <tr>
    <td width="40%"><img src="./assets/Designes Responsivos/screencapture-desktop.png" rel="Layout desktop" /></td>
    <td width="35%"><img src="./assets/Designes Responsivos/screencapture-tablet.png" rel="Layout tablet" /></td>
    <td width="15%"><img src="./assets/Designes Responsivos/screencapture-mobile.png" rel="Layout mobile" /></td>
  </tr>
</table>

 - Link para acesso ao resultado do projeto:<br><br>
 <a href="https://israel-carneiro.github.io/Formulario/" target="_blank"><img src="https://img.shields.io/badge/deploy-Formul%C3%A1rio-008000" rel="Deploy badge" /><a><br><br>

## Objetivo e técnicas utilizadas

Formulários sempre tiveram funções importantes como registro de contato, captação de leads, formalização de cadastro e de forma geral servem para estabalecerem conexões entre pessoas, companhias e instituições.

Para a realização deste objetivo as seguintes técnicas em HTML, CSS e JavaScript foram utilizadas:
 - **Estrutura HTML semantica:** Facilitando ao computador a compreenção da estruturação, tornando o projeto otimizado aos mecanismos de busca e amigavel para pessoas com necessidades especiais;
 - **Utilização de API via JavaScript:** Auto-preenchimento de outros campos através do CEP informado para evitar erros por parte do usuário contribui com a confiança de dados precisos através de API
 - **Responsividade:** Maior acessividade através de layouts ajustaveis para telas de mobile, tablet e desktop;
 - **Estilização com ferramentas CSS como o Flexbox:** Possibilitando a utilização de layouts modernos e ajustáveis por meio de códigos simples e enxutos.
 
## Aprendizados

Com a ajuda da API que completa alguns dos campos do formulário a partir do valor do CEP inserido pelo usuário, é possivel colocar em prática duas **heurísticas de Nielsen** que tornam as experiências dos usuários melhor:
 - **Prevenção de erros:** O mecanismo de auto completar os campos de endereço de acordo com o CEP do usuário evita que os dados errados sejam enviados.
 - **Auxílio ao usuário no reconhecimento de erros:** Ao declarar um CEP inexistente ou incorreto, o retorno da API aciona uma mensagem de erro proxima ao campo desta informação com um diagnostico do erro.

Com o JavaScript é possivel realizar várias interações de ferramentas úteis para tornar projetos mais práticos e funcionais, facilitando a vida das pessoas!

## Autor

### Israel Carneiro de Oliveira
 
<table border: none;" border="0" cellpadding="0">
 <td>
  <img width="200px" src="https://avatars.githubusercontent.com/u/113190387?s=400&u=3c497e66670ff827854b02bfd769529a19c9b5b1&v=4" rel="foto Israel Carneiro" />
 </td>
 <td>
  <h4>Contatos</h4><br>
  <a href="https://www.linkedin.com/in/israel-carneiro-de-oliveira" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" rel="LinkedIn" /></a><br>
  <a href="https://instagram.com/webcarneiro" target="_blank"><//img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" rel="Instagran" /></a><br>
  <a href="https://www.frontendmentor.io/profile/Israel-Carneiro" target="_blank"><img src="https://img.shields.io/badge/-Frontend%20Mentor-5F3DC4?style=for-the-badge&logo=FrontendMentor&logoColor=white&link=" rel="FrontEnd Mentor" /><a>
 </td>
</table>
