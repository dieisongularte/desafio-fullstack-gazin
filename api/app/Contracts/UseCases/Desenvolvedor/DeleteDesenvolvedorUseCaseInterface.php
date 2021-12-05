<?php

namespace App\Contracts\UseCases\Desenvolvedor;

use App\Models\Desenvolvedor;

interface DeleteDesenvolvedorUseCaseInterface
{
    function execute(Desenvolvedor $desenvolvedor): int;
}
