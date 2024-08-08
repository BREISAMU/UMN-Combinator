from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from datetime import datetime
from auth_API.authentication_models import User, UserCreate, UserLogin, Token
from auth_API.auth import get_current_user
from .utils import hash_password, verify_password, create_access_token, getNewId
from .dbs import user_db

app = FastAPI()

@app.post("/register/", response_model=User)
async def register(user: UserCreate):
    # Check if the user already exists
    response = user_db.table('users').select('*').eq('email', user.email).execute()
    existing_user = response.data
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Hash the password
    hashed_password = hash_password(user.password)
    
    # Insert new user into Supabase
    new_user = {
        "id": getNewId(),
        "username": user.username,
        "email": user.email,
        "password_hash": hashed_password,
        "created_at": datetime.utcnow().isoformat(),
    }
    user_db.table('users').insert(new_user).execute()
    
    return new_user

@app.post("/token", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # Fetch user from Supabase
    response = user_db.table('users').select('*').eq('email', form_data.username).execute()
    user = response.data
    
    if not user or not verify_password(form_data.password, user[0]["password_hash"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token = create_access_token(data={"sub": user[0]["email"]})
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/users/me/", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user
