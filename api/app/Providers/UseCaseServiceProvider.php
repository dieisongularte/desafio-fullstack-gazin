<?php

namespace App\Providers;

use App\Contracts\UseCases\Desenvolvedor\SaveDesenvolvedorUseCaseInterface;
use App\Contracts\UseCases\Desenvolvedor\DeleteDesenvolvedorUseCaseInterface;
use App\Contracts\UseCases\Desenvolvedor\ReadAllDesenvolvedorUseCaseInterface;
use App\Contracts\UseCases\Nivel\DeleteNivelUseCaseInterface;
use App\Contracts\UseCases\Nivel\ReadAllNivelUseCaseInterface;
use App\Contracts\UseCases\Nivel\ReadNivelUseCaseInterface;
use App\Contracts\UseCases\Nivel\SaveNivelUseCaseInterface;
use App\Http\Resources\DesenvolvedorResource;
use App\Http\Resources\NivelResource;
use App\Http\Resources\PaginatedItemsList;
use App\UseCases\Desenvolvedor\DeleteDesenvolvedorUseCase;
use App\UseCases\Desenvolvedor\ReadAllDesenvolvedorUseCase;
use App\UseCases\Desenvolvedor\SaveDesenvolvedorUseCase;
use App\UseCases\Nivel\DeleteNivelUseCase;
use App\UseCases\Nivel\ReadAllNivelUseCase;
use App\UseCases\Nivel\ReadNivelUseCase;
use App\UseCases\Nivel\SaveNivelUseCase;
use Illuminate\Support\ServiceProvider;

class UseCaseServiceProvider extends ServiceProvider
{
    private array $useCaseBindings = [
        ReadAllNivelUseCaseInterface::class => ReadAllNivelUseCase::class,
        ReadNivelUseCaseInterface::class => ReadNivelUseCase::class,
        SaveNivelUseCaseInterface::class => SaveNivelUseCase::class,
        DeleteNivelUseCaseInterface::class => DeleteNivelUseCase::class,
        ReadAllDesenvolvedorUseCaseInterface::class => ReadAllDesenvolvedorUseCase::class,
        SaveDesenvolvedorUseCaseInterface::class => SaveDesenvolvedorUseCase::class,
        DeleteDesenvolvedorUseCaseInterface::class => DeleteDesenvolvedorUseCase::class
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
            ->when(ReadAllNivelUseCase::class)
            ->needs('$outputClass')
            ->give(PaginatedItemsList::class);

        $this->app
            ->when(ReadNivelUseCase::class)
            ->needs('$outputClass')
            ->give(NivelResource::class);

        $this->app
            ->when(SaveNivelUseCase::class)
            ->needs('$outputClass')
            ->give(NivelResource::class);

        $this->app
            ->when(ReadAllDesenvolvedorUseCase::class)
            ->needs('$outputClass')
            ->give(PaginatedItemsList::class);

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
