<?php

namespace App\UseCases\Nivel;

use App\Contracts\UseCases\Nivel\ReadAllNivelUseCaseInterface;
use App\Models\Nivel;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;
use Spatie\QueryBuilder\QueryBuilder;

class ReadAllNivelUseCase implements ReadAllNivelUseCaseInterface
{
    public function __construct(
        private string $outputClass
    )
    {}

    public function execute(): Collection | JsonResource
    {
        $queryBuilder = QueryBuilder::for(Nivel::class)
            ->allowedSorts('nivel', 'desenvolvedores_count')
            ->allowedIncludes(['desenvolvedores']);

        if (request()->has('perPage') || request()->has('page')) {
            $itemsPerPage = request()->query('perPage', 10);
            $lengthAwarePaginator = $queryBuilder->paginate($itemsPerPage)->appends(request()->query());
            $output = new $this->outputClass($lengthAwarePaginator);
        } else {
            $output = $queryBuilder->get();
        }

        return $output;
    }
}