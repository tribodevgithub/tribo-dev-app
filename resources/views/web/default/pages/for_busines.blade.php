@extends(getTemplate().'.layouts.app')

@push('styles_top')
    <link rel="stylesheet" href="/assets/default/vendors/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="/assets/default/vendors/owl-carousel2/owl.carousel.min.css">
@endpush

@section('content')

    <section class="bg-img-1 pb-50 pt-50">
        <div class="container pt-50 pb-50">
            <div class="row align-items-center mt-50 mb-50">
                <div class="col-lg-7">
                    <div class="row">
                        <div class="col-lg-12 mb-20">
                            <div class="card p-50">
                                <div class="card-body">
                                    <div class="row align-items-center">
                                    <div class="default-title">
                                        <h1><span class="text-primary">Otimize</span> seu processo de desenvolvimento</h1>
                                        <p class="mt-30 mb-30 text-gray">Contrate uma equipe de desenvolvedores em poucos cliques e resolva todas as suas tarefas técnicas em um só lugar. A <b class="text-primary">Tribodev</b> apoia seu negócio, através de um processo de outsourcing prático e eficiente.</p>
                                        <a href="#assinar" class="btn btn-primary rounded-pill">Fale com um especialista</a>
                                        <a href="#assinar" class="btn btn-outline-primary rounded-pill float-right">Ver Planos</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-primary">
        <div class="container mb-50 pt-50 pb-50">
            <div class="row align-items-center">

                <div class="col-lg-8">
                    <h1 class="font-36  mb-20">Nossos serviços</h1>
                    <p class="mb-20">Capacitadores de inovação de ponta a ponta, ajudando sua empresa
a liberar todo o seu potencial de inovação.
</p>
                     <div class="row">

                            <div class="card mb-10">
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-4 border-right border-primary text-center">
                                        <img src="https://www.envato.com/static/media/four-people-at-envato-worldwide-author-conference-2019.e5af1acf.jpg" class="w-100">
                                        </div>
                                        <div class="col-8">
    <h2>Equipes de tecnologia dedicados
</h2>
                                            <p class="text-gray font-14 pt-10">Criamos Tech Squads multidisciplinares (completos/parcias), remotos que se tornam parte de sua equipe e são treinados em metodologias ágeis para entregar valor contínuo.Com nossas equipes remotas altamente treinadas, os clientes têm a oportunidade de aumentar a produção de inovação, além de ter acesso a uma variedade maior e mais diversificada de talentos, reduzindo assim o custo de desenvolvimento.

</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="card mb-10">
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-4 border-right border-primary text-center">
                                        <img src="https://www.envato.com/static/media/four-people-at-envato-worldwide-author-conference-2019.e5af1acf.jpg" class="w-100">
                                        </div>
                                        <div class="col-8">
    <h2>Desenvolvimento sob demanda
</h2>
                                            <p class="text-gray font-14 pt-10">Somos uma equipe de desenvolvedores de software apaixonados por criar produtos e soluções digitais inovadoras usando as mais recentes tecnologias e metodologias ágeis. Oferecemos soluções completas para atender às suas necessidades técnicas, desde o gerenciamento do produto e a arquitetura de tecnologia até o desenvolvimento front-end, back-end, DevOps e controle de qualidade.

</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-10">
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-4 border-right border-primary text-center">
                                        <img src="https://www.envato.com/static/media/four-people-at-envato-worldwide-author-conference-2019.e5af1acf.jpg" class="w-100">
                                        </div>
                                        <div class="col-8">
    <h2>Emcubadora
</h2>
                                            <p class="text-gray font-14 pt-10">Estabelecemos parcerias com empresas para lançar novos negócios digitais em conjunto, aproveitando seus principais recursos (canais de distribuição, base de clientes, conhecimento do setor, etc.). Juntos, trabalhamos para transformar ideias inovadoras em produtos adorados pelo mercado, escalando de forma enxuta e eficiente. Como fundadores de startups, adoramos construir algo do zero.

</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                     </div>
                </div>
                <div class="col-lg-4">
                    <img src="/assets/default/img/tribovip/img_td_efx_002.png" style="filter: drop-shadow(5px 25px 20px #000);">
                </div>
        </div>
    </div></section>


@endsection

@push('scripts_bottom')
    <script src="/assets/default/vendors/swiper/swiper-bundle.min.js"></script>
    <script src="/assets/default/vendors/owl-carousel2/owl.carousel.min.js"></script>
    <script src="/assets/default/vendors/parallax/parallax.min.js"></script>
    <script src="/assets/default/js/parts/home.min.js"></script>
    <script src="/assets/default/js/parts/video_player_embed.js"></script>
@endpush
