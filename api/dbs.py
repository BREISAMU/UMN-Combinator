from supabase import create_client, Client
import os

print("\n\nTHIS IS A MESSAGE\n\n")
url: str = os.environ.get('UMN_COMBO_URL')
key: str = os.environ.get('UMN_COMBO_DB_KEY')
print(url)
print(key)
supa_db: Client = create_client(url, key)