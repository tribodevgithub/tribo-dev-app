@extends(getTemplate().'.layouts.app')

@push('styles_top')
    <link rel="stylesheet" href="/assets/default/vendors/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="/assets/default/vendors/owl-carousel2/owl.carousel.min.css">
@endpush

@section('content')
    <section>
        <div class="container mt-50 mb-50 pt-50 pb-50">
            <div class="row">
                <div class="col-lg-6 ">
                    <div class="default-title">
                        <h1><span class="text-primary">Transforme sua carreira</span><br>Aprenda programação com cursos avançados e projetos reais.</h1>
                        <p class="mt-30 mb-30 text-gray">O <b class="text-primary">TriboVIP</b> é a escolha perfeita para quem deseja iniciar ou progredir na carreira de programação. Com acesso a cursos avançados, projetos reais e mentorias semanais, você terá a garantia de que está sempre aprendendo e evoluindo. Não perca mais tempo e junte-se ao Tribo VIP agora mesmo para alcançar o sucesso em sua carreira de programação!</p>
                        <a href="#" class="btn btn-primary rounded-pill">Assinar Agora!</a>
                    </div>
                </div>
                <div class="col-lg-6">

                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container mt-50 mb-50 pt-50 pb-50">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="default-title">
                        <h1 class="text-primary">Você já sonhou em ganhar em dólar ou euro e morar na Europa ou nos Estados Unidos?</h1>

                    </div>
                </div>
                <div class="col-lg-6 align-items-center">
                    <p class="mt-30 mb-20 font-20 text-gray">
                        Assinando o <b class="text-primary">TriboVIP</b>, você terá acesso aos melhores treinamentos para prepará-lo de forma rápida e eficaz para vagas internacionais. Com nossos cursos, você aprenderá como criar um currículo internacional impressionante, atrair a atenção de empresas de todo o mundo e aprimorar seu inglês técnico para profissionais de tecnologia.
                    </p>

                    <a href="#" type="button" class="btn btn-outline-primary btn-block mt-30">Assinar TriboVIP</a>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container mt-50 mb-50 pt-50 pb-50">
            <div class="row">col-2
                <div class="col-lg-4">
                    <h1>PARTICIPE DOS DESAFIOS PARA TRABALHOS REMUNERADOS</h1>
                    <p class="mt-30 mb-30 text-gray">
                        A TriboDev também é uma softhouse, ou seja, que se dedica ao desenvolvimento de soluções tecnológicas e à alocação de recursos para empresas. Nossos profissionais, que antes foram nossos alunos, são altamente preparados para entregar resultados de qualidade para nossos clientes, o que nos torna muito requisitados.
                        Ao se tornar um membro da nossa comunidade VIP, você terá acesso a desafios que lhe proporcionarão novas oportunidades de contratação.
                    </p>
                </div>
                <div class="col-lg-4 border-right border-primary">
                    <div class="card mb-10">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-3">
                                <h1 class="font-36 text-primary font-weight-bolder"> 01</h1>
                                </div>
                                <div class="col-9">
                                    <p class="text-gray">
                                    Escolha o desafio disponível de acordo com suas habilidades;
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                    <div class="card mb-10">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-3">
                                <h1 class="font-36 text-primary font-weight-bolder"> 02</h1>
                                </div>
                                <div class="col-9">
                                    <p class="text-gray">
                                    Resolva o desafio em menor tempo possível
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-10">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-3">
                                <h1 class="font-36 text-primary font-weight-bolder"> 03</h1>
                                </div>
                                <div class="col-9">
                                    <p class="text-gray">
                                    Sua solução será avaliada por nossos gestores
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-10">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-3">
                                <h1 class="font-36 text-primary font-weight-bolder"> 04</h1>
                                </div>
                                <div class="col-9">
                                    <p class="text-gray">
                                    Se aprovada, você será encaminhado para a entrevista técnica
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-10">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-3">
                                <h1 class="font-36 text-primary font-weight-bolder"> 05</h1>
                                </div>
                                <div class="col-9">
                                    <p class="text-gray">
                                    Com sucesso na entrevista, o job é seu!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <p class="mt-30 mb-30 text-gray">
                        Com um processo simples e eficaz, você terá a chance de desenvolver suas habilidades e mostrar todo o seu potencial para nossos gestores. Com a TriboDev, você terá a oportunidade de se destacar na área de tecnologia e alcançar o sucesso em sua carreira. Junte-se a nós e torne-se um membro da nossa comunidade Vip agora mesmo!
                    </p>
                </div>
        </div>
    </section>

@endsection

@push('scripts_bottom')
    <script src="/assets/default/vendors/swiper/swiper-bundle.min.js"></script>
    <script src="/assets/default/vendors/owl-carousel2/owl.carousel.min.js"></script>
    <script src="/assets/default/vendors/parallax/parallax.min.js"></script>
    <script src="/assets/default/js/parts/home.min.js"></script>
    <script src="/assets/default/js/parts/video_player_embed.js"></script>
@endpush
