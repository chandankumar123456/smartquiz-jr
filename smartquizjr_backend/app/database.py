#app/database.py
from dotenv import load_dotenv
import os
from typing import Generator
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session

load_dotenv()

DATABASE_URI = os.getenv("DATABASE_URI")

engine = create_engine(DATABASE_URI)


SessionLocal = sessionmaker(autocommit = False, autoflush= False, bind=engine)
def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()