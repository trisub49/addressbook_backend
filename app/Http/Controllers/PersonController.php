<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller {
    
    public function showAllPersons() {
        return response()->json(Person::with("categories")->orderBy('id', 'ASC')->get());
    }

    public function showOnePerson($id) {
        return response()->json(Person::find($id));
    }

    public function create(Request $request) {
        
        if(!$this->validateEmail($request->email)) {
            return response()->json("email error", 406);
        }
        
        if(Person::select('id')->where('email', $request->email)->first() != null) {
            return response()->json("email taken", 406);
        }
        if(strlen($request->phone_number) && !$this->validatePhoneNumber($request->phone_number)) {
            return response()->json("phone number error", 406);
        }
        
        $request->merge([
            'created_date' => date('Y-m-d H:i')
        ]);
        $person = Person::create($request->only('name', 'email', 'phone_number', 'created_date'));

        $person->categories()->detach();
        $person->categories()->attach($request->categories); 

        return response()->json($person, 201);
    }

    public function update($id, Request $request) {
        $person = Person::findOrFail($id);
        $person->update($request->only('name', 'email', 'phone_number'));

        $person->categories()->detach();
        $person->categories()->attach($request->categories);

        return response()->json($person, 200);
    }

    public function delete($id) {
        Person::findOrFail($id)->delete();
        return response('Sikeres törlés.', 200);
    }

    private function validateEmail($email) {

        if(strpos($email, '@') == false) return false;
        if(strpos($email, '.') == false) return false;

        return true;
    }

    private function validatePhoneNumber($phoneNumber) {
        
        $providers = [ '20', '30', '31', '70'];
        $provider = substr($phoneNumber, 2, 2);

        if(substr($phoneNumber, 0, 2) != '36') return false;
        if(strlen($phoneNumber) != 11) return false;
        if(!in_array($provider, $providers)) return false;

        return true;
    }
    
}