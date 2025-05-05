import type { Metadata } from "next"
import Layout from "@/components/Layout"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do Treno Hiit.",
}

export default function PrivacidadePage() {
  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Política de Privacidade</h1>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

          <h2>1. Introdução</h2>
          <p>
            O Treno Hiit ("nós", "nosso" ou "site") está comprometido em proteger sua privacidade. Esta Política de
            Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita
            nosso site ou utiliza nossos serviços.
          </p>
          <p>
            Ao utilizar o Treno Hiit, você concorda com a coleta e uso de informações de acordo com esta política.
            Recomendamos que você leia este documento na íntegra para entender nossas práticas em relação aos seus
            dados.
          </p>

          <h2>2. Informações que Coletamos</h2>
          <h3>2.1 Informações Fornecidas por Você</h3>
          <p>Podemos coletar informações pessoais que você nos fornece voluntariamente, como:</p>
          <ul>
            <li>
              Nome, endereço de e-mail e outras informações de contato quando você se registra em nossa plataforma
            </li>
            <li>Informações de perfil, como idade, altura, peso e objetivos de condicionamento físico</li>
            <li>Dados sobre seus treinos e exercícios</li>
            <li>Feedback, comentários e respostas a pesquisas</li>
          </ul>

          <h3>2.2 Informações Coletadas Automaticamente</h3>
          <p>Quando você visita nosso site, podemos coletar automaticamente certas informações, incluindo:</p>
          <ul>
            <li>Endereço IP e tipo de navegador</li>
            <li>Páginas visitadas e tempo gasto no site</li>
            <li>Dispositivo utilizado para acessar o site</li>
            <li>Dados de cookies e tecnologias similares</li>
          </ul>

          <h2>3. Como Usamos Suas Informações</h2>
          <p>Utilizamos as informações coletadas para:</p>
          <ul>
            <li>Fornecer, manter e melhorar nossos serviços</li>
            <li>Personalizar sua experiência na plataforma</li>
            <li>Processar e gerenciar suas contas e solicitações</li>
            <li>Enviar comunicações relacionadas ao serviço</li>
            <li>Analisar tendências de uso e melhorar nosso site</li>
            <li>Detectar, prevenir e resolver problemas técnicos e de segurança</li>
          </ul>

          <h2>4. Compartilhamento de Informações</h2>
          <p>
            Não vendemos ou alugamos suas informações pessoais a terceiros. Podemos compartilhar suas informações nas
            seguintes circunstâncias:
          </p>
          <ul>
            <li>Com prestadores de serviços que nos auxiliam na operação do site</li>
            <li>Para cumprir obrigações legais</li>
            <li>Para proteger nossos direitos, privacidade, segurança ou propriedade</li>
            <li>Em conexão com uma fusão, venda de ativos ou outra transação comercial</li>
          </ul>

          <h2>5. Seus Direitos e Escolhas</h2>
          <p>Você tem certos direitos em relação às suas informações pessoais, incluindo:</p>
          <ul>
            <li>Acessar e atualizar suas informações pessoais</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Optar por não receber comunicações de marketing</li>
            <li>Configurar preferências de cookies</li>
          </ul>

          <h2>6. Segurança</h2>
          <p>
            Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração,
            divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento
            eletrônico é 100% seguro.
          </p>

          <h2>7. Alterações nesta Política</h2>
          <p>
            Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações
            publicando a nova Política de Privacidade nesta página e atualizando a data de "última atualização".
          </p>

          <h2>8. Contato</h2>
          <p>Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco em:</p>
          <p>
            Email: privacidade@trenohiit.com
            <br />
            Telefone: (11) 99999-9999
          </p>
        </div>
      </div>
    </Layout>
  )
}
