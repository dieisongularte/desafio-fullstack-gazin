<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'before_or_equal' => ':attribute deve ser uma data anterior ou igual a :date.',
    'date' => ':attribute não é uma data válida.',
    'exists' => ':attribute selecionado é inválido.',
    'in' => ':attribute selecionado é inválido.',
    'integer' => ':attribute deve ser um inteiro.',
    'max' => [
        'string' => ':attribute não deve ter mais que :max caracteres.'
    ],
    'required' => 'O campo :attribute é obrigatório.',
    'size' => [
        'string' => ':attribute deve ter :size caracteres.',
    ],
    'string' => ':attribute deve ser uma string.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => include_once __DIR__.'/validation-attributes.php',

];
