<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class CustomNotFoundException extends Exception
{
    public function __construct(
        private Throwable $exception
    )
    {}

    /**
     * Report the exception.
     *
     * @return void
     */
    public function report()
    {
        //
    }

    /**
     * Render the exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function render($request)
    {
        if ($this->exception instanceof ModelNotFoundException)
            $message = 'Registro(s) não encontrado(s).';
        else if ($this->exception instanceof NotFoundHttpException)
            $message = 'Rota não encontrada.';
        else
            $message = 'Não encontrado.';

        return response()->json(['error' => $message], 404);
    }
}
