
import { Icon, Input } from '~/assets/components'





export const Login = () => {

  return (
    <div>
      <header className=" flex justify-center p-4 border-b border-red-300">
        <div className="container max-w-xl">
          <img src="/imgs/logo-fundo-branco.svg" className="w-32 md:w-40" />

        </div>
      </header>

      <main className=" container max-w-xl p-4">
        <div className="p-4 flex space-x-4 items-center">
          <a href="/">
            <Icon name="back" className="h-6" />
          </a>
          <h2 className="text-xl font-bold">Entre na sua conta</h2>
        </div>

        <form className="p-4 space-y-6">
          <Input
            type="text"
            name="email"
            label="Digite seu email"
            placeholder="Digite seu email" />


          <Input
            name="password"
            type="password"
            label="Sua senha"
            placeholder="Digite sua senha" />

          <a href="/dashboard" className=" block w-full text-white text-center bg-red-500 text-xl px-8 py-4  rounded-xl">Entrar</a>


        </form>
      </main>

    </div>
  )
}