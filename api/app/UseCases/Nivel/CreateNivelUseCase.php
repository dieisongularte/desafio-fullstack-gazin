<?php

namespace App\UseCases\Nivel;

use App\Contracts\UseCases\Nivel\CreateNivelUseCaseInterface;
use App\Models\Nivel;
use Illuminate\Http\Resources\Json\JsonResource;

class CreateNivelUseCase implements CreateNivelUseCaseInterface
{
    public function __construct(
        private string $outputClass
    )
    {}

    public function execute(Nivel $nivel): JsonResource
    {
        $nivel->save();

        return new $this->outputClass($nivel);
    }
}