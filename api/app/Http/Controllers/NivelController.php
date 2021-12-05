<?php

namespace App\Http\Controllers;

use App\Contracts\UseCases\Nivel\SaveNivelUseCaseInterface;
use App\Http\Requests\SaveNivelRequest;
use App\Models\Nivel;

class NivelController extends Controller
{
    public function __construct(
        private SaveNivelUseCaseInterface $saveNivel
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
     * @param  \App\Http\Requests\SaveNivelRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SaveNivelRequest $request, Nivel $nivel)
    {
        $nivel->fill($request->validated());

        return response()->json($this->saveNivel->execute($nivel), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Nivel  $nivel
     * @return \Illuminate\Http\Response
     */
    public function show(Nivel $nivel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\SaveNivelRequest  $request
     * @param  \App\Models\Nivel  $nivel
     * @return \Illuminate\Http\Response
     */
    public function update(SaveNivelRequest $request, Nivel $nivel)
    {
        $nivel->fill($request->validated());

        return response()->json($this->saveNivel->execute($nivel));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Nivel  $nivel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Nivel $nivel)
    {
        //
    }
}
