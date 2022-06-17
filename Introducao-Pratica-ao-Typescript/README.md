# Introdução Prática ao TypeScript

Este repositório contém a atividade prática do Curso "Introdução Prática ao TypeScript", que faz parte do Bootcamp Santander Fullstack Developer da [Digital Innovation One](https://digitalinnovation.one/).

## O que é TypeScript

É um superset do javascript que trás tipagem estática para a linguagem, além de outras features, com o propósito de melhorar a qualidade do código escrito e a sua usabilidade. Como é um superset o código compilado e usado em produção ainda é javascript, porém é um JS mais resiliente e turbinado graças ao uso de TS durante o desenvolvimento.

### Configuração Inicial

Instalação do TypeScript em nivel global

```
npm install -g typescript
```

Instalação do Lite Server para visualização em tempo real:

```
npm install lite-server
```

Execução do projeto com atualização de código em tempo real:

```
tsc --watch
```

## Conteúdo

### Tipagem

* Boolean
* String
* Listas
* Enums
* Any
* Void
* Function
* Unknown
* Never
* [TypeScript Lang Org - Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

### tsconfig.json

Comando para criação do arquivo tsconfig.json:

```
tsc --init
```

Configurações abordadas:

* Target
* lib
* sourceMap
* outDir / rootDir
* strict
* noImplicitAny
* noUnusedLocals
* noUnusedParameters
* [TypeScript Lang Org - tsconfig.json](https://www.typescriptlang.org/tsconfig)