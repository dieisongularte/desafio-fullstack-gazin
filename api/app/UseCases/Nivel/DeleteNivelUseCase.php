<?php

namespace App\UseCases\Nivel;

use App\Contracts\UseCases\Nivel\DeleteNivelUseCaseInterface;
use App\Models\Nivel;
use Illuminate\Auth\Access\AuthorizationException;

class DeleteNivelUseCase implements DeleteNivelUseCaseInterface
{
    public function execute(Nivel $nivel): int
    {
        throw_unless(
            $nivel->desenvolvedores->isEmpty(),
            new AuthorizationException('Não foi possível deletar, pois há vínculo com desenvolvedores')
        );

        $nivel->delete();

        return $nivel->getKey();
    }
}
