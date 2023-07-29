# Microsserviço de Upload de Imagens DraftCode

## Descrição

Este microsserviço é responsável por realizar o upload de imagens para o cloudinary.

## Como utilizar

Para utilizar este microsserviço, é necessário que você forneça um arquivo .env com as seguintes variáveis de ambiente:

- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- FRONTEND_URL

Você consegue obter essas informações no painel de controle do cloudinary exceto pelo `FRONTEND_URL`, essa variável é o endereço do frontend que irá consumir o microsserviço, em desenvolvimento você pode utilizar `http://localhost:3000`.

Configure o `cloudinary` seguindo o passo a passo [aqui](docs/cloudinary/CLOUDINARY.MD), é necessário que você crie uma conta no cloudinary.

Sem o cloudinary configurado, o microsserviço não irá funcionar.

## Como rodar

Para rodar o microsserviço, basta executar o comando:

```bash
npm install && npm run dev
```
