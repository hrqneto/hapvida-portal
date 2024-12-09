# Detalhamento da Arquitetura - HapvidaProject

## Organização Modular
O projeto segue uma organização modular clara, dividida em camadas por responsabilidades:

- **`context/`**: Gerenciamento de estados globais.
- **`hooks/`**: Centralização de lógicas específicas em hooks reutilizáveis.
- **`components/`**: Componentes reutilizáveis, como Sidebar, Modal e SearchBar.
- **`pages/`**: Cada página representa uma rota principal do aplicativo.

Essa estrutura modular facilita a manutenção e permite escalabilidade conforme o crescimento do projeto.

---

## Context API
O gerenciamento global de estado foi implementado usando **Context API**, com dois principais contextos:

- **`AppContext`**: 
  - Gerencia o estado global do aplicativo, incluindo:
    - profileData
    - Controle de menu lateral (`menuOpen`).
    - Estado atual de banners e navegação entre eles.
    
- **`AuthContext`** (básico e para testes): 
  - Centraliza a lógica de autenticação simples, como validar e armazenar informações de sessão.
  - Estrutura pronta para futuros aprimoramentos de segurança.

---

## Hooks Personalizados
O projeto utiliza hooks para encapsular lógicas específicas e facilitar a manutenção do código:

- **`useAppContext`**: Acesso ao contexto global para controle de menu, banners, etc.
- **`useProfileData`**: Gerencia os dados do usuário, como perfil e informações de contato.
- **`useModal`**: Gerencia o estado de modais, com métodos para abrir e fechar.
- **`useServices`**: Filtra e gerencia a lista de serviços exibidos na interface.

---

## Tailwind CSS
- Todo o layout e as interfaces do projeto foram desenvolvidos utilizando **Tailwind CSS**.
- Paleta de cores personalizada no arquivo `tailwind.config.js`, com variáveis para:
  - **Cores primárias e secundárias**: `primary`, `primary-hover`, `text-primary`.
  - **Bordas e fundos**: `border-gray`, `gray-hover`.
  - **Estilização de botões e textos**: `disabled`, `disabled-text`, `hover-blue`.

---

## Vite e TypeScript
- **Vite** foi escolhido para oferecer um ambiente de desenvolvimento rápido e otimizado, com suporte nativo a hot-reload e build eficiente.
- **TypeScript** foi integrado para adicionar segurança e consistência no código, com tipagem estática que previne erros comuns e melhora a legibilidade.

---

## Rotas Seguras
- Implementadas com **`react-router-dom`**, garantindo:
  - Navegação dinâmica e estruturada.
  - Validação básica de autenticação via **`AuthContext`**, pronta para expansão futura com métodos robustos, como JWT ou OAuth.

---

## Resumo
Essa arquitetura modular e moderna oferece:
- Manutenção simplificada, com responsabilidades bem definidas.
- Uso de tecnologias atuais como **Vite**, **TypeScript** e **Tailwind CSS** para garantir velocidade e consistência no desenvolvimento.
- Estrutura flexível para expansão, seja em novas funcionalidades ou melhorias de segurança e desempenho.
