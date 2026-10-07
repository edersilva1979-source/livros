# Site de Éder Silva

Página estática em HTML, CSS e JavaScript. Inclui a foto do autor e dez capas, otimizadas em WebP sem alterar seus elementos.

## Abrir

Extraia o ZIP e abra index.html no navegador. Não é necessário instalar dependências.

## Estrutura

1. index.html: conteúdo e seções.
2. css/style.css: cores, layout e versão móvel.
3. js/config.js: contatos e links individuais de compra.
4. js/script.js: menu, avisos de compra e formulário.
5. img: foto e favicon.
6. livros: dez capas.

## Configurar antes de publicar

Abra js/config.js em um editor. Preencha o campo compra de cada livro com seu endereço completo de venda. Preencha email e instagram com seus dados reais. LinkedIn e GitHub já estão definidos.

Enquanto o link de compra estiver vazio, o botão Comprar abre um aviso. Sem email configurado, o formulário informa a indisponibilidade. Com email, ele abre o aplicativo de email do visitante com o texto preenchido. Não existe serviço de envio automático, pagamento ou armazenamento de mensagens.

As descrições são apresentações neutras. Substitua por suas sinopses oficiais. Não foram inventados gêneros ou enredos.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie o conteúdo da pasta eder_site, incluindo index.html na raiz e todas as subpastas.
3. Abra Settings, Pages.
4. Em Build and deployment, selecione Deploy from a branch.
5. Selecione main e / (root). Salve.
6. Aguarde o endereço informado pelo GitHub.

Também pode enviar os arquivos para uma hospedagem estática convencional. Não publique apenas o HTML: as pastas precisam acompanhá-lo.

## Ajustar a prévia social

Após definir o endereço público, substitua o conteúdo de og:image no HTML pelo endereço absoluto da imagem e acrescente og:url com o endereço do site.

## Acessibilidade

Menu com estado anunciado, imagens com textos alternativos, navegação por teclado, foco visível e respeito à preferência de movimento reduzido.
