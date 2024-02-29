import csv
sql_statements = []

with open('HackDavis2024_Directors.csv', 'r') as csv_file:
  csv_reader = csv.DictReader(csv_file)
  for member in csv_reader: 
      
      # Get the team category
      team_category = member['What team are you on? '].strip()
      if team_category in ["Design", "Technical", "Marketing"]:
          continue
      
      first_name = member['First Name'].strip()
      last_name = member['Last Name'].strip()

      # Construct the full name
      full_name = f"{member['First Name'].strip()} {member['Last Name'].strip()}"

      

      # Use the Google Drive link directly as the image URL or process as needed
      image_url = "/images/team_member/" + team_category + "/" +first_name + "_" + last_name + ".jpg"      
      # Assume year is 2024 as it's not provided in the CSV
      year = 2024
      
      # Create the SQL statement
      sql = f"('{full_name}', '{team_category}', '{image_url}', '{team_category}', {year}),"
      sql_statements.append(sql)

print(sql_statements)
