<?php

function alphabet_soup($str){
    $str_to_array = str_split($str);
    sort($str_to_array, SORT_STRING);
    $str_ordered = implode('', $str_to_array);
    return $str_ordered;
}

echo alphabet_soup("hello"); //ehllo