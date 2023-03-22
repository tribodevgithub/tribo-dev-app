@extends(getTemplate().'.layouts.app')

@push('styles_top')
    <link rel="stylesheet" href="/assets/default/vendors/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="/assets/default/vendors/owl-carousel2/owl.carousel.min.css">
@endpush

@section('content')

    <section class="bg-img-1">
        <div class="container mt-50 pt-50 pb-50">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <div class="row">
                        <div class="col-lg-12 mb-20">
                            <div class="card mb-10">
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


@endsection

@push('scripts_bottom')
    <script src="/assets/default/vendors/swiper/swiper-bundle.min.js"></script>
    <script src="/assets/default/vendors/owl-carousel2/owl.carousel.min.js"></script>
    <script src="/assets/default/vendors/parallax/parallax.min.js"></script>
    <script src="/assets/default/js/parts/home.min.js"></script>
    <script src="/assets/default/js/parts/video_player_embed.js"></script>
@endpush
