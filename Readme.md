# TypeScript

## Definition

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing to JavaScript, allowing developers to catch errors early through a type system and making JavaScript development more efficient and predictable.

## Example

```typescript
// JavaScript
function greet(name) {
  return "Hello, " + name;
}

// TypeScript
function greet(name: string): string {
  return "Hello, " + name;
}

const message = greet("World"); // ✓ Valid
// const error = greet(42);      // ✗ Error: Argument of type 'number' is not assignable to parameter of type 'string'
```

## Background

TypeScript was developed and is maintained by Microsoft. It was first released in October 2012 as an open-source project designed to address the challenges of building large-scale JavaScript applications. The language was created by Anders Hejlsberg, the lead architect of C# and creator of Delphi and Turbo Pascal.

The primary motivations for creating TypeScript were:
- Enable better tooling and IDE support for JavaScript
- Catch errors at compile-time rather than runtime
- Make large codebases more maintainable
- Provide clear interfaces and contracts between code modules
- Support modern JavaScript features while maintaining backward compatibility

## How TypeScript Converts to JavaScript

TypeScript goes through a compilation process that transforms TypeScript code (.ts files) into JavaScript code (.js files). This process involves five main components working together:

### 1. Lexer (Scanner)

The lexer is the first component in the TypeScript compiler pipeline. It reads the source code character by character and converts it into a stream of tokens.

**What it does:**
- Scans the raw text of your TypeScript file
- Identifies keywords, identifiers, operators, literals, and punctuation
- Removes whitespace and comments (unless needed for documentation)
- Creates tokens with information about their type and position

**Example:**
```typescript
let age: number = 25;
```

The lexer converts this into tokens:
- `let` (keyword)
- `age` (identifier)
- `:` (colon)
- `number` (identifier/type)
- `=` (equals operator)
- `25` (numeric literal)
- `;` (semicolon)

### 2. Parser

The parser takes the stream of tokens from the lexer and builds an Abstract Syntax Tree (AST), which represents the grammatical structure of the code.

**What it does:**
- Validates the syntax of the code
- Creates a hierarchical tree structure representing the program
- Identifies constructs like functions, classes, variables, and expressions
- Reports syntax errors if the code doesn't follow TypeScript grammar rules

**Example AST structure:**
```
VariableStatement
  ├─ VariableDeclarationList
      └─ VariableDeclaration
          ├─ Identifier: "age"
          ├─ TypeAnnotation: NumberKeyword
          └─ Initializer: NumericLiteral(25)
```

### 3. Binder

The binder walks through the AST and creates symbols, establishing the relationship between declarations and their uses throughout the code.

**What it does:**
- Creates a symbol table that maps identifiers to their declarations
- Determines the scope of each symbol (local, module, global)
- Links uses of variables/functions to their declarations
- Establishes the containment hierarchy (which functions/classes contain which symbols)

**Example:**
```typescript
function calculate(x: number) {
  let result = x * 2;
  return result;
}
```

The binder creates symbols for:
- `calculate` (function symbol in outer scope)
- `x` (parameter symbol in function scope)
- `result` (variable symbol in function scope)

### 4. Checker (Type Checker)

The checker is the core of TypeScript's type system. It uses the AST and symbol information to perform type checking and inference.

**What it does:**
- Infers types when not explicitly specified
- Validates that operations are performed on compatible types
- Checks function calls have correct arguments
- Verifies interface implementations and class inheritance
- Reports type errors when mismatches are found
- Resolves type aliases, generics, and complex type relationships

**Example:**
```typescript
function add(a: number, b: number): number {
  return a + b;
}

add(5, 10);     // ✓ Checker validates: numbers match expected types
add("5", "10"); // ✗ Checker reports error: strings aren't numbers
```

### 5. Emitter

The emitter is the final stage that generates JavaScript output from the TypeScript AST.

**What it does:**
- Transforms TypeScript-specific syntax to JavaScript
- Removes type annotations (they don't exist in JavaScript)
- Transpiles modern JavaScript features to older versions if configured
- Generates source maps for debugging
- Outputs .js files (and optionally .d.ts declaration files)

**Example transformation:**
```typescript
// TypeScript input
class Person {
  constructor(public name: string) {}
  greet(): void {
    console.log(`Hello, ${this.name}`);
  }
}
```

```javascript
// JavaScript output (ES5 target)
var Person = (function () {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function () {
    console.log("Hello, " + this.name);
  };
  return Person;
}());
```

## Setting Up a TypeScript Project

### Prerequisites

Ensure you have Node.js and npm installed on your system.

### Method 1: Quick Start

```bash
# Install TypeScript globally
npm install -g typescript

# Create a new directory and navigate into it
mkdir my-typescript-project
cd my-typescript-project

# Initialize a package.json file
npm init -y

# Install TypeScript as a dev dependency
npm install --save-dev typescript

# Initialize TypeScript configuration
npx tsc --init
```

This creates a `tsconfig.json` file with default compiler options.

### Method 2: Manual Setup

**Step 1:** Create project structure
```bash
mkdir my-typescript-project
cd my-typescript-project
```

**Step 2:** Initialize npm
```bash
npm init -y
```

**Step 3:** Install TypeScript
```bash
npm install --save-dev typescript @types/node
```

**Step 4:** Create `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

**Step 5:** Create source directory and first file
```bash
mkdir src
echo 'console.log("Hello, TypeScript!");' > src/index.ts
```

**Step 6:** Add scripts to `package.json`
```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsc --watch"
  }
}
```

**Step 7:** Compile and run
```bash
npm run build
npm start
```

### Method 3: Using ts-node for Development

For a faster development experience without manual compilation:

```bash
npm install --save-dev ts-node nodemon

# Add to package.json scripts
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts"
  }
}

# Run in development mode
npm run dev
```

### Project Structure

A typical TypeScript project structure:

```
my-typescript-project/
├── src/
│   ├── index.ts
│   ├── utils/
│   │   └── helpers.ts
│   └── types/
│       └── custom.d.ts
├── dist/           (generated by compiler)
├── node_modules/
├── package.json
├── tsconfig.json
└── .gitignore
```

### Important tsconfig.json Options

- `target`: ECMAScript version for output JavaScript
- `module`: Module system to use (commonjs, es6, etc.)
- `strict`: Enable all strict type checking options
- `outDir`: Directory for compiled output files
- `rootDir`: Root directory of source files
- `sourceMap`: Generate .map files for debugging
- `declaration`: Generate .d.ts declaration files

### Recommended .gitignore

```
node_modules/
dist/
*.js
*.js.map
*.d.ts
!jest.config.js
```

## Additional Resources

- Official Documentation: https://www.typescriptlang.org/docs/
- TypeScript Playground: https://www.typescriptlang.org/play
- Compiler API: https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API
- TypeScript Deep Dive: https://basarat.gitbook.io/typescript/