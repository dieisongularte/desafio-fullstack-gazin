<?php

namespace App\Exceptions;

use Exception;
use Throwable;

class CustomNotImplementedException extends Exception
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
        $message = $this->exception->getMessage();

        return response()->json(['error' => $message], 501);
    }
}
