<?php

namespace App\UseCases\Desenvolvedor;

use App\Contracts\UseCases\Desenvolvedor\ReadDesenvolvedorUseCaseInterface;
use App\Models\Desenvolvedor;
use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\QueryBuilder\QueryBuilder;

class ReadDesenvolvedorUseCase implements ReadDesenvolvedorUseCaseInterface
{
    public function __construct(
        private string $outputClass
    )
    {}

    public function execute(Desenvolvedor $desenvolvedor): JsonResource
    {
        $desenvolvedor = QueryBuilder::for(Desenvolvedor::where('id', $desenvolvedor->id))
            ->allowedIncludes('nivel')
            ->first();

        return new $this->outputClass($desenvolvedor);
    }
}
