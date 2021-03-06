<?php

namespace App\Contracts\UseCases\Nivel;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

interface ReadAllNivelUseCaseInterface
{
    function execute(?int $itemsPerPage, ?int $page): Collection | JsonResource;
}
