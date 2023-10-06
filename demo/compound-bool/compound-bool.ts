/* eslint-disable */
import { strict as assert } from "assert";

// NOT
const writing = true;

const reading = !writing; //will invert to false
assert.equal(reading, false);

// OR
// (Pick 1 movie)
const rating = 9;
const favoriteMovie = false;
const suggestMovie = rating > 8 || favoriteMovie; //this is a compound-boolean expression
assert.equal(suggestMovie, true);

// AND

const age = 18;
const isTeenager = age >= 13 && age < 20;
assert.equal(isTeenager, true);

// our package

const packageWeight = 30;
const packageLength = 50;
const shippingDistance = 99;
const air = true;
const priority = true;
const feeExemption = false;

const extraFee = !feeExemption && (packageWeight > 25 || packageLength > 40); //sometimes of not we say don't when reading it
