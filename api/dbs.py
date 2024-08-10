from supabase import create_client, Client
import os

url: str = os.environ.get('UMN_COMBO_URL')
key: str = os.environ.get('UMN_COMBO_DB_KEY')
supa_db: Client = create_client(url, key)