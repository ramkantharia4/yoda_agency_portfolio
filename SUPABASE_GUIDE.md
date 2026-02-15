# Supabase Integration Guide (Simplified)

This guide explains how to set up your Supabase database for the **Project Initiation** form.

## 1. Cleanup & Setup
Run the following SQL in your Supabase **SQL Editor** to remove unnecessary tables and create the project initiation table.

```sql
-- 1. Create the Project Initiations table
create table if not exists project_initiations (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  business_type text not null,
  website text,
  requirements text not null
);

-- 2. Create the Meetings table
create table if not exists meetings (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text not null,
  date text not null, -- Stores YYYY-MM-DD
  time text not null,
  goals text not null
);

-- 3. Enable Row Level Security (RLS)
alter table project_initiations enable row level security;
alter table meetings enable row level security;

-- 4. Create policies to allow anonymous inserts
create policy "Allow anonymous inserts" on project_initiations for insert with check (true);
create policy "Allow anonymous inserts" on meetings for insert with check (true);
```

## 2. Environment Variables
Ensure your `.env.local` (or `.env`) has these keys:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## 3. Usage
The form data is now automatically sent to the `project_initiations` table when a client submits the "Initiate Launch" form in the `/start` section.
