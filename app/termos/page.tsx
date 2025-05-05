import type { Metadata } from "next"
import Layout from "@/components/Layout"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do Treno Hiit.",
}

export default function TermosPage() {
  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Termos de Uso</h1>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar ou usar o site Treno Hiit ("nós", "nosso" ou "site"), você concorda em cumprir e estar vinculado
            a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar ou usar
            nossos serviços.
          </p>

          <h2>2. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
            imediatamente após a publicação dos termos atualizados. Seu uso continuado do site após tais alterações
            constitui sua aceitação dos novos termos.
          </p>

          <h2>3. Uso do Site</h2>
          <h3>3.1 Elegibilidade</h3>
          <p>
            Para usar nossos serviços, você deve ter pelo menos 18 anos de idade ou a maioridade legal em sua
            jurisdição, o que for maior.
          </p>

          <h3>3.2 Registro e Conta</h3>
          <p>
            Alguns recursos do nosso site podem exigir que você crie uma conta. Você é responsável por manter a
            confidencialidade de suas credenciais de login e por todas as atividades que ocorrem em sua conta.
          </p>

          <h3>3.3 Uso Aceitável</h3>
          <p>
            Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os direitos de terceiros
            ou restrinja o uso do site por outros.
          </p>

          <h2>4. Conteúdo</h2>
          <h3>4.1 Conteúdo do Usuário</h3>
          <p>
            Ao enviar conteúdo para o site (como comentários, treinos personalizados, etc.), você concede ao Treno Hiit
            uma licença mundial, não exclusiva, livre de royalties para usar, reproduzir, modificar, adaptar, publicar,
            traduzir e distribuir esse conteúdo.
          </p>

          <h3>4.2 Conteúdo Proibido</h3>
          <p>
            Você não deve publicar conteúdo que seja ilegal, difamatório, ameaçador, abusivo, invasivo da privacidade de
            terceiros, ou que viole direitos de propriedade intelectual.
          </p>

          <h2>5. Propriedade Intelectual</h2>
          <p>
            O conteúdo do site, incluindo textos, gráficos, logotipos, ícones e imagens, é propriedade do Treno Hiit e
            está protegido por leis de direitos autorais e marcas registradas.
          </p>

          <h2>6. Isenção de Responsabilidade</h2>
          <h3>6.1 Conselhos de Saúde e Fitness</h3>
          <p>
            O conteúdo do site é apenas para fins informativos e não substitui aconselhamento médico profissional.
            Consulte um profissional de saúde antes de iniciar qualquer programa de exercícios.
          </p>

          <h3>6.2 Garantias</h3>
          <p>
            O site é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou
            implícitas.
          </p>

          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            Em nenhuma circunstância o Treno Hiit será responsável por danos diretos, indiretos, incidentais, especiais
            ou consequentes resultantes do uso ou incapacidade de usar o site.
          </p>

          <h2>8. Links para Sites de Terceiros</h2>
          <p>
            Nosso site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo e práticas desses
            sites e não somos responsáveis por suas políticas de privacidade ou práticas.
          </p>

          <h2>9. Rescisão</h2>
          <p>
            Reservamo-nos o direito de encerrar ou suspender sua conta e acesso ao site a nosso critério, sem aviso
            prévio, por qualquer motivo.
          </p>

          <h2>10. Lei Aplicável</h2>
          <p>
            Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, sem considerar seus
            princípios de conflito de leis.
          </p>

          <h2>11. Contato</h2>
          <p>Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco em:</p>
          <p>
            Email: termos@trenohiit.com
            <br />
            Telefone: (11) 99999-9999
          </p>
        </div>
      </div>
    </Layout>
  )
}
