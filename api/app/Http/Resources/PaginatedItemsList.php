<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PaginatedItemsList extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $resourceData = $this->resource->toArray();

        return [
            'current_page' => $resourceData["current_page"],
            'last_page' => $resourceData['last_page'],
            'total' => $resourceData['total'],
            'per_page' => (int) $resourceData['per_page'],
            'data' => $resourceData['data']
        ];
    }
}