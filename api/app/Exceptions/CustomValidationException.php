<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Validation\ValidationException;

class CustomValidationException extends Exception
{
    public function __construct(
        private ValidationException $exception
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
        $message = 'Dados inválidos informados.';
        $data = $this->exception->errors();

        return response()->json(['message' => $message, 'errors' => $data], 422);
    }
}
