<?php

namespace App\Providers;

use App\Contracts\UseCases\Nivel\SaveNivelUseCaseInterface;
use App\Http\Resources\NivelResource;
use App\UseCases\Nivel\SaveNivelUseCase;
use Illuminate\Support\ServiceProvider;

class UseCaseServiceProvider extends ServiceProvider
{
    private array $useCaseBindings = [
        SaveNivelUseCaseInterface::class => SaveNivelUseCase::class
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
