<?php

namespace App\UseCases\Nivel;

use App\Contracts\UseCases\Nivel\ReadAllNivelUseCaseInterface;
use App\Models\Nivel;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ReadAllNivelUseCase implements ReadAllNivelUseCaseInterface
{
    public function __construct(
        private string $outputClass
    )
    {}

    public function execute(?int $itemsPerPage, ?int $page): Collection | JsonResource
    {
        $queryBuilder = QueryBuilder::for(Nivel::class)
            ->allowedSorts('nivel', 'desenvolvedores_count')
            ->allowedIncludes('desenvolvedores')
            ->allowedFilters(AllowedFilter::partial('nivel'));

        if (is_null($itemsPerPage) && is_null($page)) {
            $niveis = $queryBuilder->get();

            throw_unless($niveis->isNotEmpty(), new ModelNotFoundException());

            return $niveis;
        }

        if (!is_null($page) && is_null($itemsPerPage))
            $itemsPerPage = 10;

        $niveis = $queryBuilder->paginate($itemsPerPage);

        throw_unless($niveis->isNotEmpty(), new ModelNotFoundException());

        return new $this->outputClass($niveis);
    }
}
