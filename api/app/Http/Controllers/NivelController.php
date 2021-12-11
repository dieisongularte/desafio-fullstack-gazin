<?php

namespace App\Http\Controllers;

use App\Contracts\UseCases\Nivel\DeleteNivelUseCaseInterface;
use App\Contracts\UseCases\Nivel\ReadAllNivelUseCaseInterface;
use App\Contracts\UseCases\Nivel\ReadNivelUseCaseInterface;
use App\Contracts\UseCases\Nivel\SaveNivelUseCaseInterface;
use App\Http\Requests\SaveNivelRequest;
use App\Models\Nivel;
use Illuminate\Http\Request;

class NivelController extends Controller
{
    public function __construct(
        private ReadAllNivelUseCaseInterface $readAllNivel,
        private ReadNivelUseCaseInterface $readNivel,
        private SaveNivelUseCaseInterface $saveNivel,
        private DeleteNivelUseCaseInterface $deleteNivel
    )
    {}

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $perPage = $request->query('perPage', NULL);
        $page = $request->query('page', NULL);

        $output = $this->readAllNivel->execute($perPage, $page);

        return response()->json($output);
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

        $output = $this->saveNivel->execute($nivel);

        return response()->json($output, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Nivel  $nivel
     * @return \Illuminate\Http\Response
     */
    public function show(Nivel $nivel)
    {
        $output = $this->readNivel->execute($nivel);

        return response()->json($output);
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

        $output = $this->saveNivel->execute($nivel);

        return response()->json($output);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Nivel  $nivel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Nivel $nivel)
    {
        $this->deleteNivel->execute($nivel);

        return response()->noContent();
    }
}
