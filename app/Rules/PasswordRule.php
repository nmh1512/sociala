<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class PasswordRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (strlen($value) < 8 || 
            (!preg_match('/[A-Z]/', $value) || !preg_match('/[a-z]/', $value)) ||
            (!preg_match('/\d/', $value)) ||
            (!preg_match('/[^A-Za-z0-9]/', $value))
        ) {
            $fail(__('passwords.invalid'));
            return;
        }

    }
}
