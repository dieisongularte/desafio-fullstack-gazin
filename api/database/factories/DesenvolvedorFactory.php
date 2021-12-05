<?php

namespace Database\Factories;

use App\Constants\GenderConstants;
use App\Models\Nivel;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class DesenvolvedorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $genderSignList = [GenderConstants::Female, GenderConstants::Male, GenderConstants::Other];

        $genderSign = $this->faker->randomElement($genderSignList);

        $gender = match ($genderSign) {
            GenderConstants::Female => 'female',
            GenderConstants::Male => 'male',
            GenderConstants::Other => null
        };

        $name = $this->faker->firstName($gender) . ' ' . $this->faker->lastName();

        $birthDateTime = Carbon::parse($this->faker->dateTimeBetween('-30 years', '-22 years'));

        return [
            'nivel_id' => Nivel::inRandomOrder()->first(),
            'nome' => $name,
            'sexo' => $genderSign,
            'datanascimento' => $birthDateTime->format('Y-m-d'),
            'idade' => $birthDateTime->diffInYears(Carbon::now()),
            'hobby' => $this->faker->randomElement($this->getHobbiesList())
        ];
    }

    private function getHobbiesList(): array
    {
        return [
            'Pescar',
            'Tocar violão',
            'Viajar',
            'Natação',
            'Dançar'
        ];
    }
}
