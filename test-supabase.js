import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pcmdzvrboezrkwvtqlfc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjbWR6dnJib2V6cmt3dnRxbGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NDc1MzEsImV4cCI6MjA4NjAyMzUzMX0.lzjJhofSO0t8pLTRePJxzDnnVBXxwjwxvZx_F-BnXfE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
    console.log('🔍 Testing Supabase connection...\n');

    // Test 1: Check if we can connect
    console.log('1. Testing basic connection...');
    try {
        const { data, error } = await supabase.from('meetings').select('count');
        if (error) {
            console.error('❌ Connection error:', error.message);
            if (error.code === '42P01') {
                console.log('\n⚠️  Table "meetings" does not exist!');
                console.log('📋 You need to run the SQL queries in your Supabase Dashboard.');
                console.log('👉 Go to: https://supabase.com/dashboard/project/pcmdzvrboezrkwvtqlfc/sql/new');
            }
        } else {
            console.log('✅ Connection successful!');
            console.log('📊 Meetings table exists');
        }
    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }

    // Test 2: Check project_initiations table
    console.log('\n2. Testing project_initiations table...');
    try {
        const { data, error } = await supabase.from('project_initiations').select('count');
        if (error) {
            console.error('❌ Error:', error.message);
            if (error.code === '42P01') {
                console.log('⚠️  Table "project_initiations" does not exist!');
            }
        } else {
            console.log('✅ Project initiations table exists');
        }
    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }

    // Test 3: Try to insert a test record
    console.log('\n3. Testing insert permission...');
    try {
        const { data, error } = await supabase
            .from('meetings')
            .insert([{
                email: 'test@example.com',
                date: '2026-02-15',
                time: '11:00 AM',
                goals: 'Test connection'
            }])
            .select();

        if (error) {
            console.error('❌ Insert error:', error.message);
        } else {
            console.log('✅ Insert successful!');
            console.log('📝 Test record created:', data);
        }
    } catch (err) {
        console.error('❌ Unexpected error:', err);
    }
}

testConnection();
