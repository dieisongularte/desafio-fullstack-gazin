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
        return [
            'id' => $this->id,
            'nivel' => $this->nivel,
            'nome' => $this->nome,
            'sexo' => $this->sexo,
            'datanascimento' => $this->datanascimento,
            'idade' => $this->idade,
            'hobby' => $this->hobby,
        ];
    }
}
