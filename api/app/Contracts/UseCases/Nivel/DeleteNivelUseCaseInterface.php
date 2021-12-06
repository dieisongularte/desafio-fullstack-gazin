<?php

namespace App\Contracts\UseCases\Nivel;

use App\Models\Nivel;

interface DeleteNivelUseCaseInterface
{
    function execute(Nivel $nivel): void;
}
