# MIKE'S KITCHEN — React + Supabase starter

Premium Nigerian restaurant website built with React, Vite, Framer Motion and Lucide icons.

## 1. Run the website
1. Install Node.js LTS on your computer.
2. Open this folder in VS Code or another code editor.
3. Run `npm install`.
4. Copy `.env.example` to `.env`.
5. Run `npm run dev` and open the local address shown by Vite.

## 2. Connect Supabase
1. Create a project at https://supabase.com.
2. In the Supabase dashboard, open **SQL Editor**.
3. Open `supabase/schema.sql` from this project, copy all its contents, and run it in SQL Editor.
4. In Supabase **Project Settings → API**, copy the Project URL and the publishable/anon key.
5. Put them in `.env`:
   - `VITE_SUPABASE_URL=...`
   - `VITE_SUPABASE_ANON_KEY=...`
6. Stop and restart the Vite development server after editing `.env`.

When configured, customer order and reservation requests are inserted into Supabase. Without credentials, the site safely falls back to the local browser demo.

## 3. Staff access — required before launch
The SQL creates a `staff_members` allow-list. Do not make the staff dashboard public.
- Enable Supabase Auth and create a staff user.
- After that user exists, copy their Auth user UUID from the Supabase dashboard.
- Add that UUID to `public.staff_members` using the SQL Editor:
  `insert into public.staff_members (user_id) values ('YOUR-STAFF-USER-UUID');`
- Build and test a staff login screen before allowing staff to view customer orders.
- The current STAFF DEMO screen is still a local prototype; it does not authenticate staff or fetch protected records.

## Security notes
- Never put a Supabase `service_role` secret in frontend code or a `VITE_` environment variable.
- The included Row Level Security policies allow visitors to submit new orders/reservations but do not allow public visitors to read customer records.
- The current customer-facing UI does not collect online payments.
- Before launch, add server-side validation/rate limiting, staff authentication UI, privacy policy, terms, real contact/address/hours, delivery zones/fees, verified menu prices and food images, and test the complete workflow.
- Supabase credentials are not included. You must create your own project and add its public project URL/key locally.
