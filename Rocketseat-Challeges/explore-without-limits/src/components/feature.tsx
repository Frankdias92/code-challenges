import Image from 'next/image'
import  moonYellow  from '../assets/moonYellow.png'
import  moonBlue  from '../assets/moonBlue.png'
import  moonPink  from '../assets/moonPink.png'


export function Feature() {
    const featuredTitle = [
        {
            "id": 1,
            'img': moonYellow,
            'title': 'Não para nunca',
            'body': 'Se você deseja ter sucesso nos estudos, é fundamental que você adote uma mentalidade de "não pare nunca". Estudar de forma consistente e contínua é a chave para o progresso e a conquista de seus objetivos.'
        },
        {
            "id": 2,
            'img': moonBlue,
            'title': 'Só volta',
            'body': 'Se você parou ou perdeu o ritmo em alguma atividade ou projeto, saiba que nunca é tarde para recomeçar. Às vezes, as circunstâncias podem mudar, ou podemos nos sentir desmotivados ou sobrecarregados.'
        },
        {
            "id": 3,
            'img': moonPink,
            'title': 'Siga seu ritmo',
            'body': 'Avançar pouco a pouco mantém progresso constante em objetivos, evitando parar ou desistir. Mesmo pequenos passos nos aproximam do destino e motivam a continuidade. Não subestime o poder de cada ação rumo ao objetivo final.'
        }
    ]

    return (
        <div className="flex flex-col w-full min-h-full bg-secondary-bg py-[52px] px-10 relative">

            <div className='grid grid-flow-row w-full min-h-full m-auto justify-center gap-12'>
                {featuredTitle.map(item => {
                    return ( 
                        <div key={item.id} className='flex flex-col justify-start w-[352px] h-[380px]
                            bg-primary-bg rounded-3xl p-6'
                        >
                            <Image src={item.img} alt='' width={80} height={80} quality={100}
                                className=''
                            />
                            <h1 className='text-font-primary-color mt-8 font-bold text-3xl'>{item.title}</h1>
                            <p className='text-font-base-color mt-3'>{item.body}</p>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}