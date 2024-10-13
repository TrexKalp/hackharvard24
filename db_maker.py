import sqlite3
import random
from datetime import datetime, timedelta
import time

# Connect to the database (it will be created if it doesn't exist)
conn = sqlite3.connect('./src/data.db')
cursor = conn.cursor()

# Create a table named "medical_supplies" with columns for each item
crash_cart_items = [
    'defibrillator', 'oxygen_tank', 'suction_device', 'iv_fluid', 'medication_drawer',
    'intubation_kit', 'syringe', 'bandages', 'gloves', 'stethoscope'
]

# Create the "medical_supplies" table
columns = ', '.join([f'{item} INTEGER' for item in crash_cart_items])
cursor.execute(f'''
CREATE TABLE IF NOT EXISTS medical_supplies (
    id INTEGER PRIMARY KEY,
    timestamp TEXT,
    {columns}
)
''')

# Function to generate the next value for a supply item
def next_value(current_value):
    new_value = current_value - random.randint(1, 50)
    if new_value <= 50:
        new_value = random.randint(100, 1000)
    return new_value

# Check if the table is empty
cursor.execute('SELECT COUNT(*) FROM medical_supplies')
if cursor.fetchone()[0] == 0:
    # Initialize the supplies with random values between 100 and 200
    supplies = {item: random.randint(100, 200) for item in crash_cart_items}

    # Insert initial values into the table
    cursor.execute(f'''
    INSERT INTO medical_supplies (timestamp, {', '.join(crash_cart_items)})
    VALUES (?, {', '.join(['?'] * len(crash_cart_items))})
    ''', ['10/1'] + list(supplies.values()))
    conn.commit()
else:
    # Fetch the latest values from the table
    cursor.execute(f'SELECT {", ".join(crash_cart_items)} FROM medical_supplies ORDER BY id DESC LIMIT 1')
    row = cursor.fetchone()
    supplies = dict(zip(crash_cart_items, row))

# Initialize the start date and day counter
start_date = datetime.strptime('10/1', '%m/%d')
day_counter = 0

# Update the supplies every second
try:
    while True:
        time.sleep(1)
        supplies = {item: next_value(value) for item, value in supplies.items()}
        current_date = (start_date + timedelta(days=day_counter)).strftime('%m/%d')
        cursor.execute(f'''
        INSERT INTO medical_supplies (timestamp, {', '.join(crash_cart_items)})
        VALUES (?, {', '.join(['?'] * len(crash_cart_items))})
        ''', [current_date] + list(supplies.values()))
        conn.commit()
        day_counter += 1
except KeyboardInterrupt:
    pass

# Close the connection
conn.close()