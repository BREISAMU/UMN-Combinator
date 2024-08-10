from pydantic import BaseModel, EmailStr, Json
from typing import Optional
from datetime import datetime

class User(BaseModel):
    id: Optional[int]
    username: str
    password_hash: str
    email: EmailStr
    created_at: str
    bio: Optional[str] = ""

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class Post(BaseModel):
    id: int
    user_id: int
    title: str
    description: str
    github: Optional[str] = ""
    discord: Optional[str] = ""
    skills: Optional[dict]

class PostCreate(BaseModel):
    user_id: int
    title: str
    description: str
    github: Optional[str] = ""
    discord: Optional[str] = ""
    skills: Optional[dict]
