<?php

namespace App\UseCases\Desenvolvedor;

use App\Contracts\UseCases\Desenvolvedor\ReadAllDesenvolvedorUseCaseInterface;
use App\Models\Desenvolvedor;
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

    public function execute(): Collection | JsonResource
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
