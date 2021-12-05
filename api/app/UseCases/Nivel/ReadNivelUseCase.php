<?php

namespace App\UseCases\Nivel;

use App\Contracts\UseCases\Nivel\ReadNivelUseCaseInterface;
use App\Models\Nivel;
use Illuminate\Http\Resources\Json\JsonResource;

class ReadNivelUseCase implements ReadNivelUseCaseInterface
{
    public function __construct(
        private string $outputClass
    )
    {}

    public function execute(Nivel $nivel): JsonResource
    {
        return new $this->outputClass($nivel);
    }
}