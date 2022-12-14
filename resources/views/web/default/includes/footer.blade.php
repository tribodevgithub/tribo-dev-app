@php
    $socials = getSocials();
    if (!empty($socials) and count($socials)) {
        $socials = collect($socials)->sortBy('order')->toArray();
    }

    $footerColumns = getFooterColumns();
@endphp

<footer class="footer bg-secondary position-relative user-select-none">
    <div class="container">
        <div class="row">
            <div class="col-12">
                {{-- <div class=" footer-subscribe d-block d-md-flex align-items-center justify-content-between">
                    <div class="flex-grow-1">
                        <strong>{{ trans('footer.join_us_today') }}</strong>
                        <span class="d-block mt-5 text-white">{{ trans('footer.subscribe_content') }}</span>
                    </div>
                    <div class="subscribe-input bg-white p-10 flex-grow-1 mt-30 mt-md-0">
                        <form action="/newsletters" method="post">
                            {{ csrf_field() }}

                            <div class="form-group d-flex align-items-center m-0">
                                <div class="w-100">
                                    <input type="text" name="newsletter_email" class="form-control border-0 @error('newsletter_email') is-invalid @enderror" placeholder="{{ trans('footer.enter_email_here') }}"/>
                                    @error('newsletter_email')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>
                                <button type="submit" class="btn btn-primary rounded-pill">{{ trans('footer.join') }}</button>
                            </div>
                        </form>
                    </div>
                </div> --}}

                <div class=" footer-register d-block d-md-flex align-items-center justify-content-between" >
                    <div class="flex-grow-1 ml-4 text-dark text-center">
                        <strong>Seja um desenvolvedor TriboDEV</strong>
                    </div>
                    <button type="submit" class="btn btn-primary bg-light rounded-pill"><b>Criar Conta</b></button>
                </div>

            </div>
        </div>
    </div>

    @php
        $columns = ['first_column','second_column','third_column','forth_column'];
    @endphp

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="footer-logo text-center">
                <div class="row justify-content-center ">
                    <div class="col-2">
                        <a href="/">
                            @if(!empty($generalSettings['footer_logo']))
                                <img src="{{ $generalSettings['footer_logo'] }}" class="img-cover" alt="footer logo" width="200">
                            @endif
                        </a>
                    </div>
                </div>
                    <p class="font-16 font-weight-normal text-gray mt-10">Comece a avançar agora mesmo na direção dos seus objetivos <br>e
                        alcance o seu lugar como DEV.
                    </p>
                    <div class="footer-social mt-4">
                        @if(!empty($socials) and count($socials))
                            @foreach($socials as $social)
                                <a href="{{ $social['link'] }}">
                                    <img src="{{ $social['image'] }}" alt="{{ $social['title'] }}" class="mr-15">
                                </a>
                            @endforeach
                        @endif
                    </div>
                </div>
            </div>

            @foreach($columns as $column)
                <div class="col-6 col-md-3" hidden>
                    @if(!empty($footerColumns[$column]))
                        @if(!empty($footerColumns[$column]['title']))
                            <span class="header d-block text-white font-weight-bold">{{ $footerColumns[$column]['title'] }}</span>
                        @endif

                        @if(!empty($footerColumns[$column]['value']))
                            <div class="mt-20">
                                {!! $footerColumns[$column]['value'] !!}
                            </div>
                        @endif
                    @endif
                </div>
            @endforeach

        </div>

        <div class="mt-40 border-blue py-25 text-center ">
            <span class="header d-block text-white font-weight-bold">Copyright © 2023. Todos os Direitos Reservados <b class="text-primary">TriboDEV</b></span>
        </div>
    </div>
</footer>
