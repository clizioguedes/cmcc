import { danger, fail, message, warn } from 'danger'

// Falha se a descrição do PR estiver vazia
if (!danger.github.pr.body || danger.github.pr.body.length === 0) {
  fail('Por favor, adicione uma descrição ao Pull Request.')
}

// Aviso se o PR for muito grande
const bigPRThreshold = 500
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn('Esse PR é grande demais, considere dividir em partes menores.')
}

// Mensagem se modificou arquivos de dependência
const hasPackageChanges = danger.git.modified_files.some((file) =>
  file.includes('package.json'),
)

if (hasPackageChanges) {
  message('Você alterou dependências, lembre-se de verificar se tudo funciona.')
}
