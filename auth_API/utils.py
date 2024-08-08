from passlib.context import CryptContext
from jose import  jwt
from datetime import datetime, timedelta
from .dbs import user_db
import os

SECRET_KEY = os.environ.get('UTILS_SECRET_KEY')
ALGORITHM = os.environ.get('UTILS_HASHING_ALGO')
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# Eventually add a refresh token to avoid users getting kicked out after short amount of time
def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def decode_token(token: str):
    return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])

def getNewId():
    users = user_db.table('users').select('*').execute().data
    return users[len(users) - 1]["id"] + 1
