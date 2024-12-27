# Test Devin Project

A simple JavaScript utility library providing basic mathematical operations.

## Functions

### sum(a, b)
Adds two numbers together.
```javascript
const { sum } = require('./index.js');
sum(2, 3); // Returns 5
```

### minus(a, b)
Subtracts the second number from the first.
```javascript
const { minus } = require('./index.js');
minus(5, 3); // Returns 2
```

## Installation

```bash
pnpm install
```

## Usage

```javascript
const { sum, minus } = require('./index.js');

// Add numbers
const result1 = sum(5, 3);  // 8

// Subtract numbers
const result2 = minus(5, 3);  // 2
```

## Testing

This project uses Vitest for testing. To run the tests:

```bash
pnpm test
```

The test suite includes various scenarios including positive numbers, negative numbers, and mixed scenarios for both functions.
