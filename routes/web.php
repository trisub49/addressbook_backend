<?php

$router->group(['prefix' => 'api'], function () use ($router) {

  $router->get('person',  ['uses' => 'PersonController@showAllPersons']);
  $router->get('person/{id}', ['uses' => 'PersonController@showOnePerson']);
  $router->post('person', ['uses' => 'PersonController@create']);
  $router->put('person/{id}', ['uses' => 'PersonController@update']);
  $router->delete('person/{id}', ['uses' => 'PersonController@delete']);

  $router->get('category',  ['uses' => 'CategoryController@showAllCategories']);
  $router->post('category', ['uses' => 'CategoryController@create']);
  $router->put('category/{id}', ['uses' => 'CategoryController@update']);
  $router->delete('category/{id}', ['uses' => 'CategoryController@delete']);
});


$router->get('/', function() { 
  return view('index'); 
});
