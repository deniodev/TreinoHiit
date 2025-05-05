import type { Metadata } from "next"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a equipe do Treno Hiit.",
}

export default function ContatoPage() {
  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em Contato</h1>
        <p className="mb-8 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Tem alguma dúvida, sugestão ou feedback? Estamos aqui para ajudar. Entre em contato conosco usando o
          formulário abaixo ou através dos nossos canais de atendimento.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Nome
                </label>
                <Input id="name" placeholder="Seu nome completo" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Assunto
                </label>
                <Input id="subject" placeholder="Assunto da mensagem" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mensagem
                </label>
                <Textarea id="message" placeholder="Sua mensagem" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>Outras formas de entrar em contato conosco</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">contato@trenohiit.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Telefone</h3>
                    <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Endereço</h3>
                    <p className="text-sm text-muted-foreground">
                      Av. Paulista, 1000 - Bela Vista
                      <br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Horário de Atendimento</CardTitle>
                <CardDescription>Quando você pode nos contatar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span>10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">Respondemos a todas as mensagens em até 24 horas úteis.</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
