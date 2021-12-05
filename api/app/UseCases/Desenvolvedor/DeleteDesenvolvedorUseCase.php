<?php

namespace App\UseCases\Desenvolvedor;

use App\Contracts\UseCases\Desenvolvedor\DeleteDesenvolvedorUseCaseInterface;
use App\Models\Desenvolvedor;

class DeleteDesenvolvedorUseCase implements DeleteDesenvolvedorUseCaseInterface
{
    public function execute(Desenvolvedor $desenvolvedor): int
    {
        $desenvolvedor->delete();

        return $desenvolvedor->getKey();
    }
}
