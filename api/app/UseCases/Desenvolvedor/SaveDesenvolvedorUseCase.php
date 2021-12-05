<?php

namespace App\UseCases\Desenvolvedor;

use App\Contracts\UseCases\Desenvolvedor\SaveDesenvolvedorUseCaseInterface;
use App\Models\Desenvolvedor;
use Illuminate\Http\Resources\Json\JsonResource;

class SaveDesenvolvedorUseCase implements SaveDesenvolvedorUseCaseInterface
{
    public function __construct(
        private string $outputClass
    )
    {}

    public function execute(Desenvolvedor $desenvolvedor): JsonResource
    {
        $desenvolvedor->save();

        return new $this->outputClass($desenvolvedor);
    }
}