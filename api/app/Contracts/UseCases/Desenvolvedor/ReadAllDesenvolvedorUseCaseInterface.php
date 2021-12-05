<?php

namespace App\Contracts\UseCases\Desenvolvedor;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

interface ReadAllDesenvolvedorUseCaseInterface
{
    function execute(): Collection | JsonResource;
}
