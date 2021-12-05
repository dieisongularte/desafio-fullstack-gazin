<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DesenvolvedorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $desenvolvedorData = $this->resource->toArray();

        $desenvolvedorNivel = array_key_exists('nivel', $desenvolvedorData)
            ? $desenvolvedorData['nivel']
            : null;

        return [
            'id' => $desenvolvedorData['id'],
            'nivel_id' => $desenvolvedorData['nivel_id'],
            'nome' => $desenvolvedorData['nome'],
            'sexo' => $desenvolvedorData['sexo'],
            'datanascimento' => $desenvolvedorData['datanascimento'],
            'idade' => $desenvolvedorData['idade'],
            'hobby' => $desenvolvedorData['hobby'],
            'nivel' => $this->when(!empty($desenvolvedorNivel), $desenvolvedorNivel)
        ];
    }
}
