<?php

namespace App\UseCases\Nivel;

use App\Contracts\UseCases\Nivel\DeleteNivelUseCaseInterface;
use App\Models\Nivel;
use Nette\NotImplementedException;

class DeleteNivelUseCase implements DeleteNivelUseCaseInterface
{
    public function execute(Nivel $nivel): int
    {
        throw_unless(
            $nivel->desenvolvedores->isEmpty(),
            new NotImplementedException('Não foi possível deletar, pois há vínculo com desenvolvedores')
        );

        $nivel->delete();

        return $nivel->getKey();
    }
}
