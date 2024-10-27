<!-- @format -->

## Backend Development

### 1. Create a Laravel Project

```bash
composer create-project --prefer-dist laravel/laravel crud-app
cd crud-app
cp .env.example .env
php artisan key:generate
```

### 2. Configure the .env File

#### a. DATABASE_CONNECTION:

- Sets the db connection type
- **Case**: Modify the `DB_CONNECTION` and other database settings to match your database system (e.g., MySQL, PostgreSQL, SQLite).

#### b. Configure database connection details:

- **Case**: Update these when changing your database server or credentials.

#### c. Configure email sending settings.

- Case: Update for different mail services or when switching to production mail servers.

#### d. Sets the name of the application.

- Case: Update this to reflect the name of your application.

### 3. Create a Model and Migration

Create a model along with a migration file for the corresponding database table.

```
php artisan make:model ModelName -m
```

- **Best Practice**: Name the model in singular form to follow Laravel's naming conventions.

### 4. Create a Controller

Create a resource controller that includes default methods for CRUD operations.

```
php artisan make:controller ControllerName  --resource
```

- **Best Practice**: Name your controller after your model followed by "Controller".

### 5. Define the Data Schema

#### a. Update the Migration File

- Open the migration file created in the database/migrations/ directory (e.g., xxxx_xx_xx_create_items_table.php).
- Define the schema for the items table.

#### b. Run Migrations

```
php artisan migrate
```

### 6. Implement Controller Methods

- Open app/Http/Controllers/NameController.php.
- Implement the index, store, show, update, and destroy methods.

### 7. Define API Routes

- a. Open `routes/api.php` and Define Routes for CRUD Operations

```
Route::apiResource('modelnames', ModelNameController::class);
```

## Frontend

### 1. Create a React Project

```
cd ..
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

### 2. Configure Vite

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

```
