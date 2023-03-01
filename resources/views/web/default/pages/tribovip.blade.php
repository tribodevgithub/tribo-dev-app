@extends(getTemplate().'.layouts.app')

@push('styles_top')
    <link rel="stylesheet" href="/assets/default/vendors/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="/assets/default/vendors/owl-carousel2/owl.carousel.min.css">
@endpush

@section('content')
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mt-50">
                    <div class="default-title">
                        <h1><span class="text-primary">Transforme sua carreira</span><br>Aprenda programação com cursos avançados e projetos reais.</h1>
                        <p class="mt-10">O <b class="text-primary">TriboVIP</b> é a escolha perfeita para quem deseja iniciar ou progredir na carreira de programação. Com acesso a cursos avançados, projetos reais e mentorias semanais, você terá a garantia de que está sempre aprendendo e evoluindo. Não perca mais tempo e junte-se ao Tribo VIP agora mesmo para alcançar o sucesso em sua carreira de programação!</p>
                    </div>
                </div>
                <div class="col-lg-6">

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
