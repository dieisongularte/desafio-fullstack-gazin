<?php

namespace App\Contracts\UseCases\Nivel;

use App\Models\Nivel;
use Illuminate\Http\Resources\Json\JsonResource;

interface SaveNivelUseCaseInterface
{
    function execute(Nivel $nivel): JsonResource;
}