# app/main.py
from fastapi import FastAPI
from routes.quiz import router as quiz_router

from models import Base
from database import engine

# fastapi instance
app = FastAPI(title="SmartQuiz Jr Backend", version="1.0")

Base.metadata.create_all(bind = engine)

app.include_router(quiz_router)
# Test route
@app.get("/ping")
def ping():
    return {"message": "SmartQuiz Jr Backend Is Alive!"}

@app.get("/")
def home():
    return {200: "Working"}

