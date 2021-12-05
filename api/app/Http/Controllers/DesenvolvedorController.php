<?php

namespace App\Http\Controllers;

use App\Contracts\UseCases\Desenvolvedor\DeleteDesenvolvedorUseCaseInterface;
use App\Contracts\UseCases\Desenvolvedor\SaveDesenvolvedorUseCaseInterface;
use App\Http\Requests\SaveDesenvolvedorRequest;
use App\Models\Desenvolvedor;

class DesenvolvedorController extends Controller
{
    public function __construct(
        private SaveDesenvolvedorUseCaseInterface $saveDesenvolvedor,
        private DeleteDesenvolvedorUseCaseInterface $deleteDesenvolvedor
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

        $output = $this->saveDesenvolvedor->execute($desenvolvedor);

        return response()->json($output, 201);
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

        $output = $this->saveDesenvolvedor->execute($desenvolvedor);

        return response()->json($output);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Desenvolvedor  $desenvolvedor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Desenvolvedor $desenvolvedor)
    {
        $this->deleteDesenvolvedor->execute($desenvolvedor);

        return response()->noContent();
    }
}
