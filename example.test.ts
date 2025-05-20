import { greeting } from './example.js';
import test from 'node:test';
import assert from 'node:assert';

test('example', () => {
	assert.fail(greeting);
});
