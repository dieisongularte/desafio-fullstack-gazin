<?php

namespace App\Providers;

use App\Contracts\UseCases\Desenvolvedor\SaveDesenvolvedorUseCaseInterface;
use App\Contracts\UseCases\Nivel\DeleteNivelUseCaseInterface;
use App\Contracts\UseCases\Nivel\SaveNivelUseCaseInterface;
use App\Http\Resources\DesenvolvedorResource;
use App\Http\Resources\NivelResource;
use App\UseCases\Desenvolvedor\SaveDesenvolvedorUseCase;
use App\UseCases\Nivel\DeleteNivelUseCase;
use App\UseCases\Nivel\SaveNivelUseCase;
use Illuminate\Support\ServiceProvider;

class UseCaseServiceProvider extends ServiceProvider
{
    private array $useCaseBindings = [
        SaveNivelUseCaseInterface::class => SaveNivelUseCase::class,
        DeleteNivelUseCaseInterface::class => DeleteNivelUseCase::class,
        SaveDesenvolvedorUseCaseInterface::class => SaveDesenvolvedorUseCase::class
    ];

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->bindUseCases();

        $this->app
            ->when(SaveNivelUseCase::class)
            ->needs('$outputClass')
            ->give(NivelResource::class);

        $this->app
            ->when(SaveDesenvolvedorUseCase::class)
            ->needs('$outputClass')
            ->give(DesenvolvedorResource::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    private function bindUseCases(): void
    {
        collect($this->useCaseBindings)->each(function ($concreteClass, $abstractClass) {
            $this->app->bind($abstractClass, $concreteClass);
        });
    }
}
