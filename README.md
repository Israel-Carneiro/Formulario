# Formulário de inscrição

Um modelo moderno e completo de formulário para o registro de dados pessoais de usuários e função de auto preenchimento de endereço via API a partir do CEP informado. Pode ser facilmente reproduzido e tem diversas utilidades!

## Demonstração

### Layouts responsivos:
 - Layouts próprios para diferentes larguras de telas de dispositivos:

<table style="width: 100%; border: solid;" border="2px" cellspacing="0" cellpadding="1%">
  <tr>
    <th scope="col">Desktop (1024px ou maior)</th>
    <th scope="col">Tablet (768px ou maior)</th>
    <th scope="col">Mobile (menor que 768px)</th>
  </tr>
  <tr>
    <td width="38%"><img src="./assets/Designes Responsivos/screencapture-desktop.png" rel="Layout desktop" /></td>
    <td width="30%"><img src="./assets/Designes Responsivos/screencapture-tablet.png" rel="Layout tablet" /></td>
    <td width="12%"><img src="./assets/Designes Responsivos/screencapture-mobile.png" rel="Layout mobile" /></td>
  </tr>
</table>

### Mecânicas do formulário:
 - **Validação:** O usuário é orientado a preencher o formulário da maneira correta de acordo com parâmetros estabelecidos para cada campo (com exeção do campo opcional de "complemento"). Em campos vazios aparecera a mensagem para serem preenchidos, campos preenchidos de forma irregular terão a mensagem de resposta inválida aparecendo;
 - **Autopreenchimento:** A partir do CEP digitado pelo usuário, os campos de **endereço**, **bairro**, **cidade** e **UF** serão autopreenchidos pelos dados coletados via API, evitando que sejam passadas informações incorretas, inprecisas e falsas além de ajudar o usuário a completar o formulário. Caso o CEP declarado não exista, a seguinte mensagem aparece: "**CEP inválido. Tente novamente.**"

<table style="width: 100%; border: solid;" border="2px" cellspacing="0" cellpadding="1%">
  <tr>
    <th scope="col">Validações de formulário</th>
    <th scope="col">Autopreenchimento</th>
  </tr>
  <tr>
    <td width="35%"><img src="./assets/Designes Responsivos/validações.png" rel="Validações do formulário" /></td>
    <td width="38%"><img src="./assets/Designes Responsivos/autopreenchimento.png" rel="Autopreenchimento de API" /></td>
  </tr>
</table>

 ### :point_down:Confira o resultado do projeto pelo link de Deploy:<br>
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
  <a href="https://www.linkedin.com/in/israel-carneiro-de-oliveira" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" rel="LinkedIn" /></a><br><br>
  <a href="https://api.whatsapp.com/send/?phone=5527996332590&text=Olá+Israel%2C+tudo+bom%3F&type=phone_number&app_absent=0" target="_blank"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" rel="WhatsApp" /></a><br>
  <a href="https://instagram.com/webcarneiro" target="_blank"><//img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" rel="Instagran" /></a><br>
  <a href="https://www.frontendmentor.io/profile/Israel-Carneiro" target="_blank"><img src="https://img.shields.io/badge/-Frontend%20Mentor-5F3DC4?style=for-the-badge&logo=FrontendMentor&logoColor=white&link=" rel="FrontEnd Mentor" /><a>
 </td>
</table>
