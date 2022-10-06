

import { Icon, Card } from '~/assets/components'

export const Dashboard = () => (

  <>
    <header className="bg-red-500 text-white">
      <div className="container max-w-3xl p-4 flex justify-between ">
        <img src="/imgs/logo-fundo-vermelho.svg" className="w-28 md:w-40" />
        <a href="/profile">
          <Icon name="profile" className="w-10" />
        </a>
      </div>
    </header>

    <main className="space-y-6">
      <section id="header" className=" bg-red-500 text-white p-4">
        <div className="container max-w-3xl space-y-2 p-4">
          <span>Olá Maria</span>
          <h3 className="text-2xl font-bold">Qual seu palpite?</h3>
        </div>
      </section>

      <section id="content" className="container max-w-3xl space-y-4 p-4 ">

        <div className=" p-4 flex space-4 items-center justify-center">
          <Icon name="arrowLeft" className="w-6 text-red-500" />
          <span className='font-bold'>24 de novembro</span>
          <Icon name="arrowRight" className="w-6 text-red-500" />
        </div>


        <div className="space-y-4">
          <Card
            timeA={{ slug: 'sui' }}
            timeB={{ slug: 'cam' }}
            match={{ time: '7:00' }}
          />

          <Card
            timeA={{ slug: 'uru' }}
            timeB={{ slug: 'c0r' }}
            match={{ time: '7:00' }}
          />

          <Card
            timeA={{ slug: 'por' }}
            timeB={{ slug: 'gan' }}
            match={{ time: '7:00' }}
          />
        </div>
      </section>
    </main>

  </>
)

