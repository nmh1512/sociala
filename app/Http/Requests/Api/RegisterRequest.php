<?php

namespace App\Http\Requests\Api;

use App\Http\Requests\ApiRequest;
use App\Rules\PasswordRule;

class RegisterRequest extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email'     => 'required|email|string|unique:users,email',
            'password'  => [
                'required',
                'confirmed',
                new PasswordRule()
            ]
        ];
    }
    public function messages(): array
    {
        return [
            'first_name.required'   => __('validation.required', ['attribute' => __('messages.first_name')]),
            'last_name.required'    => __('validation.required', ['attribute' => __('messages.last_name')]),
            'email.required'        => __('validation.required', ['attribute' => __('messages.email')]),
            'email.email'           => __('validation.email', ['attribute' => __('messages.email')]),
            'email.unique'          => __('validation.unique', ['attribute' => __('messages.email')]),
            'password.required'     => __('validation.required', ['attribute' => __('messages.password')]),
            'password.confirmed'    => __('validation.confirmed', ['attribute' => __('messages.password')]),
        ];
    }

}
