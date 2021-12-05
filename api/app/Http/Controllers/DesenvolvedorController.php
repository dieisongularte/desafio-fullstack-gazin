<?php

namespace App\Http\Controllers;

use App\Contracts\UseCases\Desenvolvedor\SaveDesenvolvedorUseCaseInterface;
use App\Http\Requests\SaveDesenvolvedorRequest;
use App\Models\Desenvolvedor;

class DesenvolvedorController extends Controller
{
    public function __construct(
        private SaveDesenvolvedorUseCaseInterface $saveDesenvolvedor
    )
    {}

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\SaveDesenvolvedorRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SaveDesenvolvedorRequest $request, Desenvolvedor $desenvolvedor)
    {
        $desenvolvedor->fill($request->validated());

        return response()->json($this->saveDesenvolvedor->execute($desenvolvedor), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Desenvolvedor  $desenvolvedor
     * @return \Illuminate\Http\Response
     */
    public function show(Desenvolvedor $desenvolvedor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\SaveDesenvolvedorRequest  $request
     * @param  \App\Models\Desenvolvedor  $desenvolvedor
     * @return \Illuminate\Http\Response
     */
    public function update(SaveDesenvolvedorRequest $request, Desenvolvedor $desenvolvedor)
    {
        $desenvolvedor->fill($request->validated());

        return response()->json($this->saveDesenvolvedor->execute($desenvolvedor));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Desenvolvedor  $desenvolvedor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Desenvolvedor $desenvolvedor)
    {
        //
    }
}
