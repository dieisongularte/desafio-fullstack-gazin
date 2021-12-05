<?php

namespace App\Contracts\UseCases\Desenvolvedor;

use App\Models\Desenvolvedor;
use Illuminate\Http\Resources\Json\JsonResource;

interface SaveDesenvolvedorUseCaseInterface
{
    function execute(Desenvolvedor $desenvolvedor): JsonResource;
}