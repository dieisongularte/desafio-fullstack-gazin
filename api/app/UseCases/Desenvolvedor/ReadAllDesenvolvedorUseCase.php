<?php

namespace App\UseCases\Desenvolvedor;

use App\Contracts\UseCases\Desenvolvedor\ReadAllDesenvolvedorUseCaseInterface;
use App\Models\Desenvolvedor;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ReadAllDesenvolvedorUseCase implements ReadAllDesenvolvedorUseCaseInterface
{
    public function __construct(
        private string $outputClass
    )
    {}

    public function execute(?int $itemsPerPage, ?int $page): Collection | JsonResource
    {
        $queryBuilder = QueryBuilder::for(Desenvolvedor::class)
            ->allowedSorts('nome', 'sexo', 'datanascimento', 'idade', 'hobby')
            ->allowedIncludes('nivel')
            ->allowedFilters(
                AllowedFilter::partial('nome'),
                AllowedFilter::exact('sexo'),
                'datanascimento',
                AllowedFilter::exact('idade'),
                AllowedFilter::partial('hobby')
            );

        if (is_null($itemsPerPage) && is_null($page)) {
            $desenvolvedores = $queryBuilder->get();

            throw_unless($desenvolvedores->isNotEmpty(), new ModelNotFoundException());

            return $desenvolvedores;
        }

        if (!is_null($page) && is_null($itemsPerPage))
            $itemsPerPage = 10;

        $desenvolvedores = $queryBuilder->paginate($itemsPerPage);

        throw_unless($desenvolvedores->isNotEmpty(), new ModelNotFoundException());

        return new $this->outputClass($desenvolvedores);
    }
}
